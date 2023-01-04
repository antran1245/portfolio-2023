import { Card, Col, Container, Row } from "react-bootstrap";
import data from '../data.json'
import '../sass/projects.scss'

export default function Projects() {
  return(
    <section>
      <Container>
        <Row></Row>
        <Row>
          {
            data.map((item, index) => {
              return(
                <Col md={4} key={index} className="mb-2">
                  <Card>
                    <Card.Img src={require(`../assets/images${item.image}`)} alt={item.name} height={"250px"}/>
                    <Card.ImgOverlay>
                      <Card.Text>
                        {item.name}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}