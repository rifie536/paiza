function calculateMaxScore(s, b) {
    const board = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ];

    function checkBingo(state) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
            [0, 4, 8], [2, 4, 6]             // 斜め
        ];

        return lines.filter(line => line.every(i => state[i])).length;
    }

    function dfs(state, score, panelsHit) {
        if (panelsHit === 9) return score;

        let maxScore = score;

        for (let i = 0; i < 9; i++) {
            if (!state[i]) {
                const newState = [...state];
                newState[i] = true;

                const newPanelsHit = panelsHit + 1;
                let newScore = score + s[i];

                const previousBingos = checkBingo(state);
                const currentBingos = checkBingo(newState);
                const newBingos = currentBingos - previousBingos;

                if (newBingos > 0) {
                    newScore += b[i][newBingos - 1];
                }

                maxScore = Math.max(maxScore, dfs(newState, newScore, newPanelsHit));
            }
        }

        return maxScore;
    }

    return dfs(new Array(9).fill(false), 0, 0);
}

function main(input) {
    const lines = input.trim().split('\n');
    const s = lines.slice(0, 3).flatMap(line => line.split(' ').map(Number));
    const b = lines.slice(3).map(line => line.split(' ').map(Number));

    console.log(calculateMaxScore(s, b));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))