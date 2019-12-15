<?php
function even_or_odd(int $n): string
{
    return ($n % 2) === 0 ? "Even" : "Odd";
}

print_r(even_or_odd(0));
