<?php
function tribonacci($signature, $n)
{
    if ($n <= 3)
        return array_slice($signature, 0, $n);
    else {
        do {
            $result = array_sum(array_slice($signature, -3));
            array_push($signature, $result);
        } while (count($signature) < $n);
    }
    return $signature;
}



print_r(tribonacci([1, 1, 1], 10));
