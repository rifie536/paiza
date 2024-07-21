function main(input) {
    const n = input.trim().split('\n');
    for (let i = 1; i <= n[0]; i++) {
        const pa = n[i].trim().split(' ');
        pa[1] = Number(pa[1]) + 1;
        console.log(pa.join(' '));
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));