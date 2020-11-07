import React, { Component  } from 'react';
import { pdfjs, Document, Page } from "react-pdf";
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
import collage from './images/collage2.png';
import transcript from './pdfs/transcript.pdf';
import resume from './pdfs/resume.pdf';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homePage.scss';
// import './shadowText.scss';
//
// sudo evn PATH=$PATH pm2 serve build 80 --name website --spa
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const INTRO_TEXT = "After being introduced to coding 5 years ago I have developed a strong love for it. As my love grows," 
                  + " my skill set does as well. With respect to languages, I can develop in Java, Python, C++, JavaScript, and Bash. I am"
                  + " proficient in frameworks such as Apache Flink, Spring/Springboot, Node.JS, React, Thymeleaf, and PyGame. I know database"
                  + " standards such as PostgreSQL, MongoDB, and MySQL. I am familiar with tools such as Github, Docker, AWS, and Azure AD."
                  + " Plus I know coding architecture styles such as REST and WebRTC/Socket Connections.";
const EDUCATION_TEXT = "Currently, I am in my third year of my Software Engineering degree at the University of Waterloo, but this is actually not the program that I was"
                        + " originally accepted for. I started my academic career at UWaterloo as a Computer Engineering major and it was in my first year of this program"
                        + " that I found my love for the software side of computers. After getting an academic ranking of 19/185 in my second semester with an average of"
                        + " 87.36%, I was given the opportunity to switch into the more elite program of Software Engineering and of course I had to take it. My entire second"
                        + " year of my degree was completed under the Software Engineering major and it was clear that this was the program for me. The new courses available to"
                        + " me where leagues more interesting and inspiring for me, this showed through as I was able to keep my high average up even with the increase of academic"
                        + " demand that comes from switching programs and entering second year.";
const TECHNICAL_SKILLS_TEXT = "Over the 5 years that I have been coding I have been exposed to and mastered tons of languages, tools, and frameworks. Some of these have been self"
                              + " taught, while others have been learned either through school or during my work terms.";
const D2L_TEXT = "Due to the COVID-19 pandemic, the entirety of this co-op was remote. At first I thought this would be a bad thing because it meant less social interaction with my co-workers, but this actually turned out to be a blessing in disguise. I was forced to become more independent and I was given more responsibility for the projects that I worked on. This allowed me to be able to steer the projects in the directions that I though were best.";
const MINDBRIDGE_TEXT_2 = "During this co-op term I learned about big data concepts and the importance of efficient code. As my entire job revolved around enormous Excel spreadsheets and CSV files that were tens of millions of rows large, even the slightest inefficiency in my code would be detrimental. I learned the inner workings and subtleties of Apache Flink as I wrote several algorithms to analyze the financial data contained within the spreadsheets.";
const MINDBRIDGE_TEXT_1 = "Working as an internal tools developer on a small team means that you get to see a new feature from start to finish, but that also means that you must be capable of completing every step along the way. For this co-op I did just that, I worked closely with the customer service team and developed tools which would reduce the amount of manual work they would have to do.";
const PLASTIC_MOBILE_TEXT = "Working on an innovation team was a lot of fun because I was given complete freedom to experiment and take my projects in whichever direction I desired. I worked on an Android application that utilized Google's ArCore to control a Roomba. The end product was a coffee delivering robot where the users would simply press a button on their phone ordering coffee and the Roomba would take care of the rest. With the Android device attached to the top of the Roomba, the device was able to determine its position within the office through the use of ArCore and image recognition algorithms.";
const PLAYLIST_TEXT = "Every Monday and Friday Spotify will release a custom playlist for all of their users with 30 curated songs for you to listen to. I honestly look"
                      + " forward to when my new playlists come out and I always make it a point to listen to all of the songs in them. My music listening has gotten to the"
                      + " point where I need even more new music to listen to, so I decided to give myself a custom playlist everyday. I set up a Node.js server running"
                      + " on my AWS EC2 instance which runs a job everyday at 2am. In this job it uses Spotify's API to find my top songs and top artists from the past 6 months,"
                      + " select 2 songs and 2 artists at random from those lists, finds 50 songs that are similar to the artists and songs from my top list, then places"
                      + " them in my playlist. In this project I learnt about the OAuth2 flow through using Spotify's API as well as what is required to run a job daily"
                      + " on a remote server.";
const VIBER_TEXT = "While on the bus, I saw a man sitting across from me totally jamming out to some music, head bobbing and everything. I was so curious as to what he was"
                    + " listening to that for the rest of the bus ride, I thought of new ways to figure out what music people are listening to. It was there that I came up with"
                    + " the idea for Viber. This is a music sharing app the hooks into Spotify's API to allow users to join other peoples' listening streams. The UI uses"
                    + " the Google Maps API along with geolocation to place markers for the users in your area. From here you can click on them and have them control your"
                    + " Spotify session (using Spotify's API). Once hooked in to another user's session, your music is now synced up with them, when they pause you pause, when they"
                    + " skip then you skip as well. If instead you want to stream your music, there is a built in music navigation UI that will allow you to skip and pause songs"
                    + " directly from the UI. For this project I used React for my front-end as it allowed for easy integration with the Spotify and Google Maps API, and I used"
                    + " a Springboot application running on my AWS EC2 instance for the back-end purely because I wanted to become more familiar with Spring/Springboot.";
const WHITEBOARDS_TEXT = "Some of my greatest memories of my university career have come from late nights solving problems with my friends on the school whiteboards. Thanks"
                          + " to COVID-19, doing that was near impossible, so me and my friends decided to make a tool that would give us that same feeling back. We decided"
                          + " to build a whiteboard application with a live chat so if someone cannot join a voice call or video call to be there then they are still able to contribute."
                          + " The application uses pure HTML and JS interacting with a Firebase datastore application. We used Firebase because it allowed for update notifications from the database"
                          + " which facilitated the live updating nature of the application. This because an extremely useful tool for me and my friends as the COVID lock down went on and"
                          + " it remains a tool that we use quite often.";
const SCREENSHARE_TEXT = "After working on some group projects with friends I found that there was no good solution to simple screen sharing. All sites or applications"
                          + " would require downloads, logins, and friend requests to get working, but I wanted something simpler. So I made it! This was my first \"large scale\""
                          + " application that was distributed online so I learned a lot. I learned about deploying projects on dedicated servers, in this case I used an AWS"
                          + " EC2 instance. The majority of the learning came from the struggles of transferring large amounts of pixel data (for the live stream) in"
                          + " an efficient manner. I went with a C++ socket backend for increased efficiency because the original idea was to develop a custom video"
                          + " encoding algorithm and transfer the pixels between users that way. This did not give the video quality for framerate that I was looking for."
                          + " The next step was looking into already developed video standards such as h.264, but these were deemed too cumbersome to implement for what I was"
                          + " looking for. The final decision was made to create direct socket connections using WebRTC sockets between the streamer and the viewers where"
                          + " the backend would only act as a means to make the initial connection between users. This gave me the performance I was looking for and I still"
                          + "use this tool with my friends all the time.";
const POKEMON_TEXT = "For my final project of my highschool career my friends and I decided to go all out. We went with the idea of making a complete clone of Pokémon"
                      + " Showdown with local multiplayer. This project taught me so much and was one of the main sources for my love of programming. I used websockets"
                      + " for the first time ever, I used a separate frontend and backend written in different languages for the first time, but most importantly I"
                      + " used web scraping for the first time ever. I used an online database which contained all of the Pokémon's statistics, sprites, and move information."
                      + " Figuring out that the code I write could interact with things that other people have done opened so many doors for my coding career and gave me tons"
                      + " more ideas on things to make with this new found knowledge. This project taught me how to work in a team, how to use source control tools, and how to"
                      + " solve problems that I have never solved before.";

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
                  <div style={{padding: '0', margin: '0'}}><p style={{fontSize: '1vw'}}>ethan.zohar@uwaterloo.ca | 647-980-2177</p></div>
                </Row>
                <Row style={{ width: '100%', margin: '5% 2%', textAlign: 'center' }}>
                  <p style={{ fontSize: '1vw'}}>{INTRO_TEXT}</p>
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
            <Row id="Education" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '59%', margin: '0 1% 0 0', display: 'inline-block'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginLeft: '2%' }}><p>Education</p></div></Row>
                <Row style={{ margin: '0' }}>
                  <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '2.5vw' }}>University of Waterloo</p></div>
                </Row>
                <Row style={{ margin: '0' }}>
                  <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '2vw' }}>Software Engineering (3A | Third Year)</p></div>
                </Row>
                <Row style={{ margin: '0' }}>
                  <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '1vw' }} className="smallShadow">September 2018 - April 2023</p></div>
                </Row>
                <Row style={{ margin: '10px 0 0 0 ' }}>
                  <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>{EDUCATION_TEXT}</p>
                </Row>
                <Row style={{ margin: '0 0 10px 0' }}>
                  <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '2.5vw' }}>Highlighted Courses</p></div>
                </Row>
                <Row style={{ margin: '0' }}>
                  <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'left'}}>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>ECE 105 | Fundamentals of Programming | 100%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>ECE 108 | Discrete Mathematics and Logic 1 | 94%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>ECE 124 | Digital Circuits  and Systems | 87%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>ECE 104 | Linear Circuits | 86%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>CS 241 | Foundations of Sequential Programs | 91%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>CS 245 | Logic and Computation | 86%</p>
                  </Col>
                  <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>ECE 222 | Digital Computers | 89%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>CS 240 | Data Structures and Data Management | 79%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>CS 247 | Software Engineering Principles | 83%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>CS 348 | Intro. to Database Management | 97%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>MATH 239 | Intro. to Combinatorics | 80%</p>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>STAT 231 | Statistics | 83%</p>
                  </Col>
                </Row>
              </Col>
              <Col style={{width: '40%', margin: '0', display: 'inline-block', float: 'right'}}>
                <Document
                  file={transcript}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page scale="1.17" pageNumber={this.state.pageNumber} />
                  <div className="page-controls" style={{ height: 'max-content', top: '0', left: '95%', backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <a className="cancelATag" href={transcript} without rel="noopener noreferrer" target="_blank">
                      <svg width="0.75em" height="0.75em" viewBox="0 0 16 16" class="bi bi-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
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
            <Row id="TechSkills" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '40%', margin: '0', display: 'inline-block'}}>
                <Row style={{width: '100%', margin: '1% 0'}}>
                  <img src={collage} style={{ marginLeft: '2%' }} alt="languages, tools, and frameworks" width='98%' />
                </Row>
              </Col>
              <Col style={{width: '60%', margin: '0', display: 'inline-block', float: 'right', padding: '0 2%'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ width: '100%' }}><p style={{ textAlign: 'right'  }}>Technical Skills</p></div></Row>
                <Row style={{ margin: '0'}}>
                  <p style={{ fontSize: '1vw', marginRight: '2%'}}>{TECHNICAL_SKILLS_TEXT}</p>
                </Row>
                <Row style={{ margin: '0 0 10px 0' }}>
                  <div className="shadow" style={{ width: '100%'}}><p style={{ fontSize: '2.5vw', textAlign: 'right'  }}>Languages, Tools, and Frameworks</p></div>
                </Row>
                <Row style={{margin: '0', width: '100%'}}>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'right'}}>
                    <p style={{ fontSize: '1vw'}}>- Java</p>
                    <p style={{ fontSize: '1vw'}}>- C++</p>
                    <p style={{ fontSize: '1vw'}}>- Python</p>
                    <p style={{ fontSize: '1vw'}}>- JavaScript</p>
                    <p style={{ fontSize: '1vw'}}>- WebRTC</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'right'}}>
                    <p style={{ fontSize: '1vw'}}>- Bash</p>
                    <p style={{ fontSize: '1vw'}}>- Github</p>
                    <p style={{ fontSize: '1vw'}}>- AWS</p>
                    <p style={{ fontSize: '1vw'}}>- Azure</p>
                    <p style={{ fontSize: '1vw'}}>- JDBC</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'right'}}>
                    <p style={{ fontSize: '1vw'}}>- Apache Flink</p>
                    <p style={{ fontSize: '1vw'}}>- Springboot/Spring</p>
                    <p style={{ fontSize: '1vw'}}>- Node.js</p>
                    <p style={{ fontSize: '1vw'}}>- React</p>
                    <p style={{ fontSize: '1vw'}}>- Docker</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'right'}}>
                    <p style={{ fontSize: '1vw'}}>- Flask</p>
                    <p style={{ fontSize: '1vw'}}>- Thymeleaf</p>
                    <p style={{ fontSize: '1vw'}}>- PostgreSQL</p>
                    <p style={{ fontSize: '1vw'}}>- MongoDB</p>
                    <p style={{ fontSize: '1vw'}}>- HTML</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'right'}}>
                    <p style={{ fontSize: '1vw'}}>- MySQL</p>
                    <p style={{ fontSize: '1vw'}}>- Firebase</p>
                    <p style={{ fontSize: '1vw'}}>- REST</p>
                    <p style={{ fontSize: '1vw'}}>- Socket Connections</p>
                    <p style={{ fontSize: '1vw'}}>- CSS/SCSS</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row id="IndExp" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '59%', margin: '0 1% 0 0', display: 'inline-block'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginLeft: '2%' }}><p>Industry Experience</p></div></Row>
                <Row style={{ margin: '0 0 0 1%' }}>
                  <Row style={{ marginBottom: '1%' }}>
                    <Col>
                    <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '3vw' }}>D2L</p></div>
                    </Col>
                    <Col>
                      <div className="shadow" style={{ marginLeft: '1%' }}>
                        <p style={{fontSize: '2vw'}}>Software Developer</p>
                        <p style={{fontSize: '1vw'}} className="smallShadow">September 2020 - Present</p>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ margin: '0' }}>
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>{D2L_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{ margin: '1% 0 0 1%' }}>
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
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>{MINDBRIDGE_TEXT_2}</p>
                  </Row>
                </Row>
                <Row style={{ margin: '1% 0 0 1%' }}>
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
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>{MINDBRIDGE_TEXT_1}</p>
                  </Row>
                </Row>
                <Row style={{ margin: '1% 0 0 1%' }}>
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
                    <p style={{ fontSize: '1vw', color: 'white', marginLeft: '2%'}}>{PLASTIC_MOBILE_TEXT}</p>
                  </Row>
                </Row>
              </Col>
              <Col style={{width: '40%', margin: '0', display: 'inline-block', float: 'right'}}>
              <Document file={resume}>
                <Page scale="1.17" pageNumber={1} />
                  <div className="page-controls" style={{ height: 'max-content', top: '0', left: '95%', backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <a className="cancelATag" href={resume} without rel="noopener noreferrer" target="_blank">
                      <svg width="0.75em" height="0.75em" viewBox="0 0 16 16" class="bi bi-fullscreen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                      </svg>
                    </a>
                  </div>
              </Document>
              </Col>
            </Row>
            <Row id="PerProj" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '100%', margin: '0'}}>
                <Row className="centeredRow">
                  <div className="shadow"><p>Personal Projects</p></div>
                </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>Learning how to code has forced me to look at the world through a new lense. I actively analyses the problems in my life and seek to solve them, and by solve them I of course mean solve them with code. If the tool that I am looking for does not exist, I just go and create it myself. So here are some of the problems that I have solved in my life!
                    <br/>
                    Click on the project headers to be taken to the code or the deployed application.</p>
                  </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/ethanzohar/spotify-playlist-generator" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Spotify Playlist Generator</p></a></div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">
                      <a href="https://github.com/ethanzohar/spotify-playlist-generator" className="cancelATag" target="_blank">github.com/ethanzohar/spotify-playlist-generator</a></p>
                    </div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">October 2020</p>
                    </div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>{PLAYLIST_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/ethanzohar/Viber" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Viber</p></a></div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">
                      <a href="https://github.com/ethanzohar/Viber" className="cancelATag" target="_blank">github.com/ethanzohar/Viber</a></p>
                    </div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">April 2020 - May 2020</p>
                    </div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={viberStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Viber streamer view" width='48.5%' />
                    <img src={viberListen} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Viber listener view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>{VIBER_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://whiteboards.tech" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Whiteboards.tech</p></a></div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">
                      <a href="https://github.com/TOHacks-Dev/whiteboard" className="cancelATag" target="_blank">github.com/TOHacks-Dev/whiteboard</a></p>
                    </div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">May 2020</p>
                    </div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={whiteboards} style={{ margin: '0 25.75%' }} alt="Whiteboards.tech app" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>{WHITEBOARDS_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://screenshare.pro" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Screenshare.pro</p></a></div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">
                      <a href="https://github.com/Computer-Kids-Club/screenshare-web" className="cancelATag" target="_blank">github.com/Computer-Kids-Club/screenshare-web</a></p>
                    </div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">July 2019 - November 2019</p>
                    </div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={screenshareStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Screenshare.pro streamer view" width='48.5%' />
                    <img src={screenshareWatch} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Screenshare.pro watcher view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>{SCREENSHARE_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/Computer-Kids-Club/pokeman" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Pokémon Online Battle Simulator</p></a></div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">
                      <a href="https://github.com/Computer-Kids-Club/pokeman" className="cancelATag" target="_blank">github.com/Computer-Kids-Club/pokeman</a></p>
                    </div>
                  </Row>
                  <Row className="centeredRow">
                    <div className="shadow" >
                      <p style={{ fontSize: '2vw' }} className="smallShadow">April 2018 - May 2018</p>
                    </div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1vw'}}>{POKEMON_TEXT}</p>
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
