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
        if (currentY >= 0 && currentY < Number(h) && currentX >= 0 && currentX < Number(w) && map[currentY][currentX] === '.') {
            return 'Yes';
        } else {
            return 'No';
        }
    }

    const result = canMove(d, m);
    console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// type Direction = 'N' | 'E' | 'W' | 'S';
// type Movement = 'L' | 'R';

// type Position = {
//     y: number;
//     x: number;
// };

// type BoardDimensions = {
//     height: number;
//     width: number;
// };

// type DirectionOperations = {
//     L: () => void;
//     R: () => void;
// };

// type Operations = {
//     [key in Direction]: DirectionOperations;
// };

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [h, w, sy, sx, d, m] = lines[0].split(' ');
//     const map: string[] = lines.slice(1);
    
//     let currentPosition: Position = {
//         y: Number(sy),
//         x: Number(sx)
//     };

//     const dimensions: BoardDimensions = {
//         height: Number(h),
//         width: Number(w)
//     };

//     const operation: Operations = {
//         'N': {
//             'L': () => currentPosition.x--,
//             'R': () => currentPosition.x++,
//         },
//         'E': {
//             'L': () => currentPosition.y--,
//             'R': () => currentPosition.y++,
//         },
//         'W': {
//             'L': () => currentPosition.y++,
//             'R': () => currentPosition.y--,
//         },
//         'S': {
//             'L': () => currentPosition.x++,
//             'R': () => currentPosition.x--,
//         },
//     };

//     const isValidPosition = (pos: Position): boolean => {
//         return pos.y >= 0 && 
//                pos.y < dimensions.height && 
//                pos.x >= 0 && 
//                pos.x < dimensions.width && 
//                map[pos.y][pos.x] === '.';
//     };

//     const canMove = (currentDirection: Direction, moveDirection: Movement): string => {
//         operation[currentDirection][moveDirection]();
//         return isValidPosition(currentPosition) ? 'Yes' : 'No';
//     };

//     const result = canMove(d as Direction, m as Movement);
//     console.log(result);
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));