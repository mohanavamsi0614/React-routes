import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import kal from './assets/kal.png'
import User from './User';
function App() {
  return (
      <>
       <nav>
        <NavLink to='/'><img src={kal}/></NavLink>
        <NavLink to='/about'><p>About</p></NavLink>
        <NavLink to="/Contact"><p>Contact</p></NavLink>
        <NavLink to="/User/Admin"><p>User</p></NavLink>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/User/:userid' element={<User/>}/>
        </Routes>

    </>
  );
}

export default App;
