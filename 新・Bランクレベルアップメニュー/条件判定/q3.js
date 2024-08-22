const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines[0]);
    const ngWords = lines[1];
    const half = Math.floor(ngWords.length / 2);
    const frontWords = Number.isInteger(ngWords.length / 2) ? ngWords.slice(0, half) : ngWords.slice(0, half + 1);
    const backWords = ngWords.slice(half);
    const afterWords = [];
    for (let i = 2; i < n + 2; i++) {
        if (lines[i].length === ngWords.length) {
            if (lines[i] === ngWords) {
                lines[i] = 'banned';
            } else if (lines[i].includes(frontWords)) {
                lines[i] = lines[i].replace(frontWords, 'x'.repeat(frontWords.length));
            } else if (lines[i].includes(backWords)) {
                lines[i] = lines[i].replace(backWords, 'x'.repeat(backWords.length));
            }
        }
        afterWords.push(lines[i]);
    }
    console.log(afterWords.join('\n'))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));