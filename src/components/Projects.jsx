import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import data from '../data.json'
import '../sass/projects.scss'

export default function Projects() {
  return(
    <section id="projects">
      <Container>
        <Row></Row>
        <Row>
          {
            data.map((item, index) => {
              return(
                <Col md={6} lg={4} key={index} className="mb-2">
                  <ProjectCard item={item}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}