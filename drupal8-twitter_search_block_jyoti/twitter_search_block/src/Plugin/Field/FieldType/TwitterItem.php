<?php

namespace Drupal\twitter_search_block\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\TypedData\DataDefinition;

/**
 *
 * @FieldType(
 *   id = "twitter_search_fieldtype",
 *   label = @Translation("Twitter Search Query"),
 *   description = @Translation("This field allows you to enter keyword to be searched in tweeets and get its embedded timeline"),
 *   default_formatter = "twitter_search_formatter",
 *   default_widget = "twitter_search_widget"
 * )
 */
class TwitterItem extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    return array(
      'columns' => array(
        'tweet_values' => array(
          'type' => 'varchar',
          'length' => 256,
          'not null' => TRUE,
        ),
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    $properties['tweet_values'] = DataDefinition::create('string');
    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {

    $value = $this->get('tweet_values')->getValue();
    return $value === NULL || $value === '';
  }

}
