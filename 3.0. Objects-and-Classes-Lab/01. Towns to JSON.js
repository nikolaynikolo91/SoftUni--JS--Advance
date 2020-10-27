function solve(input) {
    let townArr = [];

    let firstLine = input.slice(0, 1)

    for (let line of input.slice(1)) {
        let [empty, town, lat, lng] = line.split(/\s*\|\s*/);
        let townObj = {
            Town: town,
            Latitude: Number(lat).toFixed(2),
            Longitude: Number(lng).toFixed(2)
        }
      townArr.push(townObj);
    }
    let toJson = JSON.stringify(townArr)
    console.log(toJson)
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)