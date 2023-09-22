import React, { useEffect, useState } from 'react';
import './App.css';
import TestimonialList from './components/TestimonialList';
import axios from 'axios';
import { Nav, Navbar, Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const handleCancelSearch = () => {
    setShowSearch(false);
  }
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/https://elitefit4you.com/test-api/testimonials.json';
  const fetchTasks = async () => {
    try {
      const response = await axios.get(corsProxyUrl);
      setTasks(response.data.testimonials);
      console.log(response.data.testimonials)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

  return (
    <div className="App">
      <div className='c0'>
        <Container>
          <Row>
            <Col>FREE SHIPPING ON ALL ORDERS</Col>
          </Row>
        </Container>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand id='logo' href="#home"><Image src='logo.svg' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" id='nl'>NEW</Nav.Link>
              <Nav.Link href="#link" id='nl'>BRAND</Nav.Link>
              <Nav.Link href="#link" id='nl'>COLLECTIONS</Nav.Link>
              <Nav.Link href="#link" id='nl'>ACCESSORIES</Nav.Link>
              <Nav.Link href="#card" id='nl'>ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className='cart'><img src='cart_logo.svg' /></Navbar.Brand>
          <Navbar.Brand href="#home" className='search'>
            <img src='search_logo.svg' onClick={() => setShowSearch(true)} />
            {showSearch && (
              <div id='search-overlay'>
                <div className="cancel-search" onClick={handleCancelSearch}>X</div>
                <input type="text" placeholder="Search.." name="search" id='in1' />
                <Button id='btn1' type='submit'>search</Button>
              </div>
            )}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <Row>
          <Col className='c1 col-md-6 col-12'>
            <div class="estrellas inverso" style={{ marginTop: 600 }}>
              <span>U</span>
              <span>O</span>
              <span>Y</span>
              <span>R</span>
              <span>O</span>
              <span>F</span>
              <span>E</span>
              <span>D</span>
              <span>A</span>
              <span>M</span>
              <div id='ps1'>PISTONS</div>
            </div>
          </Col>
          <Col className='c2 col-md-6 col-12'>
            <div id='dv2' >YOU WERE MADE TO MAKE AN IMPACT.</div>
            <Button id='btn2'>SHOP PENS</Button>
          </Col>
        </Row>
        <Row>
          <Col className='c3 col-md-6 col-12'>
            <div id='dv3'>MADE FOR THE BEST CHANGE MAKERS.</div>
            <Button id='btn3'>SHOP BRANDS</Button>
          </Col>
          <Col className='c4 col-md-6 col-12'></Col>
        </Row>
        <Row>
          <Col className='c5 col-md-6 col-12'></Col>
          <Col className='c6 col-md-6 col-12'>
            <div id='dv4'>SAVOUR THE PRESENT.</div>
            <Button id='btn4'>SHOP MONT BLANC</Button>
          </Col>
        </Row>
        <Row>
          <Col className='c7 col-12'>
            <div id='dv5'>WHERE QUALITY MEETS CLASS.</div>
            <div class="estrellas inverso" style={{ marginTop: 200 }}>
              <span>U</span>
              <span>O</span>
              <span>Y</span>
              <span>R</span>
              <span>O</span>
              <span>F</span>
              <span>E</span>
              <span>D</span>
              <span>A</span>
              <span>M</span>
              <div id='ps1'>PISTONS</div>
            </div>
            <Button id='btn5'>SHOP THE FALL 2023 COLLECTION</Button>
          </Col>
        </Row>
      </div>
      <div>
        <Row className='px-4 my-5' id='card'>
          <Col xs={12} md={6}>
            <Carousel className='cr1'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="cardImage.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="cardImage2.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="cardImage3.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="cardImage4.png"
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={6} id='cl1'>
            <h1 class="light">ABOUT PISTONS</h1>
            <p class="cl-mt1">Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.</p>
          </Col>
        </Row>
      </div>
      <div id='dv6'>
        <Row className='px-5 my-5'><Col id='cl9'>TESTIMONIALS</Col></Row>
        <Row className='px-6 my-5'><TestimonialList Testimonials={tasks} /></Row>
      </div>
      <div className='dv-3 ct-6'>
        <Container>
          <Row className='px-7 my-6'><h1>PISTONS</h1></Row>
          <Row className='px-8 my-6'><h2>STAY CONNECTED</h2></Row>
          <Row className='px-9 my-6'>
            <div>
            <Image src='5.svg' style={{width: 30,height: 30,margin:20}}/>
            <Image src='4.svg' style={{width: 30,height: 30,margin:20}}/>
            <Image src='3.svg' style={{width: 30,height: 30,margin:20}}/>
            <Image src='2.svg' style={{width: 30,height: 30,margin:20}}/>
            <Image src='1.svg' style={{width: 30,height: 30,margin:20}}/>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
