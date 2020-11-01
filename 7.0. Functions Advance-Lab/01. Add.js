function solution (num) {
    let data = num;
return function (num2){
    return data + num2
}
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));