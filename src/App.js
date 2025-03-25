import './App.css';
import logo from './img/banner.jpg'


function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <image 
          className='code-logo'
          src={logo}
          alt='logo de fondo'/>
      </div>
    </div>
  );
}

export default App;
