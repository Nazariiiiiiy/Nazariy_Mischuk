import {
  useParams
} from "react-router-dom";
import {
  useEffect,
  useState
} from "react";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] =
    useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:3001/students/${id}`
    )
      .then((res) => res.json())
      .then((data) =>
        setStudent(data)
      );
  }, [id]);

  if (!student)
    return <h2>Завантаження...</h2>;

  return (
    <div>
      <h2>
        {student.firstName}
      </h2>

      <p>
        Прізвище:
        {student.lastName}
      </p>

      <p>
        Група:
        {student.group}
      </p>

      <p>
        Вік:
        {student.age}
      </p>
    </div>
  );
}

export default StudentDetails;