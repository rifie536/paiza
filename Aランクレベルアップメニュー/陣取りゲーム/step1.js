const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const board = lines.slice(1).map(line => line.split(''));
    const playersTerritory = (h, w, board) => {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (board[i][j] === '*') {
                    i > 0 ? board[i - 1][j] = '*' : '';
                    i < h - 1 ? board[i + 1][j] = '*' : '';
                    j > 0 ? board[i][j - 1] = '*' : '';
                    j < w - 1 ? board[i][j + 1] = '*' : '';
                    return board.map(row => row.join('')).join('\n');
                }
             }
        }
    }
    console.log(playersTerritory(h, w, board));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));