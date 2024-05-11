import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
  

  return (
    <div className="App">

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='64,44,40'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "img",
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>

      <Home></Home>
      
    </div>
  );
}

export default App;
