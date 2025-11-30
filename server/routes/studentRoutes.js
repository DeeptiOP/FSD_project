// routes + controller

const Student = require("../models/Student");
const express = require("express");
const router = express.Router();

router.post("/", async(req, res) =>{
    const {name, age, course} = req.body;

    try{
        const newStudent = new Student({
            name,
            age,
            course
        })
        const student = await newStudent.save();
        res.json(student);
    } catch(error){
        res.status(500).send("server error");
    }
})


router.get("/", async(req, res) =>{
    try{
        const students = await Student.find() // to find the students
        res.json(students);
        } catch(error){
        res.status(500).send("server error");
    }
})

module.exports = router;