import './App.css';
import bannerLogo from './img/banner-custom.png'


function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='banner-logo'
          src={bannerLogo}
          alt='logo de fondo'/>
      </div>
      <div className='principal-container'>
          
      </div>
    </div>
  );
}

export default App;
