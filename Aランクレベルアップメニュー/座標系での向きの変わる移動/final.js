const main = (input) => {
    const lines = input.trim().split('\n');
    const [x, y, n] = lines[0].split(' ').map(Number);
    const directions = lines.slice(1);
    let currentX = x;
    let currentY = y;
    let currentDirection = 'N';
    const operation = {
        'N': (direction) => {
            if (direction === 'L') {
                currentX--;
                currentDirection = 'W';
            } else {
                currentX++;
                currentDirection = 'E';
            }
        },
        'E': (direction) => {
            if (direction === 'L') {
                currentY--;
                currentDirection = 'N';
            } else {
                currentY++;
                currentDirection = 'S';
            }
        },
        'W': (direction) => {
            if (direction === 'L') {
                currentY++;
                currentDirection = 'S';
            } else {
                currentY--;
                currentDirection = 'N';
            }
        },
        'S': (direction) => {
            if (direction === 'L') {
                currentX++;
                currentDirection = 'E';
            } else {
                currentX--;
                currentDirection = 'W';
            }
        },
    }

    for (let i = 0; i < n; i++) {
        operation[currentDirection](directions[i]);
        console.log(`${currentX} ${currentY}`);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));