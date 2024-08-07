const main = (input) => {
    const [n, ...nums] = input.trim().split('\n').map(num => +num);
    const sortedNums = [...nums].sort((a, b) => a - b);
    console.log(sortedNums.join('\n'));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));