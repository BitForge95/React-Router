import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </>
  );
}

export default App;
