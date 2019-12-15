<?php
function longest($a, $b)
{
    $string = $a . $b;

    $array = str_split($string);

    $result = array_unique($array);

    return implode("", $result);
}


$a = "xyaabbbccccdefww";
$b = "xxxxyyyyabklmopq";
print_r(longest($a, $b));
