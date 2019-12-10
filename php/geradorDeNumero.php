<?php
  for ($i=0; $i < 80; $i++) {
    do {
      $numero[$i] = rand(1,99);
      $flag = 1; //variavel flag, reseta a condicao toda vez
      for ($j = 0; ($j < $i) && ($flag == 1); ++$j){
        if ($numero[$i] == $numero[$j]){
          $flag = 0;
        }
      }
    } while ($flag == 0);
  }
  echo json_encode($numero);
?>