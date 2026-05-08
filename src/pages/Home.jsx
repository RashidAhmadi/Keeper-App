import React from "react";
import { useEffect } from "react";
import Note from "../components/Note";
import notes from "../notes";


function Home() {
    useEffect(() => {
        document.body.className = "home-body";
    }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to Keeper</h1>
      {notes.map(note=> <Note 
        key={note.key}
        title={note.title}
        content={note.content}
    />
)}
    </div>
  );
}

export default Home;