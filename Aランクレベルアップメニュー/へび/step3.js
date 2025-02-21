const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1);
    let currentDirection = 'N';
    let currentY = sy;
    let currentX = sx;
    const actions = {
        'N' : {
            'L' : () => {
                currentX--;
                currentDirection = 'W';
            },
            'R' : () => {
                currentX++;
                currentDirection = 'E';
            }
        },
         'E' : {
            'L' : () => {
                currentY--;
                currentDirection = 'N';
            },
            'R' : () => {
                currentY++;
                currentDirection = 'S';
            }
        },
         'W' : {
            'L' : () => {
                currentY++;
                currentDirection = 'S';
            },
            'R' : () => {
                currentY--;
                currentDirection = 'N';
            }
        },
         'S' : {
            'L' : () => {
                currentX++;
                currentDirection = 'E';
            },
            'R' : () => {
                currentX--;
                currentDirection = 'W';
            }
        }
    }
    for (const move of moves) {
        actions[currentDirection][move]();
        if (currentY >= 0 && currentY < h && currentX >= 0 && currentX < w && map[currentY][currentX] === '.') {
            console.log(`${currentY} ${currentX}`);
        } else {
            console.log('Stop');
            break;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// // claudeの解答
// const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// const [H, W, sy, sx, N] = input[0].split(' ').map(Number);
// const maze = input.slice(1, H + 1);
// const directions = input.slice(H + 1);

// const dy = [-1, 0, 1, 0];  // North, East, South, West
// const dx = [0, 1, 0, -1];

// let y = sy;
// let x = sx;
// let facing = 0;  // 0: North, 1: East, 2: South, 3: West

// function turn(direction) {
//     if (direction === 'R') {
//         facing = (facing + 1) % 4;
//     } else if (direction === 'L') {
//         facing = (facing + 3) % 4;
//     }
// }

// function move() {
//     const ny = y + dy[facing];
//     const nx = x + dx[facing];

//     if (ny < 0 || ny >= H || nx < 0 || nx >= W || maze[ny][nx] === '#') {
//         return false;
//     }

//     y = ny;
//     x = nx;
//     return true;
// }

// function simulate() {
//     for (const direction of directions) {
//         turn(direction);
//         if (move()) {
//             console.log(y, x);
//         } else {
//             console.log('Stop');
//             break;
//         }
//     }
// }

// simulate();

// TypeScript

// type Direction = 'R' | 'L';

// type Position = {
//     y: number;
//     x: number;
// };

// type MazeDimensions = {
//     height: number;
//     width: number;
// };

// const simulate = (
//     input: string[]
// ): void => {
//     const [H, W, sy, sx, N] = input[0].split(' ').map(Number);
//     const maze: string[] = input.slice(1, H + 1);
//     const directions: string[] = input.slice(H + 1);

//     const dimensions: MazeDimensions = {
//         height: H,
//         width: W
//     };

//     const dy: number[] = [-1, 0, 1, 0];  // North, East, South, West
//     const dx: number[] = [0, 1, 0, -1];

//     let position: Position = {
//         y: sy,
//         x: sx
//     };
    
//     let facing: number = 0;  // 0: North, 1: East, 2: South, 3: West

//     const turn = (direction: Direction): void => {
//         if (direction === 'R') {
//             facing = (facing + 1) % 4;
//         } else if (direction === 'L') {
//             facing = (facing + 3) % 4;
//         }
//     };

//     const isValidPosition = (pos: Position): boolean => {
//         return pos.y >= 0 && 
//                pos.y < dimensions.height && 
//                pos.x >= 0 && 
//                pos.x < dimensions.width && 
//                maze[pos.y][pos.x] !== '#';
//     };

//     const move = (): boolean => {
//         const nextPosition: Position = {
//             y: position.y + dy[facing],
//             x: position.x + dx[facing]
//         };

//         if (!isValidPosition(nextPosition)) {
//             return false;
//         }

//         position = nextPosition;
//         return true;
//     };

//     const runSimulation = (): void => {
//         for (const direction of directions) {
//             turn(direction as Direction);
//             if (move()) {
//                 console.log(position.y, position.x);
//             } else {
//                 console.log('Stop');
//                 break;
//             }
//         }
//     };

//     runSimulation();
// };

// const input: string[] = require('fs')
//     .readFileSync('/dev/stdin', 'utf8')
//     .trim()
//     .split('\n');

// simulate(input);