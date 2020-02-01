function solve(input) {
    let arrObject = [];
    for (let line of input.slice(0)) {
        let [nameHero, lvl, itemArr] = line.split(/\s\/\s/)
        arrItems = itemArr.split(/[,]\s/)
        let heroObj = {
            name: nameHero,
            level: Number(lvl),
            items: arrItems.item((a) =>{arrItems !== undefined ? arrItems : []})
        }
        arrObject.push(heroObj)
    }
console.log(JSON.stringify(arrObject))
}