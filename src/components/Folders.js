import React from "react";
import Folder from "./Folder";
import Context from "../Context";

export default class Folders extends React.Component {
  static contextType = Context;
  render() {
    // console.log(this.props);
    // const folderId = this.props.match.params.folderId;
    // const newNotes = this.context.notes.filter(
    //   note => note.folderId === folderId
    // );
    return (
      <div className="Folders">
        {this.context.folders.map(folder => {
          return (
            <Folder
              key={folder.id}
              id={folder.id}
              name={folder.name}
              history={this.props.history}
              match={this.props.match}
            />
          );
        })}
        <button>Add new folder</button>
      </div>
    );
  }
}
