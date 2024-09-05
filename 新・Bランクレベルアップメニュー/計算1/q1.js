const main = (input) => {
    const lines = input.trim().split('\n');
    const p = lines[0].split(' ').map(Number);
    const n = Number(lines[1]);
    const xy = lines.slice(2).map(line => line.split(' '));
    const calculateUdDistance = (point1, point2) => {
        const x = Math.abs(point1[0] - point2[0]);
        const y = Math.abs(point1[1] - point2[1]);
        return Math.sqrt(x * x  + y * y)
    }
    const calculateMnDistance = (point1, point2) => {
        const x = Math.abs(point1[0] - point2[0]);
        const y = Math.abs(point1[1] - point2[1]);
        return x  + y
    }
    const udDistance = [];
    const mnDistance = [];
    for (let i = 0; i < n; i++) {
        udDistance.push(calculateUdDistance(p, xy[i]));
        mnDistance.push(calculateMnDistance(p, xy[i]));
    }
    const sortedUdDistance = udDistance.slice().sort((a, b) => a - b).slice(0, 3);
    const sortedMnDistance = mnDistance.slice().sort((a, b) => a - b).slice(0, 3);
    
    let pointIndex = udDistance.indexOf(sortedUdDistance[0]);
    let pointNum = 0;
    for (const ud of sortedUdDistance) {
        if (udDistance.indexOf(ud) === pointIndex) {
            pointNum += 1;
            console.log(pointNum);
            
        } else {
            console.log(udDistance.indexOf(ud) + 1);
        }
        pointIndex = udDistance.indexOf(ud);
    }
    for (const mn of sortedMnDistance) {
        console.log(mnDistance.indexOf(mn) + 1);
    }
    console.log(mnDistance)
 }
 main(require('fs').readFileSync('/dev/stdin', 'utf8'));