import React from "react";
import Folders from "./Folders";
import NotFound from "./NotFound";
import Notes from "./Notes";

export default function FolderView(props) {
  if (!props.folders) {
    return <NotFound />;
  } else {
    return (
      <div id="wrapper">
        <section>
          <Folders folders={props.folders} />
        </section>
        <main>
          <Notes notes={props.notes} />
        </main>
      </div>
    );
  }
}
