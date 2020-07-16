import React from "react";
import Row from "./Row";
import { requestEndPoints } from "./endpoints";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Netflix Clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requestEndPoints.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requestEndPoints.fetchTrending} />
    </div>
  );
}

export default App;
