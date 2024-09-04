// 不完全コード　81点から100点にすることができなかった。
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const n = Number(lines.shift());
//     let array = [];
//     for (let i = 0; i < n * n; i += n) {
//         let tempArray = [];
//         for (let j = 0; j < n; j++) {
//             tempArray.push(lines[i + j].split(' ').map(Number));
//         }
//         array.push(tempArray);
//     }

//     const totalArray = [];
//     let topUpDiagonalTotal = 0;
//     let topDownDiagonalTotal = 0;
//     let bottomUpDiagonalTotal = 0;
//     let bottomDownDiagonalTotal = 0;
//     let deepBackDownDiagonalTotal = 0;
//     let deepFrontDownDiagonalTotal = 0;
//     let deepBackUpDiagonalTotal = 0;
//     let deepFrontUpDiagonalTotal = 0;
//     let cubeBackDownDiagonalTotal = 0;
//     let cubeFrontDownDiagonalTotal = 0;
//     let cubeBackUpDiagonalTotal = 0;
//     let cubeFrontUpDiagonalTotal = 0;
//     for (let i = 0; i < n; i++) {

//         topUpDiagonalTotal += array[i][0][i];
//         topDownDiagonalTotal += array[n - i - 1][0][i];
//         bottomUpDiagonalTotal += array[i][n - 1][i];
//         bottomDownDiagonalTotal += array[i][n - 1][n - i - 1];

//         deepBackDownDiagonalTotal += array[i][i][0];
//         deepFrontDownDiagonalTotal += array[i][i][n - 1];
//         deepBackUpDiagonalTotal += array[n - i - 1][i][0];
//         deepFrontUpDiagonalTotal += array[i][n - i - 1][n - 1];

//         cubeBackDownDiagonalTotal += array[i][i][i];
//         cubeFrontDownDiagonalTotal += array[i][i][n - i - 1];
//         cubeBackUpDiagonalTotal += array[i][n - i - 1][i];
//         cubeFrontUpDiagonalTotal += array[i][n - i - 1][n - i - 1];

//         let frontDownRightDiagonalTotal = 0;
//         let frontDownLeftDiagonalTotal = 0;
//         let backDownRightDiagonalTotal = 0;
//         let backDownLeftDiagonalTotal = 0;
//         for (let j = 0; j < n; j++) {
//             frontDownRightDiagonalTotal += array[0][j][j];
//             frontDownLeftDiagonalTotal += array[0][j][n - j - 1];
//             backDownRightDiagonalTotal += array[n - 1][j][j];
//             backDownLeftDiagonalTotal += array[n - 1][j][n - j - 1];

//             let tempWidthTotal = 0;
//             let tempHeightTotal = 0;
//             let tempDepthTotal = 0;
//             for (let k = 0; k < n; k++) {
//                 tempWidthTotal += array[i][j][k];
//                 tempHeightTotal += array[i][k][j];
//                 tempDepthTotal += array[k][j][i];
//             }
//             totalArray.push(tempWidthTotal);
//             totalArray.push(tempHeightTotal);
//             totalArray.push(tempDepthTotal);
//         }
//         totalArray.push(frontDownRightDiagonalTotal);
//         totalArray.push(frontDownLeftDiagonalTotal);
//         totalArray.push(backDownRightDiagonalTotal);
//         totalArray.push(backDownLeftDiagonalTotal);
//     }
//     totalArray.push(topUpDiagonalTotal);
//     totalArray.push(topDownDiagonalTotal);
//     totalArray.push(bottomUpDiagonalTotal);
//     totalArray.push(bottomDownDiagonalTotal);
//     totalArray.push(deepBackDownDiagonalTotal);
//     totalArray.push(deepFrontDownDiagonalTotal);
//     totalArray.push(deepBackUpDiagonalTotal);
//     totalArray.push(deepFrontUpDiagonalTotal);
//     totalArray.push(cubeBackDownDiagonalTotal);
//     totalArray.push(cubeFrontDownDiagonalTotal);
//     totalArray.push(cubeBackUpDiagonalTotal);
//     totalArray.push(cubeFrontUpDiagonalTotal);
//     console.log(Math.max(...totalArray));
// }
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// GPTによる解答
const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines.shift());
    let array = [];
    for (let i = 0; i < n * n; i += n) {
        let tempArray = [];
        for (let j = 0; j < n; j++) {
            tempArray.push(lines[i + j].split(' ').map(Number));
        }
        array.push(tempArray);
    }

    let maxSum = -Infinity;

    // すべての縦列、横列、斜め列の和を計算して最大値を求める
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let rowSum = 0, colSum = 0, depthSum = 0;
            for (let k = 0; k < n; k++) {
                rowSum += array[i][j][k];    // XY平面の横列
                colSum += array[i][k][j];    // XZ平面の縦列
                depthSum += array[k][i][j];  // YZ平面の奥行き列
            }
            maxSum = Math.max(maxSum, rowSum, colSum, depthSum);
        }
    }

    // 各平面内の対角線を計算
    for (let i = 0; i < n; i++) {
        let xyDiag1 = 0, xyDiag2 = 0, xzDiag1 = 0, xzDiag2 = 0, yzDiag1 = 0, yzDiag2 = 0;
        for (let j = 0; j < n; j++) {
            xyDiag1 += array[i][j][j];              // XY平面 主対角線
            xyDiag2 += array[i][j][n - j - 1];      // XY平面 副対角線
            xzDiag1 += array[j][i][j];              // XZ平面 主対角線
            xzDiag2 += array[n - j - 1][i][j];      // XZ平面 副対角線
            yzDiag1 += array[j][j][i];              // YZ平面 主対角線
            yzDiag2 += array[n - j - 1][j][i];      // YZ平面 副対角線
        }
        maxSum = Math.max(maxSum, xyDiag1, xyDiag2, xzDiag1, xzDiag2, yzDiag1, yzDiag2);
    }

    // 立方体全体の対角線を計算
    let diag1 = 0, diag2 = 0, diag3 = 0, diag4 = 0;
    for (let i = 0; i < n; i++) {
        diag1 += array[i][i][i];                // (0,0,0) -> (n-1,n-1,n-1)
        diag2 += array[i][i][n - i - 1];        // (0,0,n-1) -> (n-1,n-1,0)
        diag3 += array[i][n - i - 1][i];        // (0,n-1,0) -> (n-1,0,n-1)
        diag4 += array[i][n - i - 1][n - i - 1];// (0,n-1,n-1) -> (n-1,0,0)
    }
    maxSum = Math.max(maxSum, diag1, diag2, diag3, diag4);

    console.log(maxSum);
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
