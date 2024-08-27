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

// Claudeさんからのレビュー
// コードの構造と可読性:
// 関数を分割することで、コードの可読性と再利用性が向上します。例えば、数値の操作を行う部分を別の関数にすることができます。

// 効率性:
// 現在の実装では、すべての組み合わせを4重ループで探索しています。これは機能しますが、効率が悪い可能性があります。2重ループで十分です。

// 変数名:
// minNumという変数名は少し紛らわしいです。これは実際には最小の差を表しているので、minDifferenceなどの名前の方が適切かもしれません。

// 操作の実装:
// 操作をif-elseではなく、配列やオブジェクトを使って実装することで、コードをより簡潔にできます。

// 不要な計算の回避:
// 同じ数字同士の比較（i == k の場合）は不要です。ループの構造を変更することでこれを避けられます。

// const applyOperation = (num, op) => {
//     switch (op) {
//         case 0: return num;
//         case 1: return num + 1;
//         case 2: return num - 1;
//         case 3: return Number('1' + num);
//         case 4: return Number(num + '1');
//     }
// };

// const findMinDifference = (a, b) => {
//     let minDiff = Infinity;
//     for (let opA = 0; opA < 5; opA++) {
//         for (let opB = 0; opB < 5; opB++) {
//             const diff = Math.abs(applyOperation(a, opA) - applyOperation(b, opB));
//             minDiff = Math.min(minDiff, diff);
//         }
//     }
//     return minDiff;
// };

// const main = (input) => {
//     const [n, ...nums] = input.trim().split('\n').map(Number);
//     let minDifference = Infinity;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             minDifference = Math.min(minDifference, findMinDifference(nums[i], nums[j]));
//         }
//     }

//     console.log(minDifference);
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));