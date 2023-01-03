import { Col, Container, Row } from "react-bootstrap";

export default function AboutMe() {
  return(
    <section>
      <Container>
        <Row>
          <Col sm={6}>
            <h1>About Me</h1>
            <p>I enjoy creating websites, applications, and features.</p>
            <p>I don't give up when presented a challenging task.</p>
            <p>The challenge of not knowing does not stop me from making because I am an active learner.</p>
            <p>I enjoy learning, because I know that the more I learn, the more I can make.</p>
          </Col>
          <Col sm={{offset: 1}}>
            <h2>Skills</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}