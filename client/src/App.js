import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
      <Homepage />
      </div>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}

export default App;
