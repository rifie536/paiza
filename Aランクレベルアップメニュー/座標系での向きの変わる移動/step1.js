const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const map = lines.slice(1);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j ++) {
            if (map[i][j] === '#') {
                console.log(`${i} ${j}`);
            }
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));