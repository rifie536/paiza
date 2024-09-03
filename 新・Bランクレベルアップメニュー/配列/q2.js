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

    const totalArray = [];
    const diagonalArray = [];
    let deepBackDownDiagonalTotal = 0;
    let deepFrontDownDiagonalTotal = 0;
    let deepBackUpDiagonalTotal = 0;
    let deepFrontUpDiagonalTotal = 0;
    let cubeBackDownDiagonalTotal = 0;
    let cubeFrontDownDiagonalTotal = 0;
    let cubeBackUpDiagonalTotal = 0;
    let cubeFrontUpDiagonalTotal = 0;
    for (let i = 0; i < n; i++) {

        deepBackDownDiagonalTotal += array[i][i][0];
        deepFrontDownDiagonalTotal += array[i][i][n - 1];
        deepBackUpDiagonalTotal += array[n - i - 1][i][0];
        deepFrontUpDiagonalTotal += array[i][n - i - 1][n - 1];
        cubeBackDownDiagonalTotal += array[i][i][i];
        cubeFrontDownDiagonalTotal += array[i][i][n - i - 1];
        cubeBackUpDiagonalTotal += array[i][n - i - 1][i];
        cubeFrontUpDiagonalTotal += array[i][n - i - 1][n - i - 1];

        let tempDownRightDiagonalTotal = 0;
        let tempDownLeftDiagonalTotal = 0;
        for (let j = 0; j < n; j++) {
            tempDownRightDiagonalTotal += array[i][j][j];
            tempDownLeftDiagonalTotal += array[i][j][n - j - 1];

            let tempWidthTotal = 0;
            let tempHeightTotal = 0;
            let tempDepthTotal = 0;
            for (let k = 0; k < n; k++) {
                tempWidthTotal += array[i][j][k];
                tempHeightTotal += array[i][k][j];
                tempDepthTotal += array[k][j][i];
            }
            totalArray.push(tempWidthTotal);
            totalArray.push(tempHeightTotal);
            totalArray.push(tempDepthTotal);
        }
        totalArray.push(tempDownRightDiagonalTotal);
        totalArray.push(tempDownLeftDiagonalTotal);
    }
    totalArray.push(deepBackDownDiagonalTotal);
    totalArray.push(deepFrontDownDiagonalTotal);
    totalArray.push(deepBackUpDiagonalTotal);
    totalArray.push(deepFrontUpDiagonalTotal);
    totalArray.push(cubeBackDownDiagonalTotal);
    totalArray.push(cubeFrontDownDiagonalTotal);
    totalArray.push(cubeBackUpDiagonalTotal);
    totalArray.push(cubeFrontUpDiagonalTotal);
    console.log(Math.max(...totalArray));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));