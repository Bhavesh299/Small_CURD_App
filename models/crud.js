const mongoose = require('mongoose') ;
const schema = mongoose.Schema ;

let Schema = new schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    }
}) ;

module.exports = mongoose.model("Student",Schema);