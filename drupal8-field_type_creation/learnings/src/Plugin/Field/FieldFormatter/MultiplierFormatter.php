<?php

namespace Drupal\learnings\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\learnings\Aman\Aman;

/**
 *
 * @FieldFormatter(
 *   id = "multiplier_formatter",
 *   module = "learnings",
 *   label = @Translation("Multiplier Formatter"),
 *   field_types = {
 *     "multiplier_fieldtype"
 *   }
 * )
 */
class MultiplierFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
 $a = new Aman();
    $elements = array();

    foreach ($items as $delta => $item) {
      $elements[$delta] = array(
        '#markup' => $a->testj($item->multiplier),
      );
    }
    return $elements;
  }

 

}

function test($val) {
  $config = \Drupal::config('learnings.settings');
    $val = $val * $config->get('multiplier_value');
    return $val;
}