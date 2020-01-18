<?php
function tower_builder(int $n)
{
    $size = 2 * $n - 1;


    $arr = [];
    $string_size = -1;
    $empty_space = floor($size / 2) + 1;

    for ($counter = 0; $counter < $n; $counter++) {
        $empty_space -= 1;
        $string_size += 2;

        if ($empty_space != 0)
            $string_space = str_repeat(' ', $empty_space);

        $string_star = str_repeat('*', $string_size);

        if ($counter === $n - 1)
            $string = $string_star;
        else
            $string = $string_space . $string_star . $string_space;

        array_push($arr, $string);
    }

    return $arr;
}


var_dump(tower_builder(6));
