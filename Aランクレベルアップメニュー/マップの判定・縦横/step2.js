const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, n] = lines[0].split(' ').map(Number);
    const board = lines.slice(1, h + 1).map(line => line.split(''));
    const coordinates = lines.slice(h + 1).map(line => line.split(' ').map(Number));
    coordinates.forEach(([y, x]) => {
        board[y][x] = '#';
    })
    console.log(board.map(row => row.join('')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));