import "./StudentList.css";

function StudentList({ students }) {
  return (
    <div className="student-list-container">
      <h2>Registered Students</h2>
      {students.length === 0 ? (
        <div className="no-students">
          <p>No students registered yet. Start by adding one!</p>
        </div>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div key={student._id} className="student-card">
              <div className="student-card-header">
                <h3>{student.name}</h3>
              </div>
              <div className="student-card-body">
                <p>
                  <span className="label">Age:</span>
                  <span className="value">{student.age}</span>
                </p>
                <p>
                  <span className="label">Course:</span>
                  <span className="value">{student.course}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
