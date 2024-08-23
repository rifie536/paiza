const main = (input) => {
    const lines = input.trim().split('\n');
    const [n, k] = lines[0].split(' ').map(Number);
    const sushiPrice = [];
    for (let i = 1; i <= n; i++) {
        sushiPrice.push(Number(lines[i]));
    }
    sushiPrice.push(...sushiPrice);
    let maxTotal = 0;
    for (let i = 0; i < n; i++) {
        let total = 0;
        total = sushiPrice.slice(i, i + k).reduce((a, b) => a + b);
        if (total > maxTotal) {
            maxTotal = total;
        }
    }

    console.log(maxTotal);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 別解
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const [N, K] = lines[0].split(' ').map(Number);
//     const prices = lines.slice(1).map(Number);

//     const extendedPrices = [...prices, ...prices];

//     let currentSum = 0;
//     let maxSum = 0;

//     for (let i = 0; i < K; i++) {
//         currentSum += extendedPrices[i];
//     }
//     maxSum = currentSum;

//     for (let i = K; i < N + K; i++) {
//         currentSum = currentSum - extendedPrices[i - K] + extendedPrices[i];
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     console.log(maxSum);
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));