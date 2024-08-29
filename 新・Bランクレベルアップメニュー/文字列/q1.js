const main = (input) => {
    const str = input.trim();
    for (let i = 0; i < str.length; i++) {
        const copyStr = str.slice(i);
        let temp = '';
        for (let j = 0; j < copyStr.length; j++) {
            if (Number.isInteger(Number(copyStr[0]))) {
                if (Number.isInteger(Number(copyStr[j]))) {
                    temp = temp + copyStr[j];
                    console.log(temp);
                } else {
                    temp = temp + copyStr[j];
                }
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));