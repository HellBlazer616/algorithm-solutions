<?php

function highAndLow($numbers): string
{

    $value =  explode(" ", $numbers);



    return max($value) . " " . min($value);
}


print_r(highAndLow("1 2 3 4 5"));
