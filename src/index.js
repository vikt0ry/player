import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      alksjuhalkjshd
      <audio
        controls
        autoPlay
        src="http://185.33.21.112:80/chilloutlounge_128"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
