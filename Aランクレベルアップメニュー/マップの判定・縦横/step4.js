const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const board = lines.slice(1);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (i === 0 && board[1][j] === '#'|| i === h - 1 && board[h - 2][j] === '#') {
                console.log(`${i} ${j}`);
            }
            if (i > 0 && i < h - 1 && board[i - 1][j] === '#' && board[i + 1][j] === '#' ) {
                console.log(`${i} ${j}`)
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));