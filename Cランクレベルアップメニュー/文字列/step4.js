function main(input) {
    const n = input.trim();
    console.log(n.padStart(3, '0'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));