<?php

$n = trim(fgets(STDIN));
$sa = [];
for ($i = 0; $i < $n; $i++) {
    [$s, $a] = explode(" ", trim(fgets(STDIN)));
    $sa[] = [$s, $a];
}
$S = trim(fgets(STDIN));

for ($i = 0; $i < $n; $i++) {
    if ($sa[$i][0] === $S) {
        echo $sa[$i][1];
    }
}
