<?php
  for ($i=0; $i <= 25; $i++) {
    do {
      $cartela[$i] = rand(1,99);
      $flag = 1;
      for ($j = 0; ($j < $i) && ($flag == 1); ++$j){
        if ($cartela[$i] == $cartela[$j]){
          $flag = 0;
        }
      }
    } while ($flag == 0);
  }
  echo json_encode($cartela);
?>