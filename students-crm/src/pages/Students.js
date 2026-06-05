import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";

function Students() {
  const [students, setStudents] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    fetch(
      "http://localhost:3001/students"
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch(() =>
        setError(
          "Помилка завантаження"
        )
      )
      .finally(() =>
        setLoading(false)
      );
  }, []);

  const deleteStudent = (id) => {
    fetch(
      `http://localhost:3001/students/${id}`,
      {
        method: "DELETE"
      }
    ).then(() => {
      setStudents(
        students.filter(
          (s) => s.id !== id
        )
      );
    });
  };

  if (loading)
    return <h2>Завантаження...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Список студентів</h2>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={deleteStudent}
        />
      ))}
    </div>
  );
}

export default Students;