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


// TypeScript

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [y, x, n]: number[] = lines[0].split(' ').map(Number);
//     const directions: string[] = lines.slice(1);
//     let currentY: number = y;
//     let currentX: number = x;
 
//     const operations: Record<string, () => void> = {
//         'N': () => currentY--,
//         'E': () => currentX++,
//         'W': () => currentX--,
//         'S': () => currentY++,
//     };
 
//     for (const direction of directions) {
//         operations[direction]();
//         console.log(`${currentY} ${currentX}`);
//     }
//  }
 
//  main(require('fs').readFileSync('/dev/stdin', 'utf8'));