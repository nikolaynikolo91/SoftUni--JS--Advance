function solve(input) {
    let arr = input.slice(0)

    arr.sort((a, b) => {
        if (a.length - b.length < 0
        ) return -1;
        if (a.length - b.length > 0
        ) return 1;
        if (a.length - b.length == 0
        )
            if (a < b
            ) return - 1;
            else if (a > b
            ) return 1;
        return 0;
    })

    console.log(arr.join('\n'))
}

solve(['Deny',
    'omen',
    'test',
    'Default'
])