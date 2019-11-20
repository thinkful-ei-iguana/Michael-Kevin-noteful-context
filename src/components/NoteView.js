import React from "react";
import NotFound from "./NotFound";
import Note from "./Note";

export default function NoteView(props) {
  if (!props.notes) {
    return <NotFound />;
  } else {
    const folderId = props.notes.folderId;
    const folderMatch = props.folders.find(folder => folder.id === folderId);
    return (
      <div id="wrapper">
        <section>
          <button onClick={() => props.history.goBack()}>Back</button>
          <h4>{folderMatch.name}</h4>
        </section>
        <main>
          <Note
            name={props.notes.name}
            key={props.notes.id}
            modified={props.notes.modified}
            id={props.notes.id}
          />
          <p>{props.notes.content}</p>
        </main>
      </div>
    );
  }
}
