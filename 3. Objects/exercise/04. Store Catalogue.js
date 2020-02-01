function cat(data) {
    let parsedData = data.reduce((acc, producLine) => {
        let [name, price] = producLine.split(':').map((x) => x.trim());
        

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], producLine]
        } else {
            acc[name[0]] = [producLine]
        }
        console.log(acc[name[0]])
        debugger;
        return acc;
    }, {})


    // Object.keys(parsedData).sort().map((x) => {
    //     console.log(x)
    //     parsedData[x].sort().map((value) => {
    //         console.log(`  ${value.split(' : ').join(': ')}`)
    //     })
    // })
}

cat(['Appricot : 20.4',
'Appricot : 30',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])