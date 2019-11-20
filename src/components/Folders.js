import React from "react";
import Folder from "./Folder";

export default function Folders(props) {
  return (
    <div className="Folders">
      {props.folders.map(folder => {
        return (
          <Folder
            key={folder.id}
            id={folder.id}
            name={folder.name}
            folderClick={props.folderClick}
          />
        );
      })}
      <button>Add new folder</button>
    </div>
  );
}
