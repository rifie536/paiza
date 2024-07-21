function main(input) {
    const n = input.trim().split('\n');
    const num = n[1].trim().split(' ');
    console.log(num.join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));