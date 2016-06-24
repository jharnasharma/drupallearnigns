<?php

namespace Drupal\learnings;

class AmanClass {

	function test($val) {
  		$config = \Drupal::config('learnings.settings');
  		// die('tese');
    		$val = $val * $config->get('multiplier_value');
    		return $val;
	}
}
