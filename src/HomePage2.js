import React, { Component  } from 'react';
import { pdfjs, Document, Page } from "react-pdf";
import Gallery from 'react-photo-gallery';
import headerImage1 from './images/headerImage1.jpg';
import headerImage2 from './images/headerImage2.jpg';
import headerImage3 from './images/headerImage3.jpg';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.webp';
import screenshareStream from './images/screenshareStream.png';
import screenshareWatch from './images/screenshareWatch.png';
import viberListen from './images/viberListenView.png';
import viberStream from './images/viberStreamView.png';
import whiteboards from './images/whiteboards.png';
import github from './images/github.svg';
import collage from './images/collage.png';
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
    pageNumber: 1
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
                <a href="#Education" className="cancelATag"><p>Education</p></a>
                </div>
                <div className="shadow shadowHover" style={{ top: '19.97vh', right: '0px', position: 'absolute' }}>
                  <a href="#TechSkills" className="cancelATag"><p>Technical Skills</p></a>
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
            <Row id="Education" style={{width: '100%', margin: '0', height: 'max-content', backgroundColor: '#ff8583'}}>
              <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginLeft: '2%' }}><p>Education</p></div></Row>
                <Row style={{ margin: '0' }}>
                  <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>After being introduced to coding 5 years ago I have developed a strong love for it. As my love grows, 
                my skill set does as well. With respect to languages, I can develop in Java, Python, C++, JavaScript, and Bash. I am 
                proficient in frameworks such as Apache Flink, Spring/Springboot, Node.JS, React, Thymeleaf, and PyGame. I know database 
                standards such as PostgreSQL, MongoDB, and MySQL. I am familiar with tools such as Github, Docker, AWS, and Azure AD. 
                Plus I know coding architecture styles such as REST and WebRTC/Socket Connections.</p>
                </Row>
              </Col>
              <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'right'}}>
              <Document
                file={transcript}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page scale="1.17" pageNumber={this.state.pageNumber} />
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
            <Row id="TechSkills" style={{width: '100%', margin: '0', height: 'max-content', backgroundColor: '#ffeded'}}>
            {/* <Col style={{width: '100%', margin: '0'}}>
                <Row className="centeredRow">
                  <div className="shadow" style={{ marginRight: '2%', float: 'right' }}><p>Technical Skills</p></div>
                </Row>
              </Col> */}
              <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                <Row style={{width: '100%', margin: '1% 0'}}>
                  <img src={collage} style={{ marginLeft: '2%' }} alt="Whiteboards.tech app" width='98%' />
                </Row>
              </Col>
              <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'right'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginRight: '2%', float: 'right' }}><p>Technical Skills</p></div></Row>
                <Row style={{ margin: '0', textAlign: 'right'}}>
                  <p style={{ fontSize: '2rem', marginRight: '2%'}}>After being introduced to coding 5 years ago I have developed a strong love for it. As my love grows, 
                my skill set does as well. With respect to languages, I can develop in Java, Python, C++, JavaScript, and Bash. I am 
                proficient in frameworks such as Apache Flink, Spring/Springboot, Node.JS, React, Thymeleaf, and PyGame. I know database 
                standards such as PostgreSQL, MongoDB, and MySQL. I am familiar with tools such as Github, Docker, AWS, and Azure AD. 
                Plus I know coding architecture styles such as REST and WebRTC/Socket Connections.</p>
                </Row>
              </Col>
            </Row>
            <Row id="IndExp" style={{width: '100%', margin: '0', height: 'max-content', backgroundColor: '#ff8583'}}>
              <Col style={{width: '60%', margin: '0', display: 'inline-block'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginLeft: '2%' }}><p>Industry Experience</p></div></Row>
                <Row style={{ margin: '0' }}>
                  <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>Put some text here that talks about being in coop
                  and how I already have 1 full year of industry experience.</p>
                </Row>
                <Row style={{ margin: '2% 0 0 1%' }}>
                  <Row style={{ marginBottom: '1%' }}>
                    <Col>
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>D2L</p></div>
                    </Col>
                    <Col>
                      <div className="shadow" style={{ marginLeft: '1%' }}>
                        <p style={{fontSize: '2vw'}}>Software Developer</p>
                        <p style={{fontSize: '1vw'}} className="smallShadow">September 2020 - December 2020</p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ margin: '0' }}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                  </Row>
                </Row>
                <Row style={{ margin: '2% 0 0 1%' }}>
                  <Row style={{ marginBottom: '1%' }}>
                    <Col>
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Mindbridge Ai</p></div>
                    </Col>
                    <Col>
                      <div className="shadow" style={{ marginLeft: '1%' }}>
                        <p style={{fontSize: '2vw'}}>{"Data Engineer & Pipeline Developer"}</p>
                        <p style={{fontSize: '1vw'}} className="smallShadow">September 2019 - December 2019</p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ margin: '0' }}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                  </Row>
                </Row>
                <Row style={{ margin: '2% 0 0 1%' }}>
                  <Row style={{ marginBottom: '1%' }}>
                    <Col>
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Mindbridge Ai</p></div>
                    </Col>
                    <Col>
                      <div className="shadow" style={{ marginLeft: '1%' }}>
                        <p style={{fontSize: '2vw'}}>{"Full Stack & DevOps Developer"}</p>
                        <p style={{fontSize: '1vw'}} className="smallShadow">January 2019 - April 2019</p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ margin: '0' }}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                  </Row>
                </Row>
                <Row style={{ margin: '2% 0 0 1%' }}>
                  <Row style={{ marginBottom: '1%' }}>
                    <Col>
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Plastic Mobile</p></div>
                    </Col>
                    <Col>
                      <div className="shadow" style={{ marginLeft: '1%' }}>
                        <p style={{fontSize: '2vw'}}>{"Software & Hardware Lab Intern"}</p>
                        <p style={{fontSize: '1vw'}} className="smallShadow">July 2018 - August 2018</p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ margin: '0' }}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining</p>
                  </Row>
                </Row>
              </Col>
              <Col style={{width: '40%', margin: '0', display: 'inline-block', float: 'right'}}>
              <Document file={resume}>
                <Page scale="1.17" pageNumber={1} />
              </Document>
              </Col>
            </Row>
            <Row id="PerProj" style={{width: '100%', margin: '0', height: 'max-content', backgroundColor: '#ffeded'}}>
              <Col style={{width: '100%', margin: '0'}}>
                <Row className="centeredRow">
                  <div className="shadow" style={{ marginRight: '2%', float: 'right' }}><p>Personal Projects</p></div>
                </Row>
                <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                  <p style={{ fontSize: '2rem'}}>Over the years I have made some projects, here they are</p>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Spotify Playlist Generator</p></div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Viber</p></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={viberStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Viber streamer view" width='48.5%' />
                    <img src={viberListen} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Viber listener view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Whiteboards.tech</p></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={whiteboards} style={{ margin: '0 25.75%' }} alt="Whiteboards.tech app" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Screenshare.pro</p></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={screenshareStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Screenshare.pro streamer view" width='48.5%' />
                    <img src={screenshareWatch} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Screenshare.pro watcher view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>Pokémon Online Battle Simulator</p></div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage2;
