import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onStudentAdded }) {
  //create the state variable
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // to handle the values in the input field we have to create handleChange function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // a function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default behaviour of the form submission

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (res.ok) {
        await res.json();

        //clear form
        setStudent({
          name: "",
          age: "",
          course: "",
        });
        setMessage("✓ Student registered successfully!");
        setMessageType("success");
        setTimeout(() => setMessage(""), 3000);
        
        // Notify parent component to refresh the list
        if (onStudentAdded) {
          onStudentAdded();
        }
      } else {
        setMessage("✗ Failed to submit the form. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.log("error");
      setMessage("✗ An error occurred. Please check your connection.");
      setMessageType("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="student-form">
        <h2>Student Registration</h2>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={student.name}
            name="name"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={student.age}
            name="age"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            placeholder="Enter your course name"
            value={student.course}
            name="course"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register Student</button>

        {message && (
          <div className={`${messageType}-message`}>
            {message}
          </div>
        )}
      </form>
    </>
  );
}

export default StudentForm;
