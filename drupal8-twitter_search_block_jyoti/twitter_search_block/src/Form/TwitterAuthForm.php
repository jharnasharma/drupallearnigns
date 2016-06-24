<?php

namespace Drupal\twitter_search_block\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 *
 */
class TwitterAuthForm extends FormBase {

  /**
   * Configuration form for setting OAuth values of Twitter.
   */
  public function getFormId() {

    return 'twitter_oAuth_form_id';
  }

  /**
   *
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $config = \Drupal::config('twitter_search_block.settings');

    $form['oauth_access_token'] = [
      '#type' => 'textfield',
      '#title' => $this->t('OAuth Access Token'),
      '#required' => TRUE,
      '#default_value' => $config->get('oauth_access_token_secret'),
      '#placeholder' => $this->t('OAUTH ACCESS TOKEN *'),
    ];
    $form['oauth_access_token_secret'] = [
      '#type' => 'textfield',
      '#title' => $this->t('OAuth Access Token Secret'),
      '#required' => TRUE,
      '#default_value' => $config->get('oauth_access_token'),
      '#placeholder' => $this->t('OAUTH ACCESS TOKEN SECRET *'),
    ];
    $form['consumer_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Consumer Key'),
      '#required' => TRUE,
      '#default_value' => $config->get('consumer_key'),
      '#placeholder' => $this->t('CONSUMER KEY *'),
    ];
    $form['consumer_secret'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Consumer Secret'),
      '#required' => TRUE,
      '#default_value' => $config->get('consumer_secret'),
      '#placeholder' => $this->t('CONSUMER SECRET *'),
    ];
    $form['api_version'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Twitter API Version'),
      '#required' => TRUE,
      '#placeholder' => $this->t('TWITTER API VERSION *'),
      '#default_value' => $config->get('api_version'),
      '#description' => t('Latest recommended twitter API Version'),
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

    $config = \Drupal::service('config.factory')->getEditable('twitter_search_block.settings');
    $config->set('oauth_access_token', $form_state->getValue('oauth_access_token'))->save();
    $config->set('oauth_access_token_secret', $form_state->getValue('oauth_access_token_secret'))->save();
    $config->set('consumer_key', $form_state->getValue('consumer_key'))->save();
    $config->set('consumer_secret', $form_state->getValue('consumer_secret'))->save();
    $config->set('api_version', $form_state->getValue('api_version'))->save();
  }

}
