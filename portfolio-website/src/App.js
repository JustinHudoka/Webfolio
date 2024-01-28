import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navbar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';


function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* paritcles js */}
      {renderParticleJsInHomePage && (
        <Particles id='particles' options={particles} init={handleInit}/>
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
