import React from "react";
import { Link } from "react-router-dom";

export default function Note(props) {
  let readableDate = new Date(props.modified);
  readableDate = readableDate.toString();

  return (
    <Link to={`/notes/${props.id}`}>
      <div className="note" id={props.id}>
        <h3 id={props.id}>{props.name}</h3>
        <p>{readableDate}</p>
      </div>
    </Link>
  );
}
