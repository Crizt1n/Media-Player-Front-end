import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigativeByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3 className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque ab optio quos rem voluptates tempora atque fuga qui. Amet tenetur, accusamus corporis iusto commodi voluptatum omnis repudiandae ipsam ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae, illo quidem cupiditate id ea aperiam hic dolorem dolorum, soluta quasi, inventore iste tenetur perspiciatis eaque vel odit alias? Officiis.</p>
        <button onClick={()=>navigativeByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img className='w-100 ' src="https://cdn.dribbble.com/users/1036808/screenshots/7385069/media/aad192da74d690845d05eac18c5cadae.gif" alt="no image" />
      </Col>
    </Row>

   <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
  <h3>Features</h3>
  <div className='cards d-flex align-items-center justify-content-evenly w-100 mt-5 mb-5'>
    <Card className='p-4 ' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorised Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://cdn.dribbble.com/users/1036808/screenshots/7282712/media/bf886fa984a0b8fdbed7c9ae0e7684f6.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>

    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5 d-flex align-items-center justify-content-between w-100'>
      <div className="col-lg-5">
        <h3 className='mb-5 text-warning'>Simple Fast and Powerful</h3>
        <p><span  className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt alias molestiae fugit. Iusto, eum dolores. Culpa reiciendis, eos, hic soluta ab quis optio voluptatibus fugiat provident est aperiam qui?</p>
        <p><span  className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt alias molestiae fugit. Iusto, eum dolores. Culpa reiciendis, eos, hic soluta ab quis optio voluptatibus fugiat provident est aperiam qui?</p>
        <p><span className='fs-5 fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt alias molestiae fugit. Iusto, eum dolores. Culpa reiciendis, eos, hic soluta ab quis optio voluptatibus fugiat provident est aperiam qui?</p>
      </div>
      <div className="col-lg-5">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/txFREOQGE9k" title="Glimpse of Antony Das (From &quot;Leo&quot;)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
    </div>
    </>
  )
}

export default LandingPage