import React from "react";
import Notes from "./Notes";
import Folders from "./Folders";

export default function HomePage(props) {
  const { folders, notes } = props;
  return (
    <div id="wrapper">
      <section>
        <Folders folders={folders} folderClick={props.folderClick} />
      </section>
      <main>
        <Notes notes={notes} noteClick={props.noteClick} />
      </main>
    </div>
  );
}
