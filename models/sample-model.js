const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    occupation: {
        type: String
    }
});

module.exports = Sample = mongoose.model("sample", SampleSchema);