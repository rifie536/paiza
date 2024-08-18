const main = (input) => {
    const lines = input.trim().split('\n');
    const x = Number(lines.shift());
    const [f1, f2] = lines.shift().split(' ').map(Number);
    const [l, n] = lines.shift().split(' ').map(Number);
    const s = n === 1 ? [Number(lines)] : lines[0].split(' ').map(Number);
    let totalFuel = 0;
    for (let i = 0; i < n; i++) {
        let beforeX = 0;
        let afterX = 0;
        if (x < s[i]) {
           beforeX = x * f1;
           afterX = (s[i] - x) * f2; 
        } else {
            beforeX = s[i] * f1;
        }
        totalFuel += beforeX + afterX;
    }
    
    const restL = l - s[n - 1];
    if (restL > 0) {
        let beforeX = 0;
        let afterX = 0;
        if (x < restL) {
            beforeX = x * f1;
            afterX = (restL - x) * f2;
        } else {
            beforeX = restL * f1;
        }
        totalFuel += beforeX + afterX;
    }
    console.log(totalFuel)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 別解　
const main = (input) => {
    const lines = input.trim().split('\n');
    const x = Number(lines.shift());
    const [f1, f2] = lines.shift().split(' ').map(Number);
    const [l, n] = lines.shift().split(' ').map(Number);
    const s = n > 0 ? lines[0].split(' ').map(Number) : [];
    
    let totalFuel = 0;
    let lastStop = 0;

    for (let i = 0; i <= n; i++) {
        const currentStop = i < n ? s[i] : l;
        const distance = currentStop - lastStop;
        
        totalFuel += Math.min(distance, x) * f1;
        if (distance > x) {
            totalFuel += (distance - x) * f2;
        }
        
        lastStop = currentStop;
    }

    console.log(Math.floor(totalFuel));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));