const main = (input) => {
    const lines = input.trim().split('\n');
    const p = lines[0].split(' ').map(Number);
    const n = Number(lines[1]);
    const xy = lines.slice(2).map(line => line.split(' ').map(Number));

    const calculateDistance = (point1, point2, distanceType) => {
        const x = point1[0] - point2[0];
        const y = point1[1] - point2[1];
        return distanceType === 'euclidean'
            ? Math.sqrt(x * x + y * y)
            : Math.abs(x) + Math.abs(y);
    };

    const calculateAndSortDistances = (distanceType) => {
        return xy.map((point, index) => ({
            index: index + 1,
            distance: calculateDistance(p, point, distanceType)
        }))
        .sort((a, b) => a.distance - b.distance || a.index - b.index)
        .slice(0, 3);
    };

    const euclideanResults = calculateAndSortDistances('euclidean');
    const manhattanResults = calculateAndSortDistances('manhattan');

    euclideanResults.forEach(result => console.log(result.index));
    manhattanResults.forEach(result => console.log(result.index));
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));