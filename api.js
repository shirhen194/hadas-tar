const express = require('express')
const router = express.Router()


class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

dogs=[new Dog('Cool',4),new Dog('Mike',0.5),new Dog('Jhonny',5),new Dog('Haver',7)]

router.get('/dogs', function(req, res){

      res.send(dogs)

});




module.exports = router