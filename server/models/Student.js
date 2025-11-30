const mongoose = require("mongoose");

//define the schema for the student

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    course: {type: String, required: true}
})

module.exports = mongoose.model("student", studentSchema);

