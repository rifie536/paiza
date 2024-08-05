const main = (input) => {
    const [n, ...numbers] = input.trim().split('\n');
    const k = numbers.pop();
    const indexOfK = numbers.findIndex(num => num === k);
    console.log(indexOfK + 1);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));