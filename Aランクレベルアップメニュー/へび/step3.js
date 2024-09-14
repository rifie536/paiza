const main = (input) => {
    const lines = input.trim().split('\n');
    const [h, w, sy, sx, n] = lines[0].split(' ').map(Number);
    const map = lines.slice(1, h + 1);
    const moves = lines.slice(h + 1);
    let currentDirection = 'N';
    let currentY = sy;
    let currentX = sx;
    const actions = {
        'N' : {
            'L' : () => {
                currentX--;
                currentDirection = 'W';
            },
            'R' : () => {
                currentX++;
                currentDirection = 'E';
            }
        },
         'E' : {
            'L' : () => {
                currentY--;
                currentDirection = 'N';
            },
            'R' : () => {
                currentY++;
                currentDirection = 'S';
            }
        },
         'W' : {
            'L' : () => {
                currentY++;
                currentDirection = 'S';
            },
            'R' : () => {
                currentY--;
                currentDirection = 'N';
            }
        },
         'S' : {
            'L' : () => {
                currentX++;
                currentDirection = 'E';
            },
            'R' : () => {
                currentX--;
                currentDirection = 'W';
            }
        }
    }
    for (const move of moves) {
        actions[currentDirection][move]();
        if (currentY >= 0 && currentY < h && currentX >= 0 && currentX < w && map[currentY][currentX] === '.') {
            console.log(`${currentY} ${currentX}`);
        } else {
            console.log('Stop');
            break;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));