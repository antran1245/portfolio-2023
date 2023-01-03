import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../sass/home.scss'

export default function Home() {
  return(
    <section>
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
                I build <span>websites</span> and create <span>features</span>.
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
              <a href="https://www.linkedin.com/in/an-tran1245/" target={"_blank"}><span><FontAwesomeIcon icon={faLinkedin} size="xl"/></span></a>
              <a href="https://github.com/antran1245" target={"_blank"}><FontAwesomeIcon icon={faGithub} size="xl"/></a>
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