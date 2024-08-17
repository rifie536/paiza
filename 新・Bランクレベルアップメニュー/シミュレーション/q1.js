const main = (input) => {
    const [n, x, k] = input.trim().split(' ').map(Number);
    const calcExtraDistance = (n, x, k) => {
        let count = 4 * n + 3;
        let extraDistance = 0;
        while (count <= k) {
            if (count % 4 === 3 || count % 4 === 0) {
                extraDistance += x;
            }
            count++;
        }
        console.log(extraDistance);
    }
    calcExtraDistance(n, x, k);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));