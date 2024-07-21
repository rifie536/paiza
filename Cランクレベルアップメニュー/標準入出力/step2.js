function main(input) {
    const n = input.trim();
    for (let i = 0; i < n; i++) {
    console.log('paiza');
    }
  }

main(require("fs").readFileSync("/dev/stdin", "utf8"));