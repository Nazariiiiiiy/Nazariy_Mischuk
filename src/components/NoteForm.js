import { useState, useContext, useRef } from 'react';
import NoteContext from '../context/NoteContext';

function NoteForm() {
  const { addNote } = useContext(NoteContext);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (title === '' || text === '') {
      alert('Заповніть поля');
      return;
    }

    addNote(title, text);

    setTitle('');
    setText('');

    titleRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={titleRef}
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Текст нотатки"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button type="submit">
        Додати
      </button>
    </form>
  );
}

export default NoteForm;