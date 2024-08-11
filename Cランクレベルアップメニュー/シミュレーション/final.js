const main = (input) => {
    let hp = Number(input.trim());
    const paizaAttack = [1, 1];
    const monsterAttack = [1, 1];
    for (let i = 3; ; i++) {
        paizaAttack.push(monsterAttack[0] + monsterAttack[1]);
        monsterAttack.push(paizaAttack[0] + paizaAttack[1] * 2);
        paizaAttack.shift();
        monsterAttack.shift();
        hp -= monsterAttack[1];
        if (hp - 2 <= 0) {
            console.log(i);
            break;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));