const main = (input) => {
    const lines = input.trim().split('\n');
    const [y, x, n] = lines[0].split(' ').map(Number);
    const directions = lines.slice(1);
    let currentY = y;
    let currentX = x;
    const operations = {
        'N': () => currentY--,
        'E': () => currentX++,
        'W': () => currentX--,
        'S': () => currentY++,
    }

    for (const direction of directions) {
        operations[direction]();
        console.log(`${currentY} ${currentX}`);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));