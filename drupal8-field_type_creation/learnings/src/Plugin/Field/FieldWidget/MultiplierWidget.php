<?php

namespace Drupal\learnings\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'field_example_text' widget.
 *
 * @FieldWidget(
 *   id = "multiplier_widget",
 *   module = "learnings",
 *   label = @Translation("Multiplier Widget"),
 *   field_types = {
 *     "multiplier_fieldtype"
 *   }
 * )
 */
class MultiplierWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {

    $element['multiplier'] = array(
      '#title' => t('Add Multiplier'),
      '#type' => 'textfield',
      '#default_value' => isset($items[$delta]->multiplier) ? $items[$delta]->multiplier : NULL,
    );
    return $element;

  }

}
