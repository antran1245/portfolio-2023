import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';


function App() {
  const cursor = useRef(null)

  const cursorMovement = (e) => {
    const mouseY = e.pageY
    const mouseX = e.pageX
    cursor.current.style.transform = `translate3d(${mouseX - 15}px, ${mouseY}px, 0)`
  }
  useEffect(() => {
    window.addEventListener('mousemove', cursorMovement)
    return () => {
      window.removeEventListener('mousemove', cursorMovement)
    }
  }, [])

  return (
    <Container fluid>
      <div ref={cursor} className='cursor'></div>
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
