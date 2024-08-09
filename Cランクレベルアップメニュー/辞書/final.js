const main = (input) => {
    const lines = input.trim().split('\n');
    const [p, q, r] = lines[0].split(' ').map(num => +num);
    const fromAtoB = lines.slice(1, p + 1).map(line => line.split(' ').map(num => +num));
    const fromBtoC = lines.slice(p + 1, p + q + 1).map(line => line.split(' ').map(num => +num));
    const objFromAtoB = Object.fromEntries(fromAtoB);
    const objFromBtoC = Object.fromEntries(fromBtoC);
    for (let key in objFromAtoB) {
        console.log(`${key} ${objFromBtoC[objFromAtoB[key]]}`)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));