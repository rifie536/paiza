const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1).map(line => line.split(''));
    const moves = lines.slice(h + 1).map(line => line.split(' '));
    let y = sy;
    let x = sx;
    map[y][x] = '*';
    const dy = [-1, 0, 1, 0]; // N, E, S, W
    const dx = [0, 1, 0, -1];
    let currentDirection = 0;
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }
    for (const move of moves) {
        changeDirection(move[0]);
        for (let i = 0; i < Number(move[1]); i++) {
            let preY = y;
            let preX = x;
            y += dy[currentDirection];
            x += dx[currentDirection];
            if (y < 0 || y >= h || x < 0 || x >= w || map[y][x] === '#') {
                console.log(map.map(row => row.join('')).join('\n'));
                return;
            } else {
                map[y][x] = '*';
            }
        }
    }
    console.log(map.map(row => row.join('')).join('\n'));

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// TypeScript
// 型エイリアスの定義
// type Direction = 'L' | 'R';
// // これは 'L' または 'R' のみを許容する型を定義しています。
// // | はユニオン型を表し、「または」の意味です。

// type MapCell = '.' | '#' | '*';
// // マップの各セルが取りうる値を定義しています。

// type Map = MapCell[][];
// // マップ全体の型を定義。MapCellの2次元配列です。

// type Move = [Direction, number];
// // 移動指示の型を定義。Directionとnumberのタプルです。

// // メイン関数
// const main = (input: string): void => {
//     // input: string は、関数の引数inputが文字列型であることを示します。
//     // : void は、この関数が何も返さないことを示します。

//     const lines = input.trim().split('\n');
//     const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
//     // これらは型推論によって自動的に数値型(number)と判断されます。

//     const map: Map = lines.slice(1, h + 1).map(line => line.split('') as MapCell[]);
//     // map: Map で、mapがMap型であることを明示しています。
//     // as MapCell[] は型アサーションで、分割された文字がMapCell型であることを保証します。

//     const moves: Move[] = lines.slice(h + 1).map(line => {
//         const [direction, steps] = line.split(' ');
//         return [direction as Direction, Number(steps)];
//     });
//     // moves: Move[] で、movesがMove型の配列であることを示しています。
//     // direction as Direction は、directionがDirection型であることを保証します。

//     let y = sy;
//     let x = sx;
//     map[y][x] = '*';

//     const dy = [-1, 0, 1, 0]; // N, E, S, W
//     const dx = [0, 1, 0, -1];
//     let currentDirection = 0;

//     // 内部関数の定義
//     const changeDirection = (direction: Direction): void => {
//         // (direction: Direction) で引数の型を指定
//         // : void で返り値がないことを示す
//         if (direction === 'L') {
//             currentDirection = (currentDirection + 3) % 4;
//         } else if (direction === 'R') {
//             currentDirection = (currentDirection + 1) % 4;
//         }
//     };

//     // メインのループ処理
//     for (const [direction, steps] of moves) {
//         changeDirection(direction);
//         for (let i = 0; i < steps; i++) {
//             const newY = y + dy[currentDirection];
//             const newX = x + dx[currentDirection];

//             if (newY < 0 || newY >= h || newX < 0 || newX >= w || map[newY][newX] === '#') {
//                 console.log(map.map(row => row.join('')).join('\n'));
//                 return;
//             } else {
//                 y = newY;
//                 x = newX;
//                 map[y][x] = '*';
//             }
//         }
//     }

//     console.log(map.map(row => row.join('')).join('\n'));
// };

// // Node.jsで実行する場合のインポート文
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// main(input);