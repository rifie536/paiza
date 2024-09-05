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

// claude
// const main = (input) => {
//     const lines = input.trim().split('\n');
//     const [Px, Py] = lines[0].split(' ').map(Number);
//     const N = parseInt(lines[1]);
//     const points = lines.slice(2).map(line => line.split(' ').map(Number));
    
//     const calculateDistances = (distanceFunc) => 
//         points.map((point, index) => ({
//             index: index + 1,
//             distance: distanceFunc(point)
//         }));
    
//     const euclideanDistances = calculateDistances(point => 
//         Math.sqrt((Px - point[0])**2 + (Py - point[1])**2)
//     );
    
//     const manhattanDistances = calculateDistances(point => 
//         Math.abs(Px - point[0]) + Math.abs(Py - point[1])
//     );
    
//     const sortDistances = (distances) => 
//         distances.sort((a, b) => a.distance - b.distance || a.index - b.index);
    
//     const printTopThree = (sorted) => 
//         console.log(sorted.slice(0, 3).map(item => item.index).join('\n'));
    
//     printTopThree(sortDistances(euclideanDistances));
//     printTopThree(sortDistances(manhattanDistances));
// }

// main(require('fs').readFileSync('/dev/stdin', 'utf8'));