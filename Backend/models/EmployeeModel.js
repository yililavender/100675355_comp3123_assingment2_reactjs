import mongoose from "mongoose";

const Employee = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
        lowercase: true
    },
    salary: {
        type: Number,
        default: 0.0,
        validate(value) {
        if (value < 0.0) throw new Error("Negative Salary aren't real.");
        }
    }

})

export default mongoose.model('Employees', Employee);