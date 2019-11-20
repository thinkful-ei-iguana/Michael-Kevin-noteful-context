import React, { Component } from "react";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import NoteView from "./components/NoteView";
import FolderView from "./components/FolderView";
import { Route, Switch, Link } from "react-router-dom";
import Context from "./Context";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => {
      if (!response.ok) {
        console.log('An error occured');
        throw new Error('This is a problem');
        } return response;
        })
      .then(response => response.json())
      .then(data => {
        const APIfolders = data;
        this.setState({folders: APIfolders});
      })
      .catch(err => {
        console.log('Handling error', err);
      })
    fetch('http://localhost:9090/notes')
      .then(response => {
      if (!response.ok) {
        console.log('An error occured');
        throw new Error('This is a problem');
        } return response;
        })
      .then(response => response.json())
      .then(data => {
        const APInotes = data;
        this.setState({notes: APInotes});
      })
      .catch(err => {
        console.log('Handling error', err);
      })
    }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes
    };
    console.log(this.state)
    return (
      <Context.Provider value={contextValue}>
        <div>
          <header>
            <Link to="/">
              <h2>Noteful</h2>
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/folder/:folderId" component={FolderView} />

            <Route path="/notes/:noteId" component={NoteView} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default App;