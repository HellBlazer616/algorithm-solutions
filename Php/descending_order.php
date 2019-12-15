<?php
function descendingOrder(int $n): int
{

    $string = strval($n);

    $array = str_split($string);

    arsort($array);

    $result = implode("", $array);

    return intval($result);
}


print_r(descendingOrder(145263));
