<?php

namespace Drupal\learnings\Aman;

class AmanClass {

	function testj($val) {
  		$config = \Drupal::config('learnings.settings');
  		// print_r($config->get('multiplier_value'));die;
    		$val = $val * $config->get('multiplier_value');
    		return $val;
	}
}
