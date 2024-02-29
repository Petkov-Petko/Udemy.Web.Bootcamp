import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import { notes } from "../notes";

export function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
