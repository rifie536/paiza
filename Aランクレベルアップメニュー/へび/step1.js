const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, m] = lines[0].split(' ');
    let currentY = Number(sy);
    let currentX = Number(sx);
    const map = lines.slice(1);
    const operations = {
        'N': () => currentY--,
        'E': () => currentX++,
        'W': () => currentX--,
        'S': () => currentY++,
    }
    const canMove = (direction) => {
        operations[direction]();
        if (currentY >= 0 && currentX >= 0 && map[currentY][currentX] === '.') {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
    canMove(m);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));