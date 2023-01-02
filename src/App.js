import { Container } from 'react-bootstrap';
import Home from './components/Home';
import './App.css';
import './sass/background.scss'
import { useEffect, useRef } from 'react';

function App() {
  const cursor = useRef(null)

  const cursorMovement = (e) => {
      const mouseY = e.clientY
      const mouseX = e.clientX
      cursor.current.style.transform = `translate3d(${mouseX-30}px, ${mouseY-15}px, 0)`
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
      <Home/>
    </Container>
  );
}

export default App;
