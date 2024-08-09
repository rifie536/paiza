const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines[0]);
    const names = lines.slice(1, n + 1).sort();
    const m = Number(lines[n + 1]);
    const damages = names.map(name => [name, 0]);
    const objDamages = Object.fromEntries(damages);
    for (let i = n + 2; i < n + m + 2; i++) {
        const [name, damage] = lines[i].split(' ');
        objDamages[name] += Number(damage);
    }
    for (let key in objDamages) {
        console.log(objDamages[key]);
    }
 }
 main(require('fs').readFileSync('/dev/stdin', 'utf8'));