import logo from './logo.svg';
import './App.css';
import Navigation from './nav/Navigation';
import Home from './home/Home';
import Topdest from './seccongpage/Topdest';
import Whyus from './thirdpage/Whyus';
import Booking from './fourthpage/Booking';
import Service from './service/service';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Home/>
     <Topdest/>
     <Service/>
     <Booking/>
     <Whyus/>
    </div>
  );
}

export default App;
