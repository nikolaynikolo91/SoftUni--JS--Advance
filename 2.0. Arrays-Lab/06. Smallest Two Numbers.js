function solve (arr) {
arr.sort((a,b)=> Number(a) - Number(b))
console.log(arr.slice(0,2).join(' '))
}

solve ([30, 15, 50, 5])