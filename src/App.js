import React, { Component } from "react";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import NoteView from "./components/NoteView";
import FolderView from "./components/FolderView";
import { Route, Switch, Link } from "react-router-dom";
import Store from "./components/dummy-store";

import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: Store.folders,
      notes: Store.notes,
      folderId: ""
    };
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <h2>Noteful</h2>
          </Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                folders={this.state.folders}
                notes={this.state.notes}
                folderClick={this.folderClick}
                noteClick={this.noteClick}
              />
            )}
          />

          <Route
            path="/folder/:folderId"
            render={routeProps => (
              <FolderView
                folders={this.state.folders}
                notes={this.state.notes.filter(
                  note => note.folderId === routeProps.match.params.folderId
                )}
                {...routeProps}
              />
            )}
          />

          <Route
            path="/notes/:noteId"
            render={routeProps => (
              <NoteView
                notes={this.state.notes.find(
                  note => note.id === routeProps.match.params.noteId
                )}
                folders={this.state.folders}
                {...routeProps}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
