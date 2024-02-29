import React from "react";
import { notes } from "../notes";
export function Note() {
  return notes.map((el) => {
    return (
      <div className="note">
        <h1>{el.title}</h1>
        <p>{el.content}</p>
      </div>
    );
  });
}


