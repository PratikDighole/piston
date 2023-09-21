import React, { useState, useEffect } from 'react';
import TestimonialList from './components/TestimonialList';
import './App.css';
import axios from 'axios';
import { Nav, Navbar, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showSearch, setShowSearch] = useState(false);
  const handleCancelSearch = () => {
    setShowSearch(false);
  }
  // const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to fetch tasks from the backend
  const corsProxyUrl = 'https://elitefit4you.com/test-api/testimonials.json';
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
    <div className='App'>
      <header className='App-header'>
        <Navbar className='Nav1' >
          <Navbar.Brand>
            <Nav.Link id='nl1'>FREE SHIPPING ON ALL ORDERS</Nav.Link>
          </Navbar.Brand>
        </Navbar>
        <Navbar className='Nav'>
          <Navbar.Brand href="#home">
            <img src="logo.svg" className="brand" alt='logo image' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" id='nl2'>NEW</Nav.Link>
              <Nav.Link href="#link" id='nl3'>BRAND</Nav.Link>
              <Nav.Link href="#link" id='nl4'>COLLECTIONS</Nav.Link>
              <Nav.Link href="#link" id='nl5'>ACCESSORIES</Nav.Link>
              <Nav.Link href="#link" id='nl6'>ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar className='nb1'>
            <Nav className='cart'><img src="cart_logo.svg" alt='logo image' /></Nav>
            <Nav className='search'>
              <img src="search_logo.svg" alt='logo image' onClick={() => setShowSearch(true)} />
              {showSearch && (
                <div className="search-overlay">
                  <div className="cancel-search" onClick={handleCancelSearch}>X</div>
                  <input type="text" placeholder="Search.." name="search" id='in1' />
                  <Button id='btn1' type='submit'>search</Button>
                </div>
              )}
            </Nav>
          </Navbar>
        </Navbar>
        <div id='container'>
          <div id='dv1'>
            <Row id='r1'>
              <Col id='cl1' style={{ backgroundImage: 'url(Img1.png)' }}>
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
              <Col id='cl2' style={{ backgroundImage: 'url(Img2.jpg)' }}>
                <div id='dv2' >YOU WERE MADE TO MAKE AN IMPACT.</div>
                <div><Button id='btn2'>SHOP PENS</Button></div>
              </Col>
            </Row>
            <Row style={{ margin: 0, width: '100%', height: 703 }}>
              <Col style={{ backgroundImage: 'url(Img3.jpg)', padding: 0, width: '50%', backgroundSize: 'cover' }}>
                <div style={{ marginLeft: 220, marginTop: 480, width: "50%", letterSpacing: 1, fontSize: 30, color: 'black', textAlign: 'center' }}>MADE FOR THE BEST CHANGE MAKERS.  </div>
                <div><Button style={{ borderColor: '#FFDB58', borderWidth: 2, borderStyle: 'solid', backgroundColor: 'black', color: 'white', marginLeft: 330, borderRadius: 50, border: 4, fontSize: '20px', marginTop: 10, width: 180, height: 50 }}>SHOP BRANDS</Button></div>
              </Col>
              <Col style={{ padding: 0, width: '50%' }}><img src='Img4.jpg' style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} /></Col>
            </Row>
            <Row style={{ margin: 0, width: '100%', height: 703 }}>
              <Col style={{ padding: 0, width: '50%' }}><img src='Img5.png' style={{ width: '100%', height: '100%' }} /></Col>
              <Col style={{ backgroundImage: 'url(Img6.jpg)', backgroundSize: 'cover', padding: 0, width: '50%' }}>
                <div style={{ marginLeft: 200, marginTop: 500, width: 460, fontFamily: 'Oxygen', fontSize: 36, color: 'white', textAlign: 'center' }}>SAVOUR THE PRESENT.</div>
                <div><Button style={{ borderColor: '#FFDB58', borderWidth: 2, borderStyle: 'solid', backgroundColor: 'white', color: 'black', marginLeft: 300, borderRadius: 50, border: 4, fontSize: '20px', marginTop: 10, width: 240, height: 60, fontWeight: 'bold' }}>SHOP MONT BLANC</Button></div>
              </Col>
            </Row>
            <Row style={{ margin: 0, width: '100%', height: 703 }}>
              <Col style={{ backgroundColor: 'aqua', width: '100%', backgroundSize: 'cover', padding: 0, backgroundImage: 'url(Img7.png)' }}>
                <div style={{ fontSize: 35, color: 'white', textAlign: 'center', marginTop: 150, marginLeft: 0, letterSpacing: 8 }}>WHERE QUALITY MEETS CLASS.</div>
                <div class="estrellas inverso" style={{ marginTop: 200, marginLeft: 680 }}>
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
                  <div style={{ marginLeft: 40, width: 249, color: 'white', fontFamily: 'Pridi', textAlign: 'center', height: 100, fontSize: 49 }}>PISTONS</div>
                </div>
                <div><Button style={{ borderColor: '#FFDB58', borderWidth: 2, borderStyle: 'solid', backgroundColor: 'white', width: 400, height: 50, color: 'black', marginLeft: 650, marginTop: 0, borderRadius: 50, border: 4, fontSize: 20, fontWeight: 'bold' }}>SHOP THE FALL 2023 COLLECTION</Button></div>
              </Col>
            </Row>
          </div>
        </div>
        <div >
          <div style={{ margin: 0, padding: 0 }}>
            <Row style={{ margin: 0 }}>
              <Col style={{ padding: 0, marginTop: 192, marginLeft: 152 }}>
                <Carousel slide={true} style={{ width: 667, height: 550 }}>
                  <Carousel.Item>
                    <Image src='cardImage.png' alt="First slide" style={{ width: '100%', height: 550 }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src='cardImage2.png' alt="Second slide" style={{ width: '100%', height: 550 }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src='cardImage3.png' alt="Second slide" style={{ width: '100%', height: 550 }} />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image src='cardImage4.png' alt="Third slide" style={{ width: '100%', height: 550 }} />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col style={{ marginTop: '15%', alignContent: 'center', padding: 0, width: 667, height: 636 }}><h1 style={{ letterSpacing: 5, width: 385, height: 45, marginTop: 60, marginLeft: 137 }}>ABOUT PISTONS </h1>
                <p style={{ width: 430, height: 201, top: 249, marginLeft: 137, fontSize: 15 }}>Established in 1897, our beloved fountain pen haven, 'PISTONS,' has been a haven for pen enthusiasts for generations. With a century-long dedication to fine writing instruments, we've bridged tradition and modernity, offering a curated selection of vintage and contemporary fountain pens. Our little shop, nestled in the heart of town, continues to inspire a love for the art of writing, connecting past and present through the timeless elegance of ink on paper.</p>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={{ width: '100%', height: 552, margin: 0, padding: 0 }} >
            <Row style={{ margin: 0, width: '100%' }}>
              <Col ><h1 style={{ marginLeft: 600, width: 342, height: 65, fontSize: 50, letterSpacing: 5 }}>TESTIMONIALS</h1></Col>
            </Row>
            <Row style={{ margin: 0, width: '100%', alignContent: 'center', marginTop: 152, display: 'inline' }}>
              <TestimonialList Testimonials={tasks} />
            </Row>
          </div>
        </div>
        <div style={{ backgroundColor: 'black', marginTop: 60 }}>
          <Container >
            <Row style={{ width: 151, height: 62, color: 'white', marginLeft: 550, fontFamily: 'Pridi', fontSize: 40 }}><h1>PISTONS</h1></Row>
            <Row style={{ color: 'white', marginLeft: 490, display: 'inline-flex', fontWeight: 'bold', fontSize: 24, marginTop: 10, letterSpacing: 7 }}>STAY CONNECTED</Row>
            <Row style={{ width: 350, height: 62, color: 'white', marginLeft: 490, marginTop: 10 }}>
              <Image src='5.svg' style={{ width: 60, height: 55 }} />
              <Image src='4.svg' style={{ width: 60, height: 55 }} />
              <Image src='3.svg' style={{ width: 60, height: 55 }} />
              <Image src='2.svg' style={{ width: 60, height: 55 }} />
              <Image src='1.svg' style={{ width: 60, height: 55 }} />
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
