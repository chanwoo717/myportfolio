import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './/pages/Contact';
import './css/index.scss';

function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <div>
            <Link to = "/" className='logo'><img src = './img/cw-logo.png' alt = ''/></Link>
          </div>
            <Link to = "/">HOME</Link>
            <Link to = "/projects">PROJECTS</Link>
            <Link to = "/contact">CONTACT</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/projects" element={<Projects/>}/>
          <Route path = "/contact" element={<Contact/>}/>
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
