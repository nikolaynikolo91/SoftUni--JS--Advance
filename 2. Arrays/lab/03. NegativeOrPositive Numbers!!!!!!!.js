function solve (arr) {
    let arrNegative = [];
    let arrPositive = [];
    let arrOfZero = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arrPositive.push(arr[i])
        } else if (arr[i] === 0){
            arrOfZero.push(arr[i])
        }
        else {
            arrNegative.push(arr[i])
        }  
    }

let arrNsort = arrNegative.sort((a,b) => (b) - (a))
let arrPosSort = arrPositive.sort((a,b) => Number(a) - Number(b))

console.log(arrNsort.concat(arrPosSort,arrOfZero))
}

//solve ([7, -2, 8, 9])
solve ([3, -2, 0, -1])
solve ([7, -2, 8, 9])