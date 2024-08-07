const main = (input) => {
    const [n, ...lines] = input.trim().split('\n');
    const name = lines.pop();
    const sa = lines.map(line => line.split(' '));
    const objSa = Object.fromEntries(sa);
    console.log(objSa[name]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));