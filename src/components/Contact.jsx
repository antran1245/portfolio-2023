import { Col, Container,Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../sass/contact.scss'

export default function Contact() {
  return(
    <section id="contact">
      <Container>
        <Row>
          <Col><h1>Contact</h1></Col>
        </Row>
        <Row>
          <Col>
            <p>Do you have a project in mind?</p>
            <p>Do you need an extra hand?</p>
            <p>Send me an e-mail.</p>
            <p><span><FontAwesomeIcon icon={faEnvelope}/> : </span> antran1245@gmail.com</p>
            <p>Or connect with me on <span><FontAwesomeIcon icon={faLinkedin}/> </span><a href="https://www.linkedin.com/in/an-tran1245/">Linkedin</a> and let's chat.</p>
            <p>Want to have a look at my other projects?</p>
            <p>Have a look at my <span><FontAwesomeIcon icon={faGithub}/></span> <a href="https://github.com/antran1245">Github</a>.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}