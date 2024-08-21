const main = (input) => {
    const lines = input.trim().split('\n');
    const n = Number(lines[0]);
    const visionTest = [];
    for (let i = 1; i <= n; i++) {
        const [t, r] = lines[i].split(' ');
        visionTest.push([t, r === 'ok']);
    }
    
    const evaluateVision = (tests) => {
      let successCount = { 'TA': 0, 'TB': 0, 'TC': 0, 'TD': 0 };
      let failureCount = { 'TA': 0, 'TB': 0, 'TC': 0, 'TD': 0 };
      let visionLevel = ['E'];
    
      for (const [test, result] of tests) {
        if (result) {
          successCount[test]++;
          if (failureCount[test] < 2 && successCount[test] >= 2) {
            successCount[test] = 0;
            failureCount[test] = 0;
            visionLevel.push(test[1]);
          }
        } else {
          failureCount[test]++;
        }
      }

      return visionLevel.sort().shift();
    }   

    console.log(evaluateVision(visionTest))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));