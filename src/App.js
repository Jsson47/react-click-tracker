import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import bannerLogo from './img/banner-custom.png'
import { useState } from 'react';


function App() {

  const [numClick, setNumberClick] = useState(0);

  const handleClick = () => {
    setNumberClick (numClick + 1);
}

  const handleReset = () => {
    setNumberClick (0);
};

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='banner-logo'
          src={bannerLogo}
          alt='logo de fondo'/>
      </div>
      <div className='principal-container'>
        <Counter numberClick= {numClick} />
        <Button
          text="Click"
          esClickButton={true}
          operateClick={handleClick} />
        <Button
          text="reset"
          esClickButton={false}
          operateClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
