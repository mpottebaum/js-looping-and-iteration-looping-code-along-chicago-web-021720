function writeCards(strings, event) {
    let array = [];
    for (let i = 0; i < strings.length; i++) {
        console.log(strings[i]);
        array.push(`Thank you, ${strings[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}