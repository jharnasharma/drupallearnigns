<?php

namespace Drupal\learnings\Aman;

class Aman {

	function testj($val) {
  		$config = \Drupal::config('learnings.settings');
    		$val = $val * $config->get('multiplier_value');
    		return $val;
	}
}
