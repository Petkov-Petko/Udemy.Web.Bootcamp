import React from "react";
import { notes } from "../notes";
export function Note() {
  return notes.map((el) => {
    return (
      <div className="note" key={el.key}>   {/* We always need a key to don't get and error in the browser. */}
        <h1>{el.title}</h1>
        <p>{el.content}</p>
      </div>
    );
  });
}

