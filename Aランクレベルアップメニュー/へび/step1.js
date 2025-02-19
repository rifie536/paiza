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
        if (currentY >= 0 && currentX >= 0 && currentY < Number(h) && currentX < Number(w) && map[currentY][currentX] === '.') {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
    canMove(m);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// type Direction = 'N' | 'E' | 'W' | 'S';

// type Position = {
//     y: number;
//     x: number;
// };

// type BoardDimensions = {
//     height: number;
//     width: number;
// };

// type Operations = {
//     [key in Direction]: () => void;
// };

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [h, w, sy, sx, m] = lines[0].split(' ');
    
//     let currentPosition: Position = {
//         y: Number(sy),
//         x: Number(sx)
//     };

//     const dimensions: BoardDimensions = {
//         height: Number(h),
//         width: Number(w)
//     };

//     const map: string[] = lines.slice(1);

//     const operations: Operations = {
//         'N': () => currentPosition.y--,
//         'E': () => currentPosition.x++,
//         'W': () => currentPosition.x--,
//         'S': () => currentPosition.y++,
//     };

//     const isValidPosition = (pos: Position): boolean => {
//         return pos.y >= 0 && 
//                pos.x >= 0 && 
//                pos.y < dimensions.height && 
//                pos.x < dimensions.width && 
//                map[pos.y][pos.x] === '.';
//     };

//     const canMove = (direction: Direction): void => {
//         operations[direction]();
//         console.log(isValidPosition(currentPosition) ? 'Yes' : 'No');
//     };

//     canMove(m as Direction);
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));