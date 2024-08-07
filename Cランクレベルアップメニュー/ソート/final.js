const main = (input) => {
    const [n, ...nums] = input.trim().split('\n');
    const gs = nums.map(num => num.split(' ').map(Number));
    const sortedGs = gs.sort((a, b) =>
        a[1] !== b[1] ? b[1] - a[1] : b[0] - a[0]
    ).map(num => num.join(' '));
    console.log(sortedGs.join('\n'));
 } 
 
 main(require('fs').readFileSync('/dev/stdin', 'utf8'));