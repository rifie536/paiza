const main = (input) => {
    const [n, ...nums] = input.trim().split('\n').map(Number);
    const operatePattern = 5;
    const operatedNums = [];

    for (let i = 0; i < n; i++) {
        const tempNums = [];
        for (let j = 0; j < operatePattern; j++) {
            let num = 0;
            if (j === 0) {
                num = nums[i];
            } else if (j === 1) {
                num = nums[i] + 1;
            } else if (j === 2) {
                num = nums[i] - 1;
            } else if (j === 3) {
                let temp = '1' + String(nums[i]);
                num = Number(temp);
            } else if (j === 4) {
                let temp = String(nums[i]) + '1';
                num = Number(temp);
            }
            tempNums.push(num);
        }
        operatedNums.push(tempNums);
    }

    let minNum = Math.max(...nums);
    for (let i = 0; i < operatedNums.length; i++) {
        for (let j = 0; j < operatedNums[i].length; j++) {
            for (let k = 0; k < operatedNums.length; k++) {
                for (let l = 0; l < operatedNums[k].length; l++) {
                    let diff = minNum;
                    if (i != k) {
                        diff = Math.abs(operatedNums[i][j] - operatedNums[k][l]);
                    }
                    if (diff < minNum) {
                        minNum = diff;
                    }
                }
            }
        }
    }
    console.log(minNum);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));