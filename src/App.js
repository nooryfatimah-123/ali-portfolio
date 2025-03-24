import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import NavBar from './Components/NavBar';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Project';
import { Contact } from './Components/ContactForm';
import { DownloadResume } from './Components/ResumeSrction';
import { Footer } from './Components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <DownloadResume/>
      <Footer/>
      
          
    </div>
  );
}

export default App;
