import StudentForm from "../components/StudentForm";

function AddStudent() {
  const addStudent = (student) => {
    fetch(
      "http://localhost:3001/students",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify(student)
      }
    );
  };

  return (
    <div>
      <h2>Додати студента</h2>

      <StudentForm
        onAdd={addStudent}
      />
    </div>
  );
}

export default AddStudent;