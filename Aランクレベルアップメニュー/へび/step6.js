const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1).map(line => line.split(' ').map((v, i) => i === 0 ? Number(v) : v));
    let y = sy;
    let x = sx;
    let currentDirection = 0;
    const dy = [-1, 0, 1, 0]; // N, E, S, W
    const dx = [0, 1, 0, -1];
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }

    let moveIndex = 0;
    for (let time = 0; time <= 99; time++) {
        if (moveIndex < moves.length && moves[moveIndex][0] === time) {
            changeDirection(moves[moveIndex][1]);
            moveIndex++;
        }

        y += dy[currentDirection];
        x += dx[currentDirection];

        if (y < 0 || y >= h || x < 0 || x >= w || map[y][x] === '#') {
            console.log('Stop');
            return;
        }
        console.log(`${y} ${x}`);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));