const main = (input) => {
    const [x, y, n] = input.trim().split(' ').map(Number);
    let currentX = x;
    let currentY = y;
    let currentDirection = 0;
    const operations = {
        0: () => currentX++, // East
        1: () => currentY++, // South
        2: () => currentX--, // West
        3: () => currentY--, // North
    }
    let moveAmount = 1;
    let changedDirectionCount = 0;
    let count = 0;
    while (count < n) {
        for (let i = 0; i < moveAmount && count < n; i++) {
            operations[currentDirection]();
            count++;
        }
        currentDirection = (currentDirection + 1) % 4;
        changedDirectionCount ++;
        if (changedDirectionCount % 2 === 0) {
            moveAmount++;
        }
    }
    console.log(`${currentX} ${currentY}`);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));