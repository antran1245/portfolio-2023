import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faPython, faHtml5, faCss3Alt, faSass, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import '../sass/aboutme.scss'

export default function AboutMe() {
  return(
    <section id="aboutme">
      <Container>
        <Row>
          <Col sm={6}>
            <h1>About Me</h1>
            <p>I enjoy creating websites, applications, and features.</p>
            <p>I don't give up when presented a <span>challenging task</span>.</p>
            <p>The challenge of not knowing does not stop me from making because I am an <span>active learner</span>.</p>
            <p>I enjoy learning, because I know that the more I learn, the more I can make.</p>
          </Col>
          <Col sm={{offset: 1}}>
            <h2>Skills</h2>
            <Row>
              <p><span><FontAwesomeIcon icon={faJsSquare} size="lg"/></span> &nbsp; JavaScript (Node.js, TypeScript, jQuery)</p>
              <Col>
                <p><span><FontAwesomeIcon icon={faHtml5} size="lg"/></span> &nbsp; HTML5</p>
                <p><span><FontAwesomeIcon icon={faCss3Alt} size="lg"/></span> &nbsp; CSS</p>
                <p><span><FontAwesomeIcon icon={faReact} size="lg"/></span> &nbsp; React</p>
              </Col>
              <Col>
                <p><span><FontAwesomeIcon icon={faPython} size="lg"/></span> &nbsp; Python</p>
                <p><span><FontAwesomeIcon icon={faSass} size="lg"/></span> &nbsp; Sass</p>
                <p><span><FontAwesomeIcon icon={faBootstrap} size="lg"/></span> &nbsp; BootfaBootstrap</p>
              </Col>
            </Row>
            <p>And many more.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}