function solve(input) {
    let allVariation = []
    let colons = []

    for (let row = 0; row < input.length; row++) {
        allVariation.push(input[row].reduce((a, b) => a + b, 0))
        for (let col = 0; col < input.length; col++) {
            colons.push(input[col][row])
        }
    }

    for (let d = 0; d < colons.length; d++) {
        let sum = 0
        for (let r = 0; r < input.length; r++) {
            let el = colons.shift();
            sum +=el
        }
        allVariation.push(sum)    
    }
//console.log(allVariation)


    let priviosEL = allVariation.shift();
    let isMagic = false;

    for (let j = 0; j < allVariation.length; j++) {
        let el = allVariation[j]
        if (el !== priviosEL) {
            isMagic = false;
            break;
        } else {
            priviosEL = el;
            isMagic = true;
        }
    }

    console.log(isMagic ? 'true' : 'false')
}

solve([[0, 5, 0],
       [5, 0, 0,],
       [0, 5, 0]])