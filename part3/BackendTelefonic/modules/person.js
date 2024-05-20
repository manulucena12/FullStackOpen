const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    number: String
})

const Person = mongoose.model('person', personSchema)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = Person