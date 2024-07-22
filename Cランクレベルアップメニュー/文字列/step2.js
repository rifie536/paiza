function main(input) {
    const n = input.trim().split('\n');
    if (n[1].includes(n[0])) {
        console.log('YES');
    } else {
        console.log('NO');
    }
  }

main(require("fs").readFileSync("/dev/stdin", "utf8"));