<?php

namespace Drupal\twitter_search_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;

require_once 'TwitterAPIExchange.php';

/**
 * Provides block with embedded tweets for independent use.
 *
 * @Block(
 * id = "general_twitter_block",
 * admin_label = @Translation("Twitter Block:General"),
 * category = @Translation("Blocks")
 * )
 */
class TwitterBlockGeneral extends BlockBase implements BlockPluginInterface {

  /**
   * Implements \Drupal\block\BlockBase::build().
   */
  public function build() {

    $config = \Drupal::config('twitter_search_block.settings');
    $count = $config->get('tweets_count');
    $result_type = $config->get('result_type');
    $search_value = $config->get('search_query_value');
    $settings = array(
      'oauth_access_token' => $config->get('oauth_access_token'),
      'oauth_access_token_secret' => $config->get('oauth_access_token_secret'),
      'consumer_key' => $config->get('consumer_key'),
      'consumer_secret' => $config->get('consumer_secret'),
    );

    $result = TwitterAPIClass::twitter_api($search_value, $settings, $count, $result_type);
    return array(
      '#children' => $result,
      '#cache' => array(
        'max-age' => 0,
      ),
    );
  }

}
