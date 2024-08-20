const main = (input) => {
    const lines = input.trim().split('\n');
    const [y, x, h] = lines[0].split(' ').map(Number);
    const baseL = lines[1].split(' ').map(Number);
    const baseFee = lines[2].split(' ').map(Number);
    const calculateFee = (depth, width, height) => {
        if (height <= baseL[0]) {
            if (Math.max(depth, width) <= baseL[1]) {
                return baseFee[0];
            } else if (depth + width + height <= baseL[2]) {
                return baseFee[1];
            } else {
                return baseFee[2];
            }
        } else {
            if (Math.max(depth, width, height) <= baseL[3]) {
                return baseFee[3];
            } else if (depth + width + height <= baseL[4]) {
                return baseFee[4];
            } else {
                return depth * width * height * baseFee[5];
            }
        }
    }
    const result = calculateFee(y, x, h);
    console.log(result);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

// 上記コードでは使用していないが、配列の分割代入を使用するとコードの可読性がよくなる。