import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import "../sass/projects.scss"

export default function ProjectCard({item}) {

  return(
    <Card>
      <Card.Img src={require(`../assets/images${item.image}`)} alt={item.name} height={"300px"}/>
      <Card.Body className='d-block d-sm-none'>
        <Card.Text className='titleMobile'>{item.name}
          <span className='links'>
            {
              item.github !== ""?
              <a href={item.github}>
                <FontAwesomeIcon icon={faGithub} />
              </a> : null
            }
            {
              item.github !== "" && item.link !== ""?
              <span>&#x7C;</span>:null
            }
            {
              item.link !== ""?
              <a href={item.link}>
                <FontAwesomeIcon icon={faLink} />
              </a> : null
            }
          </span>
        </Card.Text>
      </Card.Body>
      <Card.ImgOverlay>
        <Card.Text className="title">{item.name}</Card.Text>
        <Card.Text>Description</Card.Text>
        <Card.Text className='description'>{item.description}</Card.Text>
        <Card.Text>Packages</Card.Text>
        <Card.Text className='packages'>
          {
            item.packages.map((tool, index) => {
              return (
                <span key={index}>{tool}</span>
              )
            })
          }
        </Card.Text>
        <Card.Text className='links'>
          {
            item.github !== ""?
            <a href={item.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a> : null
          }
          {
            item.github !== "" && item.link !== ""?
            <span>&#x7C;</span>:null
          }
          {
            item.link !== ""?
            <a href={item.link}>
              <FontAwesomeIcon icon={faLink} />
            </a> : null
          }
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}