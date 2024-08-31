const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines[0]);
    const arrayA = lines.slice(1).map(line => line.split(' ').map(Number));

    let widthTotal = 0;
    let heightTotal = 0;
    let leftDiagonalTotal = 0;
    let rightDiagonalTotal = 0;

    for (let i = 0; i < n; i++) {
        let tempWidthTotal = 0;
        let tempHeightTotal = 0;
        for (let j = 0; j < n; j++) {
         tempWidthTotal += arrayA[i][j];
         tempHeightTotal += arrayA[j][i];
        }
        if (widthTotal < tempWidthTotal) {
            widthTotal = tempWidthTotal;
        }
        if (heightTotal < tempHeightTotal) {
            heightTotal = tempHeightTotal;
        }
        leftDiagonalTotal += arrayA[i][i];
        rightDiagonalTotal += arrayA[n - i - 1][i];
    }

    const maxTotal = Math.max(widthTotal, heightTotal, leftDiagonalTotal, rightDiagonalTotal);
    console.log(maxTotal);
 }
 main(require('fs').readFileSync('/dev/stdin', 'utf8'))