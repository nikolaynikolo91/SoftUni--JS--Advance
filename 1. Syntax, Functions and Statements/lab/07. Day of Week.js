function solve (day) {

    let obj = {
        'Monday':1,
        'Tuesday':2,
        'Wednesday':3,
        'Thursday':4,
        'Friday':5,
        'Saturday':6,
        'Sunday': 7
    }

   if(obj.hasOwnProperty(day)) {
       console.log(obj[day])
   } else {
       console.log(`error`)
   }
}

solve ('Monday')