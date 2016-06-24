<?php

namespace Drupal\twitter_search_block\Plugin\Block;
/**
 *
 */
class TwitterAPIClass {

  /**
   * Returns the embedded timeline of tweets.
   *
   * @return string
   *   The entity type ID.
   * @param string $search_value
   *   Search value for embedded timeline
   * @param array $settingsArray
   *   to pass the setting value of OAuth
   *   Array to pass the setting value of OAuth
   * @param int $countCount
   *   for the number of tweets
   *   Count for the number of tweets
   * @param string $result_type
   *   Result type for the search: mixed,recent,polpular.
   */
  public function twitter_api($search_value, $settings, $count, $result_type) {

    $output = '';
    /**
 * URL for REST request, see: https://dev.twitter.com/docs/api/1.1/
**/
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $requestMethod = 'GET';
    $getfield = '?q=' . $search_value . '&count=' . $count . '&result_type=' . $result_type;
    $twitter = new TwitterAPIExchange($settings);
    $api_response = $twitter->setGetfield($getfield)
            ->buildOauth($url, $requestMethod)
            ->performRequest();

    $response = json_decode($api_response);
    foreach ($response->statuses as $response_array) {
      $tweet_id = $response_array->id_str;
      $url = 'https://api.twitter.com/1.1/statuses/oembed.json';
      $requestMethod = 'GET';
      $getfield = '?id=' . $tweet_id . '&hide_media=true&maxwidth=260&hide_thread=true';
      $twitter_object = new TwitterAPIExchange($settings);
      $api_timeline = $twitter_object->setGetfield($getfield)
                ->buildOauth($url, $requestMethod)
                ->performRequest();

      $response_timeline = json_decode($api_timeline);
      $output .= $response_timeline->html;
    }
    return $output;
  }

}
