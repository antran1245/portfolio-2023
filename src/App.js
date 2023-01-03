import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './App.css';


function App() {
  const cursor = useRef(null)

  const cursorMovement = (e) => {
      const mouseY = e.clientY
      const mouseX = e.clientX
      cursor.current.style.transform = `translate3d(${mouseX-20}px, ${mouseY-7}px, 0)`
  }

  useEffect(() => {
    window.addEventListener('mousemove', cursorMovement)
    return () => {
      window.addEventListener('mousemove', cursorMovement)
    }
  }, [])

  return (
    <Container fluid>
      <div ref={cursor} className='cursor'></div>
      <Navigation/>
      <Home/>
      <AboutMe/>
    </Container>
  );
}

export default App;
