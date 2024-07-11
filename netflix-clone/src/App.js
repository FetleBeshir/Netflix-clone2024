import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Nav from "./Components/Nav/Nav";
import Row from "./Components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <Nav /> */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaryMovies}
      />
      {/* <Row title="Tv Show" fetchUrl={requests.fetchTvShow} /> */}
      <Footer />
    </div>
  );
}

export default App;
