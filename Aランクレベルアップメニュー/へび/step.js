const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, d, m] = lines[0].split(' ');
    const map = lines.slice(1);
    let currentY = Number(sy);
    let currentX = Number(sx);
    const operation = {
        'N': {
            'L': () => currentX--,
            'R': () => currentX++,
        },
        'E': {
            'L': () => currentY--,
            'R': () => currentY++,
        },
        'W': {
            'L': () => currentY++,
            'R': () => currentY--,
        },
        'S': {
            'L': () => currentX++,
            'R': () => currentX--,
        },
    }
    const canMove = (currentDirection, moveDirection) => {
        operation[currentDirection][moveDirection]();
        if (currentY > 0 && currentY < Number(h) && currentX > 0 && currentX < Number(w) && map[currentY][currentX] === '.') {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    const result = canMove(d, m);
    console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));