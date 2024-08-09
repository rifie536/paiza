const d = parseInt(10000 / 13);
for (let i = d; true; i++) {
    if (i * 13 >= 10000) {
        console.log(i * 13);
        return;
    }
}

// 別解
// let i = Math.ceil(10000 / 13);
// console.log(i * 13);