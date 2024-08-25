// 動的計画法
const main = (input) => {
    const lines = input.trim().split('\n');
    const [n, largeCup] = lines[0].split(' ').map(Number);
    const smallCups = lines.slice(1, n + 1).map(Number);
    
    const dp = Array(largeCup + 1).fill(false);
    dp[0] = true;
    
    for (const cup of smallCups) {
        for (let i = largeCup; i >= cup; i--) {
            if (dp[i - cup]) {
                dp[i] = true;
            } 
        }
    }
    
    let maxAmount = largeCup;
    while (!dp[maxAmount]) {
        maxAmount--;
    }
    
    console.log(maxAmount);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));