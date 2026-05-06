import React from "react";
import { useEffect } from "react";
import Note from "../components/Note";
function Home() {
    useEffect(() => {
        document.body.className = "home-body";
    }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to Keeper</h1>
      <Note/>
    </div>
  );
}

export default Home;