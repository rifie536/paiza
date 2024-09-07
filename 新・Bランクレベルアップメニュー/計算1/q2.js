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