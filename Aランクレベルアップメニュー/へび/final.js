const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1).map(line => line.split(''));
    const moves = lines.slice(h + 1).map(line => line.split(' ').map((v, i) => i === 0 ? Number(v) : v));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let y = sy;
    let x = sx;
    let currentDirection = 0;
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }
    map[sy][sx] = '*';
    let moveIndex = 0;
    for (time = 1; time <= 100; time++) {
        y += dy[currentDirection];
        x += dx[currentDirection];
        if (y >= 0 && y < h && x >= 0 && x < w && map[y][x] === '.') {
            map[y][x] = '*';
        } else {
            console.log(map.map(row => row.join('')).join('\n'));
            return;
        }
        if (moveIndex < moves.length && moves[moveIndex][0] === time) {
            changeDirection(moves[moveIndex][1]);
            moveIndex++;
        }
    }
    console.log(map.map(row => row.join('')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));