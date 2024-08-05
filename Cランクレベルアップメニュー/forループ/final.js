const main = (input) => {
    const lines = input.trim().split('\n');
    const nmk = lines.shift().split(' ');
    const n = nmk[0];
    const m = nmk[1];
    const k = nmk[2];
    for (let i = 0; i < n; i++) {
        let point = 0;
        const nums = lines[i].split(' ');
       for (let j = 0; j < m; j++) {
          if (nums[j] === k) {
              point += 1;
          }
       } 
       console.log(point);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));