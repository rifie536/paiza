const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const board = lines.slice(1).map(line => line.split(''));
    // 左右のマスが'#'
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (j === 0 && board[i][1] === '#'
                || j === w - 1 && board[i][w - 2] === '#'
                || board[i][j - 1] === '#' && board[i][j + 1] === '#' ) {
                console.log(`${i} ${j}`)
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));