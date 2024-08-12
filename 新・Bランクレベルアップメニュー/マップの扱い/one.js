const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines.shift().split(' ');
    const [y, x] = lines.pop().split(' ');
    let strings = lines.map(string => string.split(''));
    strings[y][x] = strings[y][x] === '.' ? '#' : '.';
    console.log(strings.map(string => string.join('')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));