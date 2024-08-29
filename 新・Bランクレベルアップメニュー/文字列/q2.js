const main = (input) => {
    const X = input.trim();
    const hash = (X) => {
        let sum = 0;
        for (let i = 0; i < 4; i++) {
            let part = X.substring(i * 8, (i + 1) * 8);
            sum += parseInt(part);
        }
        return sum;
    }

    const result = hash(X);
    console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));