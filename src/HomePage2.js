import React, { Component, useState  } from 'react';
import { pdfjs, Document, Page } from "react-pdf";
import headerImage1 from './images/headerImage1.jpg';
import headerImage2 from './images/headerImage2.jpg';
import headerImage3 from './images/headerImage3.jpg';
import github from './images/github.svg';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.webp';
import transcript from './pdfs/transcript.pdf';
import resume from './pdfs/resume.pdf';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homePage.scss';
import './shadowText.scss';

// sudo evn PATH=$PATH pm2 serve build 80 --name website --spa
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class HomePage2 extends Component {
  state = {
    file: transcript,
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
   this.setState({numPages});
  }

  changePage = (offset) => {
    this.setState({pageNumber: this.state.pageNumber + offset});
  }

  previousPage = () => {
    this.changePage(-1);
  }

  nextPage = () => {
    this.changePage(1);
  }

  render() {
    return (
      <div className="BaseApp">
        <Row style={{width: '100%', margin: '0'}}>
          <Col style={{width: '100%', margin: '0'}}>
            <Row style={{width: '100%', minHeight: '100vh', height: 'max-content', margin: '0'}}>
              <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                <Row className="headerImages">
                  <img src={headerImage1} style={{ marginRight: '2%' }} alt="Ethan Zohar" width='32%' />
                  <img src={headerImage2} alt="Ethan Zohar" width='32%'  />
                  <img src={headerImage3} style={{ marginLeft: '2%' }} alt="Ethan Zohar" width='32%'  />
                </Row>
                <Row className="centeredRow">
                  <div className="shadow" style={{padding: '0', margin: '0'}}><p>Ethan Zohar</p></div>
                </Row>
                <Row className="centeredRow">
                  <div style={{padding: '0', margin: '0'}}><p style={{fontSize: '3rem', margin: '0'}}>Software Engineering @ University of Waterloo</p></div>
                </Row>
                <Row className="centeredRow">
                  <div style={{padding: '0', margin: '0'}}><p style={{fontSize: '2rem'}}>ethan.zohar@uwaterloo.ca | 647-980-2177</p></div>
                </Row>
                <Row style={{ width: '100%', margin: '5% 2%', textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem'}}>After being introduced to coding 5 years ago I have developed a strong love for it. As my love grows, 
                my skill set does as well. With respect to languages, I can develop in Java, Python, C++, JavaScript, and Bash. I am 
                proficient in frameworks such as Apache Flink, Spring/Springboot, Node.JS, React, Thymeleaf, and PyGame. I know database 
                standards such as PostgreSQL, MongoDB, and MySQL. I am familiar with tools such as Github, Docker, AWS, and Azure AD. 
                Plus I know coding architecture styles such as REST and WebRTC/Socket Connections.</p>
                  </Row>
              </Col>
              <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'right', position: 'relative', height: '100vh'}}>
                <div className="shadow shadowHover" style={{ top: '5.25vh', right: '0px', position: 'absolute' }}>
                  <a href="#TechSkills" className="cancelATag"><p>Technical Skills</p></a>
                </div>
                <div className="shadow shadowHover" style={{ top: '19.97vh', right: '0px', position: 'absolute' }}>
                  <a href="#Education" className="cancelATag"><p>Education</p></a>
                </div>
                <div className="shadow shadowHover" style={{ top: '34.69vh', right: '0px', position: 'absolute' }}>
                  <a href="#IndExp" className="cancelATag"><p>Industry Experience</p></a>
                </div>
                <div className="shadow shadowHover" style={{ top: '49.41vh', right: '0px', position: 'absolute' }}>
                  <a href="#PerProj" className="cancelATag"><p>Personal Projects</p></a>
                </div>
                <div className="iconRow">
                  <a href="https://github.com/ethanzohar" target="_blank"><img src={github} /></a>
                  <a href="https://linkedin.com/in/ethan-zohar" target="_blank"><img src={linkedin} style={{ margin: '0 1%'}} /></a>
                  <a href="https://www.instagram.com/ethan_zohar/" target="_blank"><img src={instagram} /></a>
                </div>
              </Col>
            </Row>
            <Row id="TechSkills" style={{width: '100%', margin: '0', height: 'max-content', backgroundColor: '#ff8583'}}>
              <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                Text goes here
              </Col>
              <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'right'}}>
              <Document
                file={this.state.file}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={this.state.pageNumber} />
              <div className="page-controls">
                <button
                  type="button"
                  disabled={this.state.pageNumber <= 1}
                  onClick={this.previousPage}
                >
                  {'<'}
                </button>
                <span>{`${this.state.pageNumber} of ${this.state.numPages}`}</span>
                <button
                  type="button"
                  disabled={this.state.pageNumber >= this.state.numPages}
                  onClick={this.nextPage}
                >
                {'>'}
                </button>
              </div>
              </Document>
              </Col>
            </Row>
            <Row id="Education" style={{width: '100%', margin: '0', height: '100vh', backgroundColor: 'yellow'}}>a</Row>
            <Row id="IndExp" style={{width: '100%', margin: '0', height: '100vh', backgroundColor: 'red'}}>a</Row>
            <Row id="PerProj" style={{width: '100%', margin: '0', height: '100vh', backgroundColor: 'blue'}}>a</Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage2;
