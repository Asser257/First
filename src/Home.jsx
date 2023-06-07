import React ,{ useState , useEffect , useRef } from 'react'
import './App.css'
import { Col, Container, Row , Card , Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
<link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@600&family=Cairo:wght@300&family=Open+Sans&display=swap" rel="stylesheet" />
const Home = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    alert("message sent sucessfully")
    e.preventDefault();

    emailjs.sendForm('service_drxm6p7', 'template_1l8epeq', form.current, 'gnAvooNL2Q004qpIL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
var sec=document.querySelectorAll(".sec");
sec.classList.add("bounce");
for(var i = 0 ; i < 1 ; i++){
var element = document.querySelectorAll(".sec");
if( i < 1 ){
  element.classList.add("bounce")
}
}
   
  return (
    <div className='body'>
      
<section id='Home'>
<Container>
  <Row>
    <Col lg={11} className='sec'>
    asser
    </Col>
    <Col lg={1}>
mohamed
    </Col>
  </Row>
</Container>

</section>
<section id='About'>
  <Row>
<Col lg={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\images\main1.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>go some were</Button>
      </Card.Body>
    </Card>
</Col>
<Col lg={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\images\main2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>go some were</Button>

       </Card.Body>
    </Card>
</Col>
<Col lg={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\images\main3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>go some were</Button>

       </Card.Body>
    </Card>
</Col>
<Col lg={3}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\images\main4.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button>go some were</Button>

       </Card.Body>
    </Card>
</Col>



    </Row>
          </section>
      <section id='ContactUs'>
 <Row>
      <Col lg={5} className='sec'>
    yousef
    </Col>
    <Col lg={1}>
mohamed
    </Col>
    </Row>
    </section>


<section className='form'>
<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="username" />
      <label>Name</label>
      <input type="text" name="company" />
      <label>Name</label>
      <input type="text" name="email" />
      <label>Name</label>
      <input type="text" name="phone" />
      <br />
      <input type="submit" value="Send" />
    </form>

</section>

    </div>
  )
}

export default Home

// service_drxm6p7 service id
// template_1l8epeq template id
// gnAvooNL2Q004qpIL puplic key