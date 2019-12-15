<?php

function findShort($str)
{
    return min(array_map('strlen', (explode(" ", $str))));
}


print_r(findShort("bitcoin take over the world maybe who knows perhaps"));
