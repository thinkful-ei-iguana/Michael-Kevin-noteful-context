import React from "react";
import Notes from "./Notes";
import Folders from "./Folders";
import Context from '../Context';

export default class HomePage extends React.Component {
  static contextType = Context;

  render() {
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
}
