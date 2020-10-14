function solve(input) {
    let initialNumber = 0;
    let output = [];

    for (let line of input) {
        initialNumber++;
        if (line == 'add') {
            output.push(initialNumber)

        } else if (line == 'remove') {
            output.pop();

        }
    }
if(output.length === 0){
    console.log('Empty')
} else {
    for (let line of output) {
        
        console.log(line)
    }
}
}
solve (['remove',
    'remove',
    'remove'])

// solve(['add',
//     'add',
//     'remove',
//     'add',
//     'add'])