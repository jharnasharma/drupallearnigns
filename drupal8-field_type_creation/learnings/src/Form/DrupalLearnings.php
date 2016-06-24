<?php

namespace Drupal\learnings\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 *
 */
class DrupalLearnings extends FormBase {

  /**
   * Configuration form for setting OAuth values of Twitter.
   */
  public function getFormId() {

    return 'drupal_learnings';
  }

  /**
   *
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $config = \Drupal::config('learnings.settings');
    $form['learnings_multiplier'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Multiplier Value'),
      '#required' => TRUE,
      '#default_value' => $config->get('multiplier_value'),
      '#placeholder' => $this->t('Enter Field Multiplier Value'),
    ];
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];
    return $form;
  }

  /**
   *
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {

  }

  /**
   * Saving OAuth credentials in configuration.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = \Drupal::service('config.factory')->getEditable('learnings.settings');
    // echo"<pre>";print_r($form_state->getValue('learnings_multiplier'));die;
    $config->set('multiplier_value', $form_state->getValue('learnings_multiplier'))->save();
  }
}
