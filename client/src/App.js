import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiUrl}/students`);
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [refresh]);

  const handleStudentAdded = () => {
    setRefresh(!refresh); // Trigger a refresh of the student list
  };

  return (
    <div className="App">
      <h1>Guvi Student Management System</h1>
      <div className="app-container">
        <StudentForm onStudentAdded={handleStudentAdded} />
        <StudentList students={students} />
      </div>
    </div>
  );
}

export default App;