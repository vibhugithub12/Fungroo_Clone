import './App.css';
import Navbarr from './components/Navbarr';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (

    <div className="App">
      <div className='topNav'>
        <Navbarr/>
      </div>  

      <div className='pageOne'>
        <Page1/>
      </div>

      <div className='pageTwo'>
        <Page2/>
      </div>

      <div className='pageThree'>
        <Page3/>
      </div>
    </div>
  );
}

export default App;
