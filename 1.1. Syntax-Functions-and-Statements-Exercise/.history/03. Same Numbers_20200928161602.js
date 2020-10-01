function solve (input) {
let str = input + ""
    let sameNumber = str.split('');
    let filterArr = sameNumber.filter((a) => a != sameNumber[0]);

    if (filterArr.length === 0){
        console.log('true')
    } else {
        console.log('false')
    }

    let sumAlldigits = sameNumber.reduce((a,b)=> Number(a)+Number(b))
    console.log(sumAlldigits)
}

solve (2222222)