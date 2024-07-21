function main(input) {
    const s = input.trim();
    console.log(s);
  }

main(require("fs").readFileSync("/dev/stdin", "utf8"));