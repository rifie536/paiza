<?php
$n = trim(fgets(STDIN));

$s = [];

for ($i = 0; $i < $n; $i++) {
    $k = trim(fgets(STDIN));
    $s[$k] = 0;
}

$m = trim(fgets(STDIN));

for ($i = 0; $i < $m; $i++) {
    [$p, $a] = explode(' ', trim(fgets(STDIN)));
    $s[$p] += $a;
}

$S = trim(fgets(STDIN));
echo $s[$S];