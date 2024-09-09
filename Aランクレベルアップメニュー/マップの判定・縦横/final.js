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