import React, { useState, useEffect } from 'react';
import Notes from './Notes';

const NoteApp = ({ appName, subHeader, subHeader2, placeholder }) => {

  const notesData = JSON.parse(localStorage.getItem('notes')); // using localStorage to save data

  const [notes, setNotes] = useState( notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');



    useEffect(() => { // used in place of lifecycle methods
      localStorage.setItem('notes', JSON.stringify(notes))
  })

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  };

    const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  };


  return (
    <div className="ui raised very padded text container segment">
      <span className="ui center aligned icon header">
        <i className="pencil alternate icon"></i>
        <p>{appName}</p>
      </span>
      <h1 className="ui center aligned header">
			{subHeader}
      </h1>
			<div className="ui segment">
        {notes.length === 0 && <strong>{placeholder}</strong>}
        {notes.map((note) =>(
				<Notes key={title} note={note} removeNote={removeNote}/>
        ))}
			</div>
			<div className="ui segment">
        <h2 className="ui center aligned header">{subHeader2}</h2>
        <form className="ui form" onSubmit={addNote}>
				<label>
					Title
          {/* <div class="ui pointing below prompt label">Please enter your note title here</div> */}
					<input className="ui input focus" value={title} name="title" type="text" placeholder="enter title of note" onChange={(e) => setTitle(e.target.value.trim())} />
				</label>
				<label>
					Body
          {/* <div class="ui pointing below prompt label">Please enter your note contents here</div> */}
					<textarea className="ui fluid action input" value={body} placeholder="enter contents of note" onChange={(e) => setBody(e.target.value.trim())} />
				</label>
          <button className="ui button">add note</button>
        </form>





		</div>
  </div>
  )
}

NoteApp.defaultProps = {
    placeholder: 'Add some notes!',
    appName: 'React Note App',
    subHeader: 'Notes',
    subHeader2: 'Add Note'
}

export default NoteApp;
