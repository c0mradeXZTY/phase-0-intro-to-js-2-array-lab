// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(){
    cats.shift(name)
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
    //using slice 
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat(){
    return cats.slice(1)
}