<?php

function centuryFromYear($year)
{
    return ceil($year / 100);
}

print_r(centuryFromYear(1901));
