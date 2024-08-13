const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines.shift().split(' ').map(Number);
    const [y, x] = lines.pop().split(' ').map(Number);
    let strings = lines.map(string => string.split(''));
    const inversion = (y, x) => {
        if (y >= 0 && y < h && x >= 0 && x < w) {
            strings[y][x] = strings[y][x] === '.' ? '#' : '.';
        }
    }
    inversion(y, x);
    inversion(y - 1, x);
    inversion(y + 1, x);
    inversion(y, x - 1);
    inversion(y, x + 1);
    console.log(strings.map(string => string.join('')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));