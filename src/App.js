import logo from './logo.svg';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>How many days since Michigan has beaten Ohio State?</h1>
      <p id="days_since"><span id="days_count">{Math.floor((new Date().getTime() - new Date("11/26/2011").getTime()) / (1000 * 3600 * 24))}</span> days.</p>
      <p id="phrase">It's <span id="time">{new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York',
                                                                                    hour: '2-digit',
                                                                                    minute: '2-digit'
                                                                                  })}</span> in Columbus, and Michigan still sucks.</p>
      <Footer />
    </div>
  );
}

export default App;
