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

// 別解　こっちの方が高速
// const main = (input) => {

//     const [N, X, K] = input.trim().split(' ').map(Number);
    
//     let result;
//     if (K % 4 === 3) {
//         result = 2 * X * Math.floor((K - 4 * N) / 4) + X;
//     } else {
//         result = 2 * X * Math.floor((K - 4 * N) / 4);
//     }
    
//     console.log(result);
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));