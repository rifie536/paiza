const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w] = lines[0].split(' ').map(Number);
    const board = lines.slice(1).map(line => line.split(''));


    const expandTerritory = (H, W, map) => {
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];

        const result = Array.from({ length: H }, () => Array(W).fill('#'));

        let startX, startY;
        for (let i = 0; i < H; i++) {
            for (let j = 0; j < W; j++) {
                if (map[i][j] === '*') {
                    startX = i;
                    startY = j;
                    result[i][j] = 0;
                }
            }
        }

        const queue = [[startX, startY]];

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const step = result[x][y];

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx < 0 || nx >= H || ny < 0 || ny >= W || map[nx][ny] === '#' || result[nx][ny] !== '#') {
                    continue;
                }

                result[nx][ny] = step + 1;
                queue.push([nx, ny]);
            }
        }

        result.forEach(row => {
            console.log(row.join(''));
        });
    }
    expandTerritory(h, w, board);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
