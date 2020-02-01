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
        setName: setName,
        getName: getName,
        grow: grow,
        howOldIs: howOld
    };

})();

console.log(person.getName())
person.setName('Kim')
console.log(person.getName())
person.setName('Kimmi')
console.log(person.getName())
