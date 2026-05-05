import React from "react";
import { useEffect } from "react";
function Home() {
    useEffect(() => {
        document.body.className = "home-body";
    }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Welcome to Keeper</h1>
    </div>
  );
}

export default Home;