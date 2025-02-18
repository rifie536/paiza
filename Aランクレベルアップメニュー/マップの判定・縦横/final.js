const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const board = lines.slice(1);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (i === 0 && j === 0 && board[i][j + 1] === '#' && board[i + 1][j] === '#') {
                console.log(`${i} ${j}`); // 最左上を確認
            } else if (i === 0 && j === w - 1 && board[i + 1][j] === '#' && board[i][j - 1] === '#') {
                console.log(`${i} ${j}`); // 最右上を確認
            } else if (i === 0 && j > 0 && j < w - 1 && board[0][j - 1] === '#' && board[0][j + 1] === '#' && board[1][j] === '#') {
                console.log(`${i} ${j}`); // 最左上以外と最右上以外の上を確認
            } else if (i > 0 && i < h - 1 && j === 0 && board[i][j + 1] === '#' && board[i - 1][j] === '#' && board[i + 1][j] === '#') {
                console.log(`${i} ${j}`); // 最左上と最左下以外の左を確認
            } else if (i > 0 && i < h - 1 && j === w - 1 && board[i][j - 1] === '#' && board[i - 1][j] === '#' && board[i + 1][j] === '#') {
                console.log(`${i} ${j}`); // 最右上と最右下以外の右を確認
            } else if (i > 0 && i < h - 1 && j > 0 && j < w - 1 && board[i - 1][j] === '#' && board[i + 1][j] === '#' && board[i][j - 1] === '#' && board[i][j + 1] === '#') {
                console.log(`${i} ${j}`); // 最左、最右、最上、最下以外を確認
            } else if (i === h - 1 && j === 0 && board[i - 1][0] === '#' && board[i][1] === '#') {
                console.log(`${i} ${j}`); // 最左下を確認
            } else if (i === h - 1 && j > 0 && j < w - 1 && board[i - 1][j] === '#' && board[i][j - 1] === '#' && board[i][j + 1] === '#') {
                console.log(`${i} ${j}`); // 最左下と最右下以外の下を確認
            } else if (i === h - 1 && j === w - 1 && board[i][j - 1] === '#' && board[i - 1][j] === '#') {
                console.log(`${i} ${j}`); // 最右下を確認
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// // 別解
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const [H, W] = lines[0].split(' ').map(Number);
//     const map = lines.slice(1);

//     const isWall = (y, x) => {
//         if (y < 0 || y >= H || x < 0 || x >= W) return true; // 境界外は壁とみなす
//         return map[y][x] === '#';
//     };

//     const checkSurroundings = (y, x) => {
//         const up = y === 0 || isWall(y - 1, x);
//         const down = y === H - 1 || isWall(y + 1, x);
//         const left = x === 0 || isWall(y, x - 1);
//         const right = x === W - 1 || isWall(y, x + 1);

//         return up && down && left && right;
//     };

//     for (let y = 0; y < H; y++) {
//         for (let x = 0; x < W; x++) {
//             if (checkSurroundings(y, x)) {
//                 console.log(`${y} ${x}`);
//             }
//         }
//     }
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// isWall関数はなくてもいい
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const [H, W] = lines[0].split(' ').map(Number);
//     const map = lines.slice(1);

//     const checkSurroundings = (y, x) => {
//         const up = y === 0 || map[y - 1][x] === '#';
//         const down = y === H - 1 || map[y + 1][x] === '#';
//         const left = x === 0 || map[y][x - 1] === '#';
//         const right = x === W - 1 || map[y][x + 1] === '#';

//         return up && down && left && right;
//     };

//     for (let y = 0; y < H; y++) {
//         for (let x = 0; x < W; x++) {
//             if (checkSurroundings(y, x)) {
//                 console.log(`${y} ${x}`);
//             }
//         }
//     }
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// TypeScript

// type Position = {
//     i: number;
//     j: number;
// };

// type BoardDimensions = {
//     h: number;
//     w: number;
// };

// const checkTopLeft = (board: string[], pos: Position): boolean => {
//     const { i, j } = pos;
//     return i === 0 && j === 0 && board[i][j + 1] === '#' && board[i + 1][j] === '#';
// };

// const checkTopRight = (board: string[], pos: Position, w: number): boolean => {
//     const { i, j } = pos;
//     return i === 0 && j === w - 1 && board[i + 1][j] === '#' && board[i][j - 1] === '#';
// };

// const checkTopEdge = (board: string[], pos: Position, w: number): boolean => {
//     const { i, j } = pos;
//     return i === 0 && j > 0 && j < w - 1 && 
//            board[0][j - 1] === '#' && board[0][j + 1] === '#' && board[1][j] === '#';
// };

// const checkLeftEdge = (board: string[], pos: Position, dims: BoardDimensions): boolean => {
//     const { i, j } = pos;
//     return i > 0 && i < dims.h - 1 && j === 0 && 
//            board[i][j + 1] === '#' && board[i - 1][j] === '#' && board[i + 1][j] === '#';
// };

// const checkRightEdge = (board: string[], pos: Position, dims: BoardDimensions): boolean => {
//     const { i, j } = pos;
//     return i > 0 && i < dims.h - 1 && j === dims.w - 1 && 
//            board[i][j - 1] === '#' && board[i - 1][j] === '#' && board[i + 1][j] === '#';
// };

// const checkCenter = (board: string[], pos: Position, dims: BoardDimensions): boolean => {
//     const { i, j } = pos;
//     return i > 0 && i < dims.h - 1 && j > 0 && j < dims.w - 1 && 
//            board[i - 1][j] === '#' && board[i + 1][j] === '#' && 
//            board[i][j - 1] === '#' && board[i][j + 1] === '#';
// };

// const checkBottomLeft = (board: string[], pos: Position, h: number): boolean => {
//     const { i, j } = pos;
//     return i === h - 1 && j === 0 && board[i - 1][0] === '#' && board[i][1] === '#';
// };

// const checkBottomEdge = (board: string[], pos: Position, dims: BoardDimensions): boolean => {
//     const { i, j } = pos;
//     return i === dims.h - 1 && j > 0 && j < dims.w - 1 && 
//            board[i - 1][j] === '#' && board[i][j - 1] === '#' && board[i][j + 1] === '#';
// };

// const checkBottomRight = (board: string[], pos: Position, dims: BoardDimensions): boolean => {
//     const { i, j } = pos;
//     return i === dims.h - 1 && j === dims.w - 1 && 
//            board[i][j - 1] === '#' && board[i - 1][j] === '#';
// };

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [h, w]: number[] = lines[0].split(' ').map(Number);
//     const board: string[] = lines.slice(1);
//     const dims: BoardDimensions = { h, w };

//     for (let i: number = 0; i < h; i++) {
//         for (let j: number = 0; j < w; j++) {
//             const pos: Position = { i, j };
            
//             if (checkTopLeft(board, pos) ||
//                 checkTopRight(board, pos, w) ||
//                 checkTopEdge(board, pos, w) ||
//                 checkLeftEdge(board, pos, dims) ||
//                 checkRightEdge(board, pos, dims) ||
//                 checkCenter(board, pos, dims) ||
//                 checkBottomLeft(board, pos, h) ||
//                 checkBottomEdge(board, pos, dims) ||
//                 checkBottomRight(board, pos, dims)) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//     }
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));