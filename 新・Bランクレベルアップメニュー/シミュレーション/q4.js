const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines.shift());
    const tyx = lines.map(line => line.split(' ').map(Number));
    let currentT = 0;
    let currentY = tyx[0][1];
    let currentX = tyx[0][2];
    for (let i = 1; i < n; i++) {
        const time = tyx[i][0] - tyx[i - 1][0];
        const diffY = tyx[i][1] - tyx[i - 1][1];
        const diffX = tyx[i][2] - tyx[i - 1][2];
        const speedY = diffY / time;
        const speedX = diffX / time;
        if (i != 1) {
            currentY += speedY;
            currentX += speedX;
        }
        while (currentT <= tyx[i][0]) {
            console.log(`${Math.round(currentY)} ${Math.round(currentX)}`);
            if (currentT != tyx[i][0]) {
                currentY += speedY;
                currentX += speedX;  
            }
            currentT++;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));