const main = (input) => {
    let line = input.trim();
    const leetChars = {
        '4' : 'a',
        '@' : 'a',
        '1' : 'i',
        '!' : 'i',
        '2' : 'z'
    }
    const keysArray = Object.keys(leetChars);
    const convertLeet = (line) => {
        let afterConvert = line;
        for (let i = 0; i < keysArray.length; i++) {
            if (afterConvert.includes(keysArray[i])) {
                 afterConvert = afterConvert.replaceAll(keysArray[i], leetChars[keysArray[i]]);
            }
        }
        return afterConvert;
    }
    const hasPaiza = (line) => {
        const afterConvert = convertLeet(line);
        if (line.includes('paiza')) {
            return 'paiza';
        }
        if (afterConvert.includes('paiza')) {
            return 'leet';
        } else {
            return 'nothing';
        }
    }
    const result = hasPaiza(line);
    console.log(result)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));


// TypeScript

// const main = (input: string): void => {
//     let line = input.trim();
//     const leetChars: Record<string, string> = {
//         '4': 'a',
//         '@': 'a',
//         '1': 'i',
//         '!': 'i',
//         '2': 'z'
//     }
//     const keysArray = Object.keys(leetChars);
//     const convertLeet = (line: string): string => {
//         let afterConvert = line;
//         for (let i = 0; i < keysArray.length; i++) {
//             if (afterConvert.includes(keysArray[i])) {
//                 afterConvert = afterConvert.replaceAll(keysArray[i], leetChars[keysArray[i]]);
//             }
//         }
//         return afterConvert;
//     }
//     const hasPaiza = (line: string): string => {
//         const afterConvert = convertLeet(line);
//         if (line.includes('paiza')) {
//             return 'paiza';
//         }
//         if (afterConvert.includes('paiza')) {
//             return 'leet';
//         } else {
//             return 'nothing';
//         }
//     }
//     const result = hasPaiza(line);
//     console.log(result);
// }
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));