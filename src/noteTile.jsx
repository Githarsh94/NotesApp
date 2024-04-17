import React from "react";

const NoteTile = props => {
    const { notes, onDelete } = props;

    return (
        <div className="pyara-div">
            <div className="left-section">
                <div className="title">{notes.title}</div>
                <div className="time">{notes.text}</div>
            </div>
            <div className="right-section">
                <button
                    className="delete-button"
                    onClick={() => onDelete(notes)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteTile;
