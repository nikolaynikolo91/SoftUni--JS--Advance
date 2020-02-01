function solve(input) {
    let sorted = input.sort((a, b) => {
        if (a.length - b.length > 0
        ) return 1;
        if (a.length - b.length < 0
        ) return -1;
        if (a.length - b.length == 0)
            if (a < b
            ) return -1;
        if (a > b
        ) return 1;
        return 0
    });

    for (const iterator of sorted) {
        console.log(iterator)
    }
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)