function main(input) {
    const n = input.trim().split('\n');
    for (let i = 1; i < n.length; i++) {
      console.log(n[i]);
    }
  }

  main(require("fs").readFileSync("/dev/stdin", "utf8"));