import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ error, note, removeNote }) => (
  <div>
    {note.title.length === 0 && (
      <div className="ui pointing below prompt label">
        Please enter title below
      </div>
    )}
    <h2 className="item">{note.title}</h2>
    <ul>
      <li>
        {note.body.length === 0 && (
          <div className="ui pointing below prompt label">
            Please enter note contents below
          </div>
        )}
        <p>{note.body}</p>
      </li>
    </ul>
    <button
      type="submit"
      className="ui button"
      onClick={() => removeNote(note.title)}
    >
      remove
    </button>
  </div>
);

Notes.propTypes = {
  error: PropTypes.object,
  note: PropTypes.object,
  removeNote: PropTypes.func,
};
export default Notes;
