const express = require('express')
const router = express.Router()
const path = require('path')
data = {}
data.employees = require('../../data/employees.json')
router.route('/')
      .get((req,res)=>{
        res.json(data.employees)
      })
      .post((req,res)=>{
        res.json({
            "FirstName":req.body.firstname,
            "LastName":req.body.lastname
        })
      })
      .put((req,res)=>{
        res.json({
            "FirstName":req.body.firstname,
            "LastName":req.body.lastname
        })
      })
      .delete((req,res)=>{
        res.json({"id":req.body.id})
      })
router.route('/:id')
      .get((req,res)=>{
        res.json({"id":req.params.id})
      })
module.exports=router

// const express = require('express')
// const router = express.Router()
// const path = require('path')
// const employeesController = require('../../controllers/employeeController')
// const { route } = require('../subdir')

// router.route('/')
//       .get(employeesController.getAllEmployees)
//       .post(employeesController.createNewEmployee)
//       .put(employeesController.updateEmployee)
//       .delete(employeesController.deleteEmployee)
// router.route('/:id')
//       .get(employeesController.getEmployee)
// module.exports=router
