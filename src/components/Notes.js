import React from "react";
import Note from "./Note";

export default function Notes(props) {
  return (
    <div>
      {props.notes.map(note => {
        return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} />;
      })}
      <button>Add new note</button>
    </div>
  );
}
