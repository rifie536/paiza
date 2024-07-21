function main(input) {
    const n = input.trim();
    const m = [];
    for (let i = 0; i < n; i++) {
      m[i] = 'paiza';
    }
    console.log(m.join(' '));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));