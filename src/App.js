import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './/pages/Contact';

function App() {
  return (
    <HashRouter>
      <header>
        <nav>
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
