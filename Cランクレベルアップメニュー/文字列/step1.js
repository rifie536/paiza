function main(input) {
    const n = input.trim().split('\n');
    for (let i = 1; i <= n[0]; i++) {
        const pa = n[i].trim();
        console.log(pa.length);
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));