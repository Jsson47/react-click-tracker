import './App.css';
import Button from './components/Button';
import bannerLogo from './img/banner-custom.png'


function App() {

  const handleClick = (esClickButton) => {
    console.log("Click");
}

  const handleReset = (esClickButton) => {
    console.log("Reset"); 
}

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='banner-logo'
          src={bannerLogo}
          alt='logo de fondo'/>
      </div>
      <div className='principal-container'>
          <Button
            text="Click"
            esClickButton={true}
            operateClick={handleClick}/>
          <Button
          text="reset"
          esClickButton={false}
          operateClick={handleReset}/>
      </div>
    </div>
  );
}

export default App;
