<?php
  /**
   * @file
   * Definition of example_handler_custom_field
   */
    
  /**
   * Provides a custom views field.
   */
  class example_handler_custom_field extends views_handler_field {
    function option_definition() {
      $options = parent::option_definition();
      return $options;
    }
    
    function options_form(&$form, &$form_state) {
      parent::options_form($form, $form_state);
    }
    
    function query() {
      // do nothing -- to override the parent query.
    }
    
    function render($data) {
      // If the devel module is enabled, you may view all of the
      // data provided by fields previously added in your view.
      // dpm(node_load($data->nid));
      // Insert PHP code here, or display greeting.
      $output = node_load($data->nid);
      if ($output-> status == 1 && $output-> type == 'custom_views_handler') {
        $output = $output->field_number1['und'][0]['value'] + $output->field_number2['und'][0]['value'];
      }
      else {
        $output = t("Not Valid Type");
      }
      return $output; 
    }
  }
