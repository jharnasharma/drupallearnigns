<?php

namespace Drupal\learnings\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\TypedData\DataDefinition;

/**
 *
 * @FieldType(
 *   id = "multiplier_fieldtype",
 *   label = @Translation("Multiplier"),
 *   description = @Translation("This field allows you to multiply value"),
 *   default_formatter = "multiplier_formatter",
 *   default_widget = "multiplier_widget"
 * )
 */
class MultiplierItem extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {

    return array(
      'columns' => array(
        'multiplier' => array(
          'type' => 'varchar',
          'length' => 256,
          'not null' => TRUE,
        ),
      ),
    );
  }

  /**
   * {@inheritdoc} what it does...already above we define it as a varchar
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {

    $properties['multiplier'] = DataDefinition::create('string');
    return $properties;
  }

  /**
   * {@inheritdoc} Is it required??
   */
  public function isEmpty() {

    $value = $this->get('multiplier')->getValue();
    return $value === NULL || $value === '';
  }

}
