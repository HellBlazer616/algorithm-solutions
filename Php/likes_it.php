<?php

function likes($names)
{
    // $size_of_names = count($names);

    // if ($size_of_names === 0)
    //     return "no one likes this";
    // else if ($size_of_names === 1)
    //     return "{$names[0]} likes this";
    // else if ($size_of_names === 2)
    //     return "{$names[0]} and {$names[1]} like this";
    // else if ($size_of_names === 3) {
    //     $last = array_pop($names);
    //     $result = implode(", ", $names);
    //     return "{$result} and {$last} like this";
    // } else {
    //     return $names[0] . ", " . $names[1] . " and " . ($size_of_names - 2) . " others like this";
    // }

    return array(
        '0' => "no one likes this",
        '1' => "{$names[0]} likes this",
        '2' => "{$names[0]} and {$names[1]} like this",
        '3' => "{$names[0]}, {$names[1]} and {$names[2]} like this",
        '4' => "{$names[0]}, {$names[1]} and " . (sizeof($names) - 2) . " others like this"
    )[min(4, sizeof($names))];
}


print_r(likes([]));
