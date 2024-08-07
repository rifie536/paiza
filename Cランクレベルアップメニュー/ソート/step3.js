const main = (input) => {
    const [n, ...nums] = input.trim().split('\n');
    const pairs = nums.map(pair => pair.split(' ').map(Number));
    const sortedPairs = pairs.sort((a, b) =>
        a[0] !== b[0] ? b[0] - a[0] : b[1] - a[1]
    ).map(pair => pair.join(' '));
    console.log(sortedPairs.join('\n'));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));