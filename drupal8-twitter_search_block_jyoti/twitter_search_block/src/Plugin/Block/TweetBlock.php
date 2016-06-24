<?php

namespace Drupal\twitter_search_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;

require_once 'TwitterAPIExchange.php';

/**
 * Provides a block for displaying twitter embedded timeline for node.
 *
 * @Block(
 * id = "tweet_block",
 * admin_label = @Translation("Twitter Block:Node"),
 * category = @Translation("Blocks")
 * )
 */
class TweetBlock extends BlockBase implements BlockPluginInterface {

  /**
   * Implements \Drupal\block\BlockBase::build().
   */
  public function build() {

    $config = \Drupal::config('twitter_search_block.settings');
    $count = $config->get('tweets_count');
    $result_type = $config->get('result_type');
    $node = \Drupal::request()->attributes->get('node');
    $bundle_fields = \Drupal::entityManager()->getFieldDefinitions('node', 'article');
    foreach (array_keys($bundle_fields) as $field_name) {
      if ($bundle_fields[$field_name]->getType() == 'twitter_hashtag_fieldtype') {
        $field_data[] = $field_name;
      }
    }

    $settings = array(
      'oauth_access_token' => $config->get('oauth_access_token'),
      'oauth_access_token_secret' => $config->get('oauth_access_token_secret'),
      'consumer_key' => $config->get('consumer_key'),
      'consumer_secret' => $config->get('consumer_secret'),
    );

    if (!empty($node->$field_data[0]->tweet_values)) {
      $search_value = $node->$field_data[0]->tweet_values;
      $result = TwitterAPIClass::twitter_api($search_value, $settings, $count, $result_type);
      return array(
        '#children' => $result,
        '#cache' => array(
          'max-age' => 0,
        ),
      );
    }
  }

}
