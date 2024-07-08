<?php
$n = trim(fgets(STDIN));
$gs = [];
for ($i = 0; $i < $n; $i++) {
    $gs[] = explode(" ", trim(fgets(STDIN)));
}

$s = array_column($gs, 1);
$g = array_column($gs, 0);
array_multisort($s, SORT_DESC, $g, SORT_DESC, $gs);

for ($i = 0; $i < $n; $i++) {
    echo "{$gs[$i][0]} {$gs[$i][1]}\n";
}
?>