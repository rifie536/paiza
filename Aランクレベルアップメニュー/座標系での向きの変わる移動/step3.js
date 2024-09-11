const main = (input) => {
    const lines = input.trim().split('\n');
    const [y, x, d] = lines[0].split(' ');
    const direction = lines[1];
    let currentY = Number(y);
    let currentX = Number(x);
    const operation = {
        'N': (direction) => {direction === 'L' ? currentX-- : currentX++},
        'E': (direction) => {direction === 'L' ? currentY-- : currentY++},
        'W': (direction) => {direction === 'L' ? currentY++ : currentX--},
        'S': (direction) => {direction === 'L' ? currentX++ : currentX--},
    }
    operation[d](direction);
    console.log(`${currentY} ${currentX}`);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));