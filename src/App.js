import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div>
      {show === false && (
        <button className="Start-button" onClick={handleClick}>
          Start Test
        </button>
      )}
      {show && <Quiz />}
    </div>
  );
}

export default App;
