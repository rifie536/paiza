const main = (input) => {
    const [x, m ,n] = input.trim().split(' ');
    const generateRndmNum = (x, m, n) => {
        let powNum = 1;
        let tempNum = 0;
        let randNum = 0;
        for (let i = 0; i < n; i++) {
            powNum *= x;
            powNum %= m
            randNum += powNum;
            randNum %= m;
            console.log(randNum);
        }
    }
    generateRndmNum(x, m ,n);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));