
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import About from './Pages/About';
import Members from './Pages/Members';
import Achievents from './Pages/Achievents';
import Contact from './Pages/Contact';
import Memories from './Pages/Memories';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/achievements' element={<Achievents/>}/>
        <Route path='/memories' element={<Memories/>}/>
        <Route path='/contact' element={<Contact/>}/>

        </Routes>
    </div>
  );
}

export default App;
