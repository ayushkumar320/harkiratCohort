// Simple backend application for a student who is willing to join library.
// This application keeps a track of student's slot and fee
// We will use inmemory

import express from "express";
const app = express();

app.use(express.json());

var students = [
  {
    id: 1,
    name: "Ayush",
    slot: "morning",
    fee: "800",
  },
  {
    id: 2,
    name: "Priya",
    slot: "afternoon",
    fee: "900",
  }
];

// GET route where students can be fetched!
app.get("/", function(req, res){
  res.status(200).send(students);
});

// POST route to add a new student!
app.post('/', function(req, res){
  const newStudent = req.body;
  students.push(newStudent);
  res.json({
    message: "New student added!",
    studentName: newStudent.name,
  });
});

// PUT route to change the fee (add 500 to every member)
app.put("/", function(req, res){
  // Students.map() - here it will iterate through each object in the students array
  students = students.map(function(student) {
    student.fee = parseInt(student.fee) + 500;
    return student;
  });
  res.json({
    message: "Fees updated successfully!",
  });
});

// DELETE route to remove a student
app.delete("/", function(req, res){
  const studentId = req.query.id; // Get the student ID from the query parameters

  // Here filter will check for the student ID to remove the student
  students = students.filter(function(student){
    if((parseInt(student.id) != studentId)){
      return true; // Keep the student if the ID does not match
    }
  });
  res.json({
    message: "Student removed successfully!",
  });
});

app.listen(3000, function(){
  console.log(`Server is listening to http://localhost:${3000}`);
});