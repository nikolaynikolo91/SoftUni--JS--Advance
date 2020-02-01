function solve(input) {

    let data = input.reduce((db, parseData, index, ) => {
        let [systemName, componentName, subcomponentName, counter] = parseData.split(/\s+\|\s+/)

        if (!db[systemName]) {
            db[systemName] = { [componentName]: [subcomponentName] }
            return db;
        }
        if (!db[systemName][componentName]) {
            db[systemName][componentName] = [subcomponentName];
            return db;
        }
        db[systemName][componentName] = [...db[systemName][componentName], subcomponentName]
        return db
    }, {})
    //console.log(data)
    // let beforeSort = Object.keys(data);
    let sorted = Object.keys(data).sort((a, b) => {
        let first = Object.keys(data[a]).length;
        let second = Object.keys(data[b]).length
        //console.log(first)
        //console.log(second)
        if (first - second > 0
        ) return -1;
        if (first - second < 0
        ) return 1;

        return a.localeCompare(b)

    



        //     //return data;
         });

//console.log(sorted)
        for (let iterator of sorted) {

        console.log(iterator);
        console.log(data[iterator])
        //    for (let secondIterator of Object.keys(data[iterator])) {
        //          console.log(`|||${secondIterator}`)
        //          console.log(`||||||${data[iterator][secondIterator].join('\n||||||')}`)
        //      }
    }
    }


solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']

)