function main(input) {
    let [n, a] = input.trim().split('\n');
    a = a.split(' ').map(a => Number(a));
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] % 3 === 0) {
            count += 1;
        }
    }
    console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));