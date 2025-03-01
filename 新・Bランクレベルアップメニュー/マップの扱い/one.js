const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines.shift().split(' ');
    const [y, x] = lines.pop().split(' ');
    let strings = lines.map(string => string.split(''));
    strings[y][x] = strings[y][x] === '.' ? '#' : '.';
    console.log(strings.map(string => string.join('')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// TypeScript

// const main = (input: string): void => {
//     const lines: string[] = input.trim().split('\n');
//     const [h, w] = lines.shift()!.split(' ').map(Number);
//     const [y, x] = lines.pop()!.split(' ').map(Number);
    
//     let strings: string[][] = lines.map(string => string.split(''));
//     strings[y][x] = strings[y][x] === '.' ? '#' : '.';
    
//     console.log(strings.map(string => string.join('')).join('\n'));
// };

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));

