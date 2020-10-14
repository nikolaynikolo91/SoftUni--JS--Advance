function makeArray(count, content) {
    

    let arr = [1];
    for (let i = 0; i < count-1; i++) {
        let b = arr.slice(- content)
        .reduce((a, b) => a + b, 0)       
        arr.push(b)
    }
    console.log(arr.join(' '))
}

//makeArray(6, 3)
makeArray(8, 2)