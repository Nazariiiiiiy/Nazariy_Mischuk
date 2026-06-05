import { useState } from "react";

function StudentForm({ onAdd }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [group, setGroup] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !group ||
      !age
    ) {
      alert("Заповніть всі поля");
      return;
    }

    onAdd({
      firstName,
      lastName,
      group,
      age
    });

    setFirstName("");
    setLastName("");
    setGroup("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ім'я"
        value={firstName}
        onChange={(e) =>
          setFirstName(e.target.value)
        }
      />

      <br />

      <input
        placeholder="Прізвище"
        value={lastName}
        onChange={(e) =>
          setLastName(e.target.value)
        }
      />

      <br />

      <input
        placeholder="Група"
        value={group}
        onChange={(e) =>
          setGroup(e.target.value)
        }
      />

      <br />

      <input
        placeholder="Вік"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
      />

      <br />

      <button>
        Додати студента
      </button>
    </form>
  );
}

export default StudentForm;