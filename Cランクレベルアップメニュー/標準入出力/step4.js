function main(input) {
    const n = input.trim().split('\n').map(Number);
    let num = 0;
    for (let i = 1; i < n.length; i++) {
      if (num < n[i]) {
          num = n[i];
      }
    }
    console.log(num);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));