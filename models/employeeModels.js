const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    phoneNumber:{
        type: Number,
        unique: true
    },
    department: String,
    salary : {
        type: Number,
        required: true
    }
})
const EmployeeModel = mongoose.model('empmodel',EmployeeSchema)
module.exports = EmployeeModel;