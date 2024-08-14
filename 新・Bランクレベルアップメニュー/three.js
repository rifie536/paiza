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
   for (let i = 1; i < Math.max(h, w); i++) {
       inversion(y + i, x + i);
       inversion(y + i, x - i);
       inversion(y - i, x + i);
       inversion(y - i, x - i);
       inversion(y - i, x);
       inversion(y + i, x);
       inversion(y, x - i);
       inversion(y, x + i);
   }
   inversion(y, x)
   console.log(strings.map(string => string.join('')).join('\n'));
 }
 main(require('fs').readFileSync('/dev/stdin', 'utf8'));