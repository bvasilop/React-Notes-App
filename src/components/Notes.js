import React from 'react';

const Notes = ({ error, note, removeNote }) => {


	return (
		<div>
      {note.title.length === 0 &&
      <div class="ui pointing below prompt label">
      Please enter title  below
      </div>
      }
			<h2 className="item">
      {note.title}
      </h2>
		<ul>
			<li>
        {note.body.length === 0 &&
        <div class="ui pointing below prompt label">
        Please enter note contents below
        </div>
        }
        <p>
        {note.body}
        </p>
			</li>
		</ul>
		<button className="ui button" onClick={() => removeNote(note.title)}>remove</button>
	</div>
	)
}
export default Notes;
