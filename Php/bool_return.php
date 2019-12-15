<?php
function boolToWord(bool $bool): string
{
    return $bool ? "Yes" : "No";
}


print_r(boolToWord(true));
