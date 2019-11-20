import React from "react";
import Folders from "./Folders";
import NotFound from "./NotFound";
import Notes from "./Notes";

export default function FolderView() {
    return (
      <div id="wrapper">
        <section>
          <Folders />
        </section>
        <main>
          <Notes />
        </main>
      </div>
    );
  }