const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1).map(line => line.split(' '));
    let y = sy;
    let x = sx;
    const dy = [-1, 0, 1, 0]; // N, E, S, W
    const dx = [0, 1, 0, -1];
    let currentDirection = 0;
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }
    for (const move of moves) {
        changeDirection(move[0]);
        for (let i = 0; i < Number(move[1]); i++) {
            let preY = y;
            let preX = x;
            y += dy[currentDirection];
            x += dx[currentDirection];
            if (y < 0 || y >= h || x < 0 || x >= w || map[y][x] === '#') {
                console.log(`${preY} ${preX}`);
                console.log('Stop');
                return;
            }
        }
        console.log(`${y} ${x}`);
    }

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));