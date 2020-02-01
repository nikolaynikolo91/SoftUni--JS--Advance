function solve(input) {
    let number = Number(input[0]);
    let arr = input.slice(1)

    arr.forEach(element => {
        switch (element) {
            case 'chop':
                number /= 2;
                console.log(number)
                break;
            case 'dice':
                number = Math.sqrt(number)
                console.log(number)
                break;
            case 'spice':
                number++
                console.log(number)
                break;
            case 'bake':
                number *= 3;
                console.log(number)
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number.toFixed(1))
                break;
            default:
                break;
        }
    });
}
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])