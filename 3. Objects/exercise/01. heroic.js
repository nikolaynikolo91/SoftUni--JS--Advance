function solve(input) {
    let arrObject = [];
    for (let line of input.slice(0)) {
        let [nameHero, lvl, itemArr] = line.split(/\s\/\s/)
        let heroObj = {
            name: nameHero,
            level: Number(lvl),
            items: chek(itemArr)
        }
        arrObject.push(heroObj)
    }
    
    function chek(str) {
        if (str === undefined) {
            return []
        } else {
            return str.split(', ')
        }
    }
    
    console.log(JSON.stringify(arrObject))
}



solve(['Liusi / 22 / Sword '])