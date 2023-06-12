const express = require('express');
const EmployeeModel = require('../models/employeeModels');
const router = express.Router()

router.get('/', async(req,res)=>{
    try{
        const emp = await EmployeeModel.find();
        res.status(201).json(emp)
    }
    catch (err) {
        res.send(500).json({message:err})
    }
})

router.post('/',async (req,res)=>{
    const employeedata = new EmployeeModel({
        name: req.body.name,
        Department: req.body.department,
        email: req.body.email,
        phoneNumber:req.body.phoneNumber,
        salary:req.body.salary
      });
    
    try{
        const savedData = await employeedata.save()
        res.status(201).json(savedData)
    }
    catch(err){
        res.status(500).json({message: err})
    }
})



router.get('/:id', getDetails, (req, res) => {
    res.status(200).json(res.student);
  });


async function getDetails(req, res, next) {
    try {
      const emp = await EmployeeModel.findById(req.params.id);
      if (!emp) {
        return res.status(404).json({ message: `Cannot find user with id ${req.params.id}` });
      }
      next();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

module.exports = router