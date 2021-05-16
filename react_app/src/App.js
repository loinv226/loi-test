import logo from "./logo.svg";
import "./App.css";

function App() {
  function callFlutter() {
    // window.logout();
    alert("post direct");
    window.SEVI.postMessage("ok----");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={callFlutter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Call
        </a>
      </header>
    </div>
  );
}

export default App;
