import { useState } from 'react';
import NoteTile from './noteTile';
import Header from './Header';
import AddNoteForm from './addNote';

function App() {
  const obj = [];
  const [notes, setNotes] = useState(obj);
  const [flag, setFlag] = useState(false);
  // Check if the notes object has any keys (properties)
  const isNotesEmpty = Object.keys(notes).length === 0;
  const handleSaveNote = (newNote) => {
    // Add the new note to the existing notes list
    setNotes([...notes, newNote]);
    setFlag(false);
  };
  const PlusClick = () => {
    setFlag(true);
  }

  const handleDelete = note => {
    const newNotes = notes.filter(n => n.title !== note.title);
    console.log(newNotes);
    setNotes(newNotes);
  }

  const noteCancel = () => {
    console.log("enteres");
    setFlag(false);
  }
  var lastIndex = notes.length - 1;
  return (
    <div className="App">
      <Header onPlusClick={PlusClick} />
      {!isNotesEmpty && notes.map(note => {
        return <NoteTile notes={note} key={lastIndex--} onDelete={handleDelete} />
      })}
      {flag && < AddNoteForm onSave={handleSaveNote} onCancel={noteCancel} />}
    </div>
  );
}

export default App;
