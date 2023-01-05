import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import resume from '../An_Tran_Resume.pdf'
import '../sass/home.scss'

export default function Home() {
  return(
    <section id="home">
      <Container>
          <Row>
            <Col>
              <p>
                Hi there,
              </p>
              <h1>
                My name is <span>An Tran</span>.
              </h1>
              <h2>
                I <span>build</span> websites and create features.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <p>
                I am a <span>Full Stack Developer</span>. With a focus on <span>Frontend</span>.
                <br/>However, still capable of creating a <span>Backend</span>.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="https://www.linkedin.com/in/an-tran1245/" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="xl"/><span>Linkedin</span></a>
              <a href="https://github.com/antran1245" target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="xl"/> <span>Github</span></a>
              <a href={resume} download><FontAwesomeIcon icon={faFile} size="xl"/><span>Resume</span></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button id="learn">Learn more</Button>
            </Col>
          </Row>
      </Container>
    </section>
  )
}