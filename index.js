const createStatsCollector = require("mocha/lib/stats-collector");

// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newappendCat = [...cats, name];
    return newappendCat
}

function prependCat(name) {
    const newprependCat = [name, ...cats];
    return newprependCat
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
    return cats.slice(1)
}