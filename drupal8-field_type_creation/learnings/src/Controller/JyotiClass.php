<?php

namespace Drupal\learnings\Controller;

class JyotiClass {

	function test($val) {
  		$config = \Drupal::config('learnings.settings');
  		die('test');
    		$val = $val * $config->get('multiplier_value');
    		return $val;
	}
class AnuClass extends JyotiClass {

	function test2($val) {
  		$config = \Drupal::config('learnings.settings');
  		die('test');
    		$val = $val * $config->get('multiplier_value');
    		return $val;
	}	
}
