/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes';

const NoteApp = ({ appName, subHeader, subHeader2, placeholder }) => {
  const notesData = JSON.parse(localStorage.getItem('notes')); // using localStorage to save data

  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    // used in place of lifecycle methods
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div className="ui raised very padded text container segment">
      <span className="ui center aligned icon header">
        <i className="pencil alternate icon"></i>
        <h1>{appName}</h1>
      </span>
      <h2 className="ui center aligned header">{subHeader}</h2>
      <div className="ui segment">
        {notes.length === 0 && <strong>{placeholder}</strong>}
        {notes.map(note => (
          <Notes key={title} note={note} removeNote={removeNote} />
        ))}
      </div>
      <div className="ui segment">
        <h2 className="ui center aligned header">{subHeader2}</h2>
        <form className="ui form" onSubmit={addNote}>
          <label htmlFor="title">
            Title
            <input
              id="title"
              className="ui input focus"
              value={title}
              name="ui title"
              type="text"
              placeholder="enter title of note"
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="body">
            Body
            <textarea
              id="body"
              className="ui fluid action input"
              value={body}
              placeholder="enter contents of note"
              onChange={e => setBody(e.target.value)}
            />
          </label>
          <button type="submit" className="ui button">
            add note
          </button>
        </form>
      </div>
    </div>
  );
};

NoteApp.defaultProps = {
  placeholder: 'Add some notes!',
  appName: 'React Note App',
  subHeader: 'Notes',
  subHeader2: 'Add Note',
};

NoteApp.propTypes = {
  appName: PropTypes.string,
  placeholder: PropTypes.string,
  subHeader: PropTypes.string,
  subHeader2: PropTypes.string,
};

export default NoteApp;
