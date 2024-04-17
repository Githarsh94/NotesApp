import React, { useState } from 'react';

function AddNoteForm({ onSave, onCancel }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    // Handle form submission
    const handleSave = () => {
        // Create a new note object
        const newNote = { title, text };
        // Call the onSave function passed as a prop
        onSave(newNote);
        // Reset the input fields
        setTitle('');
        setText('');
    };

    // Handle cancel action
    const handleCancel = () => {
        console.log("child");
        // Reset the input fields
        setTitle('');
        setText('');
        // Call the onCancel function passed as a prop
        onCancel();
    };

    return (
        <div className="add-note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="button-container">
                <button className="save-button" onClick={handleSave}>Save</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default AddNoteForm;
