import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <div>
      <h3>
        {student.firstName} {student.lastName}
      </h3>

      <p>Група: {student.group}</p>

      <Link to={`/students/${student.id}`}>
        Детальніше
      </Link>

      <button onClick={() => onDelete(student.id)}>
        Видалити
      </button>

      <hr />
    </div>
  );
}

export default StudentCard;