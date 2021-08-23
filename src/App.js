import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>How many days since Michigan has beaten Ohio State?</h1>
      <p id="days_since"><span id="days_count">{Math.floor((new Date().getTime() - new Date("11/26/2011").getTime()) / (1000 * 3600 * 24))}</span> days.</p>
      <p id="phrase">It's <span id="time">{new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York',
                                                                                    hour: '2-digit',
                                                                                    minute: '2-digit'
                                                                                  })}</span> in Columbus, and Michigan still sucks.</p>
      <footer className="App-footer">
        an <a href="https://twitter.com/jschairb"
              target="_blank"
              rel="noopener noreferrer">@<span class="danzig">jschairb</span></a> joint
      </footer>
    </div>
  );
}

export default App;
