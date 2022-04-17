
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import Checkout from './components/Home/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
