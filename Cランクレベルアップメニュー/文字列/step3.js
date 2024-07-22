function main(input) {
    const n = input.trim();
    const a = Number(n[0]) + Number(n[3]);
    const b = Number(n[1]) + Number(n[2]);
    console.log(String(a) + String(b));
  }

main(require("fs").readFileSync("/dev/stdin", "utf8"));