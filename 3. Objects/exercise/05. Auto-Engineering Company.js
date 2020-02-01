function solve(input) {
    let allCars = input.reduce((acc, object) => {

        let [carBrand, carModel, producedCar] = object.split(/\s+[|]\s+/);

        if (!acc[carBrand]) {
            acc[carBrand] = { [carModel]: producedCar }
            return acc;
        }
        if (!acc[carBrand][carModel]) {
            
            acc[carBrand][carModel] = producedCar
            return acc;
        }
        if (acc[carBrand][carModel]) {
            acc[carBrand][carModel] =+acc[carBrand][carModel] +Number(producedCar)
            return acc;
        }
        return acc;
    }, {})

    for (let key in allCars) {
        let element = Object.entries(allCars[key]);
        console.log(key)
        for (let final of element) {
            console.log(`###${final.join(' -> ')}`)
        }
    }
}

solve([
    
    'Mini | Clubman | 20000',
    //'Mini | Convertible | 1000',
   // 'Mercedes-Benz | 60PS | 3000',
   // 'Hyunday | Elantra GT | 20000',
   // 'Mini | Countryman | 100',
   // 'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000'
   // 'Mercedes-Benz | W163 | 200'
  ]
  
)