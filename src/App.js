import React from "react";
import Row from "./Row";
import { requestEndPoints } from "./endpoints";
import Banner from './Banner'
import Navbar from './Navbar'
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requestEndPoints.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requestEndPoints.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requestEndPoints.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requestEndPoints.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requestEndPoints.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requestEndPoints.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requestEndPoints.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestEndPoints.fetchDocumentaries} />
    </div>
  );
}

export default App;
