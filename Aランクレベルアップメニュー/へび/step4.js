const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1).map(line => line.split(' '));
    let y = sy;
    let x = sx;
    const dy = [-1, 0, 1, 0]; // N, E, S, W
    const dx = [0, 1, 0, -1];
    let currentDirection = 0;
    const changeDirection = (direction) => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    }
    for (const move of moves) {
        changeDirection(move[0]);
        for (let i = 0; i < Number(move[1]); i++) {
            let preY = y;
            let preX = x;
            y += dy[currentDirection];
            x += dx[currentDirection];
            if (y < 0 || y >= h || x < 0 || x >= w || map[y][x] === '#') {
                console.log(`${preY} ${preX}`);
                console.log('Stop');
                return;
            }
        }
        console.log(`${y} ${x}`);
    }

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


TypeScript

type Direction = 'L' | 'R';

type Position = {
    y: number;
    x: number;
};

type Move = [Direction, string];

type BoardDimensions = {
    height: number;
    width: number;
};

const main = (input: string): void => {
    const lines: string[] = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map: string[] = lines.slice(1, h + 1);
    const moves: Move[] = lines.slice(h + 1).map(line => line.split(' ') as Move);

    const dimensions: BoardDimensions = {
        height: h,
        width: w
    };

    let position: Position = {
        y: sy,
        x: sx
    };

    const dy: number[] = [-1, 0, 1, 0]; // N, E, S, W
    const dx: number[] = [0, 1, 0, -1];
    let currentDirection: number = 0;

    const changeDirection = (direction: Direction): void => {
        if (direction === 'L') {
            currentDirection = (currentDirection + 3) % 4;
        } else if (direction === 'R') {
            currentDirection = (currentDirection + 1) % 4;
        }
    };

    const isValidPosition = (pos: Position): boolean => {
        return pos.y >= 0 && 
               pos.y < dimensions.height && 
               pos.x >= 0 && 
               pos.x < dimensions.width && 
               map[pos.y][pos.x] !== '#';
    };

    const printPosition = (pos: Position): void => {
        console.log(`${pos.y} ${pos.x}`);
    };

    for (const [direction, steps] of moves) {
        changeDirection(direction);
        
        for (let i = 0; i < Number(steps); i++) {
            const previousPosition: Position = { ...position };
            
            position = {
                y: position.y + dy[currentDirection],
                x: position.x + dx[currentDirection]
            };

            if (!isValidPosition(position)) {
                printPosition(previousPosition);
                console.log('Stop');
                return;
            }
        }
        
        printPosition(position);
    }
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));