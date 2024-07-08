<?php
$n = trim(fgets(STDIN));
$zaisan = [];

for ($i = 0; $i < $n; $i++) {
    [$s, $a] = explode(' ', trim(fgets(STDIN)));
    $zaisan[$s] = $a;
}

$S = trim(fgets(STDIN));

echo $zaisan[$S] . "\n";