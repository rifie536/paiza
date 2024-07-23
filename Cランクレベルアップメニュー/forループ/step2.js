const main = (input) => {
    const [n, ...numbers] = input.trim().split('\n');
    const hasSevenInInput = numbers.some(num => +num === 7);
    console.log(hasSevenInInput ? 'YES' : 'NO');
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));