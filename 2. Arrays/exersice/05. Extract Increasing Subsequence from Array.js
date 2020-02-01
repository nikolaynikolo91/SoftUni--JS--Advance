function solve(input) {
    let output = input.reduce((ac, value) => {
        let lastEl = ac[ac.length - 1];
        if (value >= lastEl || lastEl === undefined) {
            ac.push(value)
        }
        return ac

    }, []);

    console.log(output.join('\n'))
}


solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])