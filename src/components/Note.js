import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context";

export default class Note extends React.Component {
  static contextType = Context;
  render() {
    let readableDate = new Date(this.props.modified);
    readableDate = readableDate.toString();

    return (
      <Link to={`/notes/${this.props.id}`}>
        <div id={this.props.id}>
          <h3 id={this.props.id}>{this.props.name}</h3>
          <p>{readableDate}</p>
        </div>
      </Link>
    );
  }
}
