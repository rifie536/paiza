function main(input) {
    const n = input.trim().split(':').map(m => Number(m));
    console.log(n.join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));