const main = (input) => {
    const [n, ...lines] = input.trim().split('\n');
    const name = lines.pop();
    const sa = lines.map(line => line.split(' '));
    const objSa = Object.fromEntries(sa);
    console.log(objSa[name]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// const main = (input: string): void => {
//     const [n, ...lines] = input.trim().split('\n');
//     const name: string = lines.pop() || "";
//     const sa: string[][] = lines.map(line => line.split(' '));
//     const objSa: Record<string, string> = Object.fromEntries(sa);
//     console.log(objSa[name]);
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));