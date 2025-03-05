const main = (input) => {
    const [x, m ,n] = input.trim().split(' ');
    const generateRndmNum = (x, m, n) => {
        let powNum = 1;
        let rndNum = 0;
        for (let i = 0; i < n; i++) {
            powNum *= x;
            powNum %= m;
            rndNum += powNum;
            rndNum %= m;
            console.log(rndNum);
        }
    }
    generateRndmNum(x, m ,n);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// const main = (input: string): void => {
//     const [x, m, n] = input.trim().split(' ').map(Number);
    
//     const generateRndmNum = (x: number, m: number, n: number): void => {
//         let powNum = 1;
//         let rndNum = 0;
        
//         for (let i = 0; i < n; i++) {
//             powNum = (powNum * x) % m;
//             rndNum = (rndNum + powNum) % m;
//             console.log(rndNum);
//         }
//     }
    
//     generateRndmNum(x, m, n);
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
