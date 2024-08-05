const main = (input) => {
    const lines = input.trim().split('\n');
    const m = Number(lines[0]);
    const chars = lines.slice(1, m + 1);
    const n = lines[m + 1];
    const strings = lines.slice(m + 2);
    for (const char of chars) {
        for (const str of strings) {
            console.log(str.includes(char) ? 'YES' : 'NO');
        }
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));