const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1).map(line => line.split(''));
    const moves = lines.slice(h + 1).map(line => line.split(' ').map((v, i) => i === 0 ? Number(v) : v));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let y = sy;
    let x = sx;
    let currentDirection = 0;
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }
    map[sy][sx] = '*';
    let moveIndex = 0;
    for (time = 1; time <= 100; time++) {
        y += dy[currentDirection];
        x += dx[currentDirection];
        if (y >= 0 && y < h && x >= 0 && x < w && map[y][x] === '.') {
            map[y][x] = '*';
        } else {
            console.log(map.map(row => row.join('')).join('\n'));
            return;
        }
        if (moveIndex < moves.length && moves[moveIndex][0] === time) {
            changeDirection(moves[moveIndex][1]);
            moveIndex++;
        }
    }
    console.log(map.map(row => row.join('')).join('\n'));
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
//     const map: string[][] = lines.slice(1, h + 1).map(line => line.split(''));
//     const moves: TimeMove[] = lines.slice(h + 1).map(line => {
//         const [time, direction] = line.split(' ');
//         return [Number(time), direction as Direction];
//     });

//     const dimensions: BoardDimensions = {
//         height: h,
//         width: w
//     };

//     const dy: number[] = [-1, 0, 1, 0]; // N, E, S, W
//     const dx: number[] = [0, 1, 0, -1];
    
//     let position: Position = {
//         y: sy,
//         x: sx
//     };
    
//     let currentDirection: number = 0;
    
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
//                map[pos.y][pos.x] === '.';
//     };

//     const printMap = (mapData: string[][]): void => {
//         console.log(mapData.map(row => row.join('')).join('\n'));
//     };


//     map[sy][sx] = '*';
    
//     let moveIndex: number = 0;
    
//     for (let time = 1; time <= 100; time++) {
//         // 新しい位置を計算
//         position = {
//             y: position.y + dy[currentDirection],
//             x: position.x + dx[currentDirection]
//         };

//         if (isValidPosition(position)) {
//             map[position.y][position.x] = '*';
//         } else {
//             printMap(map);
//             return;
//         }

//         if (moveIndex < moves.length && moves[moveIndex][0] === time) {
//             changeDirection(moves[moveIndex][1]);
//             moveIndex++;
//         }
//     }
    
//     printMap(map);
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));