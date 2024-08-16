const main = (input) => {
    const [h, w, d] = input.trim().split(' ').map(Number);
    const nums = Array(h).fill().map( () => Array(w).fill(0));
    let count = 1;
    const diagonal = (num1, num2) => {
        let y = num1, x = num2;
        while (y >= 0 && x < w) {
            nums[y][x] = count++;
            y--;
            x++;
        }
        
    }
    
    const rDiagonal = (num1, num2) => {
        let y = num1, x = num2;
        while (x >= 0 && y < h) {
            nums[y][x] = count++;
            y++;
            x--;
        }
        
    }
    if (d === 1) {
        for (let i = 0; i < h; i++) {
            diagonal(i, 0);
        }
        for (let i = 1; i < w; i++) {
            diagonal(h - 1, i)
        }
    } else if (d === 2) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                nums[i][j] = count++;
            }
        }
    } else if (d === 3) {
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                nums[j][i] = count++;
            }
        }
    } else if (d === 4) {
        for (let i = 0; i < w; i++) {
            rDiagonal(0, i);
        }
        for (let i = 1; i < h; i++) {
            rDiagonal(i, w - 1);
        }
    }
    console.log(nums.map(num => num.join(' ')).join('\n'));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
