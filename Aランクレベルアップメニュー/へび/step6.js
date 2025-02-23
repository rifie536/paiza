const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1).map(line => line.split(' ').map((v, i) => i === 0 ? Number(v) : v));
    let y = sy;
    let x = sx;
    let currentDirection = 0;
    const dy = [-1, 0, 1, 0]; // N, E, S, W
    const dx = [0, 1, 0, -1];
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }

    let moveIndex = 0;
    for (let time = 0; time <= 99; time++) {
        if (moveIndex < moves.length && moves[moveIndex][0] === time) {
            changeDirection(moves[moveIndex][1]);
            moveIndex++;
        }

        y += dy[currentDirection];
        x += dx[currentDirection];

        if (y < 0 || y >= h || x < 0 || x >= w || map[y][x] === '#') {
            console.log('Stop');
            return;
        }
        console.log(`${y} ${x}`);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// type Direction = 'L' | 'R';
// type TimeMove = [number, Direction];

// type Position = {
//     y: number;
//     x: number;
// };

// type BoardDimensions = {
//     height: number;
//     width: number;
// };

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
//     const map: string[] = lines.slice(1, h + 1);
//     const moves: TimeMove[] = lines.slice(h + 1).map(line => {
//         const [time, direction] = line.split(' ');
//         return [Number(time), direction as Direction];
//     });

//     const dimensions: BoardDimensions = {
//         height: h,
//         width: w
//     };

//     let position: Position = {
//         y: sy,
//         x: sx
//     };

//     let currentDirection: number = 0;
//     const dy: number[] = [-1, 0, 1, 0]; // N, E, S, W
//     const dx: number[] = [0, 1, 0, -1];

//     const changeDirection = (direction: Direction): void => {
//         if (direction === 'L') {
//             currentDirection = (currentDirection + 3) % 4;
//         } else if (direction === 'R') {
//             currentDirection = (currentDirection + 1) % 4;
//         }
//     };

//     const isValidPosition = (pos: Position): boolean => {
//         return pos.y >= 0 && 
//                pos.y < dimensions.height && 
//                pos.x >= 0 && 
//                pos.x < dimensions.width && 
//                map[pos.y][pos.x] !== '#';
//     };

//     const printPosition = (pos: Position): void => {
//         console.log(`${pos.y} ${pos.x}`);
//     };

//     let moveIndex: number = 0;
    
//     for (let time = 0; time <= 99; time++) {
//         if (moveIndex < moves.length && moves[moveIndex][0] === time) {
//             changeDirection(moves[moveIndex][1]);
//             moveIndex++;
//         }

//         position = {
//             y: position.y + dy[currentDirection],
//             x: position.x + dx[currentDirection]
//         };

//         if (!isValidPosition(position)) {
//             console.log('Stop');
//             return;
//         }
        
//         printPosition(position);
//     }
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));