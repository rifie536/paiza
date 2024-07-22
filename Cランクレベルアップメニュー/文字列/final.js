function main(input) {
    let n = input.trim().split('\n');
    for (let i = 1; i <= n[0]; i++) {
        let thm = n[i].split(' ');
        let t = thm[0].split(':').map(t => Number(t));
        let h = Number(thm[1]);
        let m = Number(thm[2]);

        t[0] += h;
        t[1] += m;

        if (t[1] >= 60) {
            t[1] -= 60;
            t[0] += 1;
        }
        if (t[0] >= 24) {
            t[0] -= 24;
        }

        t = t.map(t => String(t).padStart(2, '0'));

        console.log(t.join(':'));
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));