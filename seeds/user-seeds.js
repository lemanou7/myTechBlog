const { User } = require('../models');

const userData = [
    {
        username: "piere_bool",
        github: "piere_bool",
        email: "piere_bool@gmail.com",
        password: "pass1234"
    },
    {
        username: "bello_belo",
        github: "bello_belo",
        email: "bello_belo@gmail.com",
        password: "pass1234"
    },
    {
        username: "lemanou7",
        github: "lemanou7",
        email: "lemanou7@gmail.com",
        password: "pass1234"
    },
    {
        username: "John_lee",
        github: "John_lee",
        email: "John_lee@yahoo.com",
        password: "pass1234"
    },
    {
        username: "paulby",
        github: "paulby",
        email: "paulby@aol.com",
        password: "pass1234"
    },
    {
        username: "jossbo",
        github: "jossbo",
        email: "jossbo@yahoo.fr",
        password: "pass1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;