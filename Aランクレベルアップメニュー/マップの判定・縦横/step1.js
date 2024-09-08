const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, n] = lines[0].split(' ').map(Number);
    const s = lines.slice(1, h + 1);
    const yx = lines.slice(h + 1).map(line => line.split(' ').map(Number));
    for (let i = 0; i < n; i++) {
        let y = yx[i][0];
        let x = yx[i][1];
        console.log(s[y][x]);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// forEach使用パターン
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const [h, w, n] = lines[0].split(' ').map(Number);
//     const s = lines.slice(1, h + 1);
//     const yx = lines.slice(h + 1).map(line => line.split(' ').map(Number));
//     yx.forEach(([y, x]) => {
//         console.log(s[y][x]);
//     })
// }
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));