const main = (input) => {
    const k = Number(input.trim());
    const suits = ["S", "H", "D", "C"];
    const numberOfCards = 13;

    const initialDeck = suits.flatMap(suit =>
        Array.from({length: numberOfCards}, (_, i) => `${suit}_${i + 1}`)
    );

    const perfectShuffle = (deck, shuffleCount) => {
        for (let i = 0; i < shuffleCount; i++) {
            const half = deck.length / 2;
            const upperHalf = deck.slice(0, half);
            const lowerHalf = deck.slice(half);
            deck = [];

            for (let j = 0; j < half; j++) {
                deck.push(upperHalf[j], lowerHalf[j]);
            }
        }
        return deck;
    };

    const result = perfectShuffle(initialDeck, k);
    console.log(result.join('\n'));
};

main(require('fs').readFileSync('/dev/stdin', 'utf8'));