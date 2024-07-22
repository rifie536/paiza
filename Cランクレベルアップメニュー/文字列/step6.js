function main(input) {
    let n = input.trim().split(':').map(m => Number(m));
    n[1] += 30;
    if (n[1] >= 60) {
       n[1] -= 60;
       n[0] += 1;
    }
    if (n[0] >= 24) {
        n[0] -= 24;
    }
    n = n.map(m => String(m).padStart(2, '0'));
    console.log(n.join(':'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));