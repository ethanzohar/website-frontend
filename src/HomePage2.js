import React, { Component } from 'react';
import headerImage1 from './images/headerImage1.jpg';
import headerImage2 from './images/headerImage2.jpg';
import headerImage3 from './images/headerImage3.jpg';
import github from './images/github.svg';
import linkedin from './images/linkedin.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homePage.css';
import './shadowText.scss';

// sudo evn PATH=$PATH pm2 serve build 80 --name website --spa

class HomePage2 extends Component {
  render() {
    return (
      <div className="BaseApp">
        <Col style={{width: '100%'}}>
          <Row style={{width: '100%', height: '100vh'}}>
            <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'inline-start'}}>
              <Row className="headerImages">
                <img src={headerImage1} style={{ marginRight: '5%' }} alt="Ethan Zohar" width='30%' />
                <img src={headerImage2} alt="Ethan Zohar" width='30%'  />
                <img src={headerImage3} style={{ marginLeft: '5%' }} alt="Ethan Zohar" width='30%'  />
              </Row>
              <Row>
                <div className="shadow" style={{padding: '0', margin: '0'}}>
                  <p>Ethan Zohar</p>
                </div>
                {/* <h1 style={{ maxWidth: 'max-content', margin: '0 auto', fontSize: '5rem', fontWeight: 'bold' }}>Ethan Zohar</h1> */}
              </Row>
              <Row>
                <Col>
                  <Col style={{ width: '30%', display: 'inline-block', marginRight: '2%' }}>
                    <a href="https://github.com/ethanzohar" target="_blank"><img src={github} style={{ width: '50%'}}/></a>
                  </Col>
                  <Col style={{ width: '30%', display: 'inline-block' }}>
                    <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} style={{ width: '50%'}} /></a>
                  </Col>
                  <Col style={{ width: '30%', display: 'inline-block', marginLeft: '2%' }}>
                    <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} style={{ width: '50%'}} /></a>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col style={{width: '50%', margin: '0', display: 'inline-block', overflow: 'hidden', paddingTop: '60px'}}>
              <Row className="mainHeader">
                <div className="shadow shadowHover" style={{padding: '0', margin: '0', float: 'right'}}>
                  <p>Technical Skills</p>
                  <div></div>
                </div>
              </Row>
              <Row className="mainHeader">
                <div className="shadow shadowHover" style={{padding: '0', margin: '0', float: 'right'}}>
                  <p>Education</p>
                  <div></div>
                </div>
              </Row>
              <Row className="mainHeader">
                <div className="shadow shadowHover" style={{padding: '0', margin: '0', float: 'right'}}>
                  <p>Industry Experience</p>
                  <div></div>
                </div>
              </Row>
              <Row className="mainHeader">
                <div className="shadow shadowHover" style={{padding: '0', margin: '0', float: 'right'}}>
                  <p>Personal Projects</p>
                  <div></div>
                </div>
              </Row>
            </Col>
          </Row>
          <Row style={{width: '100%', height: '100vh', backgroundColor: 'black'}}>a</Row>
        </Col>
        {/* <header className="App-header">
          <img src={headshot} className="HeadShot" alt="Ethan Zohar" />
          <h1 className="Name">Ethan Zohar</h1>
          <div className="MainRow">
            <a href="https://github.com/ethanzohar" target="_blank"><img src={github} /></a>
            <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} /></a>
          </div>
          <h3 className="About">Software Engineering @ University of Waterloo</h3>
          <h4 className="About">ethan.zohar@uwaterloo.ca | 647-980-2177</h4>
        </header> */}
        {/* <Container className="App-main"> */}



        {/* <Container>
          <Row>
          <Col style={{ width: '50%', display: 'inline-block' }}>
            <Row>
            <h1 style={{ maxWidth: 'max-content', margin: '0 auto' }}>Ethan Zohar</h1>
            </Row>
            <Row>
              
          <img src={headerImage1} style={{ marginRight: '5%' }} alt="Ethan Zohar" width='30%' />
          <img src={headerImage2} style={{ objectFit: 'cover'}} alt="Ethan Zohar" width='30%'  />
          <img src={headerImage3} style={{ marginLeft: '5%' }} alt="Ethan Zohar" width='30%'  />
            </Row>
            <Row>
              <Col>
                <Col style={{ width: '30%', display: 'inline-block', marginRight: '2%' }}>
                  <a href="https://github.com/ethanzohar" target="_blank"><img src={github} style={{ width: '50%'}}/></a>
                </Col>
                <Col style={{ width: '30%', display: 'inline-block' }}>
                  <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} style={{ width: '50%'}} /></a>
                </Col>
                <Col style={{ width: '30%', display: 'inline-block', marginLeft: '2%' }}>
                  <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} style={{ width: '50%'}} /></a>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col style={{ width: '50%', display: 'inline-block' }}>
            <Row>
              <Button>About Me</Button>
            </Row>
            <Row>
              <Button>Personal Projects</Button>
            </Row>
            <Row>
              <Button>Industry Experience</Button>
            </Row>
            <Row>
              <Button>Education</Button>
            </Row>
          </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default HomePage2;
