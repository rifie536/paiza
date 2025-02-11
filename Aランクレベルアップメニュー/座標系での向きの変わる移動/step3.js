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


// TypeScript

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [y, x, d]: string[] = lines[0].split(' ');
//     const direction: string = lines[1];
//     let currentY: number = Number(y);
//     let currentX: number = Number(x);
 
//     const operation: Record<string, (direction: string) => void> = {
//         'N': (direction: string) => {direction === 'L' ? currentX-- : currentX++},
//         'E': (direction: string) => {direction === 'L' ? currentY-- : currentY++},
//         'W': (direction: string) => {direction === 'L' ? currentY++ : currentY--},
//         'S': (direction: string) => {direction === 'L' ? currentX++ : currentX--},
//     };
 
//     operation[d](direction);
//     console.log(`${currentY} ${currentX}`);
//  }
 
//  main(require('fs').readFileSync('/dev/stdin', 'utf8'));