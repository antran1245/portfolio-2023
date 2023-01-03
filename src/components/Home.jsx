import { Button, Col, Container, Row } from "react-bootstrap";
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
              <Button id="learn">Learn more</Button>
            </Col>
          </Row>
      </Container>
    </section>
  )
}