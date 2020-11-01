var person = (function () {
    var age = 0;
    var name;
function setName (newName) {
    if(newName.length > 3){
        name = newName;
    }
}

function getName () {
    return name;
}
    function grow() {
        if (age > 100) {
            reborn()
        }
        age++;
        return age;
    }

    function howOld() {
        return age;
    }

    function reborn() {
        age = 0;
    }

    return {
        name: name,
        grow: grow,
        howOldIs: howOld
    };

})();

person.name = 'Gosho';
console.log(person.howOldIs())
console.log(person.grow())
console.log(person.name)

var person2 = Object.create(person)
person2.name = 'Pesho'
console.log(person2.name, person.name)