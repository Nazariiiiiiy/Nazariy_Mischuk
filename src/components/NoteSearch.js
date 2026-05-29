import { useContext } from 'react';
import NoteContext from '../context/NoteContext';

function NoteSearch() {
  const { search, setSearch } = useContext(NoteContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default NoteSearch;