const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines.shift());
    let array = [];
    for (let i = 0; i < n ** 2; i++) {
        let tempArray = [];
        for (let j = 0; j < n; j++) {
            tempArray.push(lines[j].split(' ').map(Number));    
        }
        // array.push(tempArray);
    }
    
    // const widthTotalArray = [];
    // const  heightTotalArray = [];
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         let tempWidthTotal = 0;
    //         let tempHeightTotal = 0;
    //         for (let k = 0; k < n; k++) {
    //             tempWidthTotal += array[i][j][k];
    //             tempHeightTotal += array[i][k][j];
    //         }
    //         // console.log(array)
    //         widthTotalArray.push(tempWidthTotal);
    //         heightTotalArray.push(tempHeightTotal);
    //     }
    // }
    // console.log(lines)
    console.log(n)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));