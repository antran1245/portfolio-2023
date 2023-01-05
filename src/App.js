import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {

  return (
    <Container fluid>
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
