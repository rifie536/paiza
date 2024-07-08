<?php
$n = trim(fgets(STDIN));
$gs = [];
for ($i = 0; $i < $n; $i++) {
    [$g, $s] = explode(" ", trim(fgets(STDIN)));
    $gs[] = [$s, $g];
}

rsort($gs);

for ($i = 0; $i < $n; $i++) {
    echo "{$gs[$i][1]} {$gs[$i][0]}\n";
}
?>