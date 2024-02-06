import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Info from './pages/Info';
import './css/index.scss';
import json from './data.json';


function App() {

  const data = json;
  const project = data.projects;
  const eachProj = data.eachContent;

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
          <Route path = "/" element={<Home data = {data}/>}/>
          <Route path = "/projects" element={<Projects project = {project}/>}/>
          <Route path = "/contact" element={<Contact contact = {data.contact}/>}/>
          <Route path = "/projects/info" element = {<Info data = {eachProj}/>}/>
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
