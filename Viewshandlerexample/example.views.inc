<?php

  /**
   * Implements hook_views_data().
   */
  function example_views_data() {
    $data = array();
     $data['example_order'] = array(
      'table' => array(
        'group' =>  t('Example Order'),
        'title' => t('Example Order'),
        'help'  => t('Example Order'),
        'base' => array(
          'field' => 'order_id',
          'title' => t('Example Order'),
          'help'  => t('Example Order'),
        ),
      ),

      'order_id' => array(
        'title' => t('Order ID'),
        'help'  => t('Order ID'),
        'field' => array(
          'handler' => 'views_handler_field',
          ),
        'sort' => array(
          'handler' => 'views_handler_sort',
        ),
      ),

      'first_name' => array(
        'title' => t('First Name'),
        'help'  => t('First Name'),
        'field' => array(
          'handler' => 'views_handler_field',
        ),
      ),

      'age' => array(
        'title' => t('Age'),
        'help'  => t('Age'),
        'field' => array(
          'handler' => 'views_handler_field_numeric',
        ),
        'filter' => array(
          'handler' => 'views_handler_filter_numeric',
        ),
      ),

      'price' => array(
        'title' => t('Price'),
        'help'  => t('Price'),
        'field' => array(
          'handler' => 'views_handler_field_numeric',
        ),
        'filter' => array(
            'handler' => 'views_handler_filter_numeric',
        ),
      ),
    );
  return $data;
  }
