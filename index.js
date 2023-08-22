
// Write your solution here
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.splice(-1)
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

const newCats = []
function appendCat(name) {
    let newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    let newCats = [name, ...cats]
    return newCats
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
    return cats
}

function removeLastCat() {
    let newCats = cats.slice(0, -1)
    return newCats
} 


function removeFirstCat() {
    let newCats = cats.slice(1)
    console.log(newCats);
    return newCats
}