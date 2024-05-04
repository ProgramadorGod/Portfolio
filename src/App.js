import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });

  return (
    <div className="App">
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>

      <Home>
        

      </Home>
    </div>
  );
}

export default App;
