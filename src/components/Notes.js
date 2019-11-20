import React from "react";
import Note from "./Note";
import Context from '../Context'

export default  class Notes extends React.Component {
  static contextType=Context
  render() {
    return (
      <div>
        {this.context.notes.map(note => {
          return <Note key={note.id} id={note.id} name={note.name} modified={note.modified} />;
        })}
        <button>Add new note</button>
      </div>
    );
  }
}
