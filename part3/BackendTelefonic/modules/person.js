const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    number: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function(v) {
                return /^\d{2,3}-\d+$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    }
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