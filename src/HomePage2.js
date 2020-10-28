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

// sudo evn PATH=$PATH pm2 serve build 80 --name website --spa
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EDUCATION_TEXT = "Currently, I am in my third year of my Software Engineering degree at the University of Waterloo, but this is actually not the program that I was"
                        + " originally accepted for. I started my academic career at UWaterloo as a Computer Engineering major and it was in my first year of this program"
                        + " that I found my love for the software side of computers. After getting an academic ranking of 19/185 in my second semester with an average of"
                        + " 87.36%, I was given the opportunity to switch into the more elite program of Software Engineering and of course I had to take it. My entire second"
                        + " year of my degree was completed under the Software Engineering major and it was clear that this was the program for me. The new courses available to"
                        + " me where leagues more interesting and inspiring for me, this showed through as I was able to keep my high average up even with the increase of academic"
                        + " demand that comes from switching programs and entering second year.";
const TECHNICAL_SKILLS_TEXT = "Over the 5 years that I have been coding I have been exposed to and mastered tons of languages, tools, and frameworks. Some of these have been self"
                              + " taught, while others have been learned either through school or during my work terms.";
const D2L_TEXT = "Due to the COVID-19 pandemic, the entirety of this co-op was remote. At first I thought this would be a bad thing because it meant less social interaction with"
                  + " my co-workers, but this actually turned out to be a blessing in disguise. Because I no longer had the privilege of being able to walk over to my co-workers"
                  + " for every little thing, it forced me to become more independent. I was given more responsibility for the projects that I worked on and I was able to steer"
                  + " the projects in the directions that I though were best. At D2L I worked on the innovation team where we would rapidly prototype new products and features that"
                  + " would eventually be merged into the production codebase. I the main application that I worked on was a new user experience for individual teachers to access the product."
                  + " This meant that I was in charge of the product that would allow D2L to enter a new market, my code would be the reason that D2L succeeds in the B to C market."
                  + " I worked on a Node.JS and react stack creating an entirely new user experience with its own signup process and user management. This was my first time building"
                  + " an application from the ground up that dealt with personally identifiable information. Because of this I learnt a lot about the different security measures that"
                  + " must be put in place in order to protect our users. Working on this project also allowed me to improve upon my front-end capabilities as all of my other work"
                  + " terms focused on back-end development.";
const MINDBRIDGE_TEXT_2 = "During this co-op term I learned about big data concepts and the importance of efficient code. As my entire job revolved around enormous Excel"
                          + " spreadsheets and CSV files that were tens of millions of rows large, even the slightest inefficiency in my code would be detrimental. I"
                          + " learned the inner workings and subtleties of Apache Flink as I wrote several algorithms to analyze the financial data contained within the"
                          + " spreadsheets. I learned the benefits and pitfalls of different database formats as I performed an internal data storage and data transfer"
                          + " overhaul which moved our pipelines database from MongoDB to PostgreSQL. From this change I was able to reduce the size of our codebase by"
                          + " 40% and increase the pipeline's runtime efficiency by upwards of 35%. Finally, I learned the nuances of cross-team communication as I"
                          + " worked with the front-end team in order to help format our data in a manner that was usable and convenient for them.";
const MINDBRIDGE_TEXT_1 = "Working as an internal tools developer on a small team means that you get to see a new feature from start to finish, but that also means that"
                          + " you must be capable of completing every step along the way. For this co-op I did just that, I worked closely with the customer service team"
                          + " and developed tools which would reduce the amount of manual work they would have to do. The main tool that I developed for them was an Excel"
                          + " spreadsheet and CSV CLI tool. This tool would sanitize the data and verify that it was of the correct format before entering the pipeline."
                          + " It was able to split and concatenate multiple files in order to allow the CS team to manually inspect the data. After the introduction of" 
                          + " this tool it reduced the CS teams overhead by 50+ weekly and is now being integrated into the main app. Another tool that I made for the CS"
                          + " team as an admin interface which would allow manual overrides to each of the customers accounts with options for manual entry into the accounts."
                          + " Some example operations included adding and deleting users, changing the server that they were accessing, and altering the jobs that they"
                          + " were running. I learned about Azure AD, Bash, and Terraform through the development of a backup disk cleanup script which would save" 
                          + " snapshots from specific time periods to create a chronological buffer. Finally, I learned about the importance of robust code through working"
                          + " with the company CISO to develop critical security features that directly affect the end users.";
const PLASTIC_MOBILE_TEXT = "Working on an innovation team was a lot of fun because I was given complete freedom to experiment and take my projects in whichever"
                           + " direction I desired. I worked on an Android application that utilized Google's ArCore to control a Roomba. The end product was a"
                           + " coffee delivering robot where the users would simply press a button on their phone ordering coffee and the Roomba would take care of the" 
                           + " rest. With the Android device attached to the top of the Roomba, the device was able to determine its position within the office through"
                           + " the use of ArCore and image recognition algorithms. QR codes were placed around the office and the application was able to triangulate"
                           + " its position in the office based on the codes that were visible. After implementing a path finding algorithm and a simple command queue,"
                           + " the Roomba was able to autonomously drive around the office and deliver coffee.";                              
const PLAYLIST_TEXT = "Every Monday and Friday Spotify will release a custom playlist for all of their users with 30 curated songs for you to listen to. I honestly look"
                      + " forward to when my new playlists come out and I always make it a point to listen to all of the songs in them. My music listening has gotten to the"
                      + " point where I need even more new music to listen to, so I decided to give myself a custom playlist everyday. I set up a Node.js server running"
                      + " on my AWS EC2 instance which runs a job everyday at 2am. In this job it uses Spotify's API to find my top songs and top artists from the past 6 months,"
                      + " select 2 songs and 2 artists at random from those lists, finds 50 songs that are similar to the artists and songs from my top list, then places"
                      + " them in my playlist. In this project I learnt about the OAuth2 flow through using Spotify's API as well as what is required to run a job daily"
                      + " on a remote server.";
const VIBER_TEXT = "";
const WHITEBOARDS_TEXT = "";
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
                      + " used web scraping for the first time ever. I used an online database which contained all of the Pokemon's statistics, sprites, and move information."
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
            <Row id="Education" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '55%', margin: '0', display: 'inline-block'}}>
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
                  <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>{EDUCATION_TEXT}</p>
                </Row>
                <Row style={{ margin: '0 0 10px 0' }}>
                  <div className="shadow" style={{ marginLeft: '2%', marginRight: '0' }}><p style={{ fontSize: '2.5vw' }}>Important Courses</p></div>
                </Row>
                <Row style={{ margin: '0' }}>
                  <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'left'}}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- ECE 105 | Fundamentals of Programming (100%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- ECE 108 | Discrete MAthematics and Logic 1 (94%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- ECE 124 | Digital Circuits  and Systems (87%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- ECE 104 | Linear Circuits (86%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- CS 241 | Foundations of Sequential Programs (91%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- CS 245 | Logic and Computation (86%)</p>
                  </Col>
                  <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- ECE 222 | Digital Computers (89%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- CS 240 | Data Structures and Data Management (79%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- CS 247 | Software Engineering Principles (83%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- CS 348 | Intro. to Database Management (97%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- MATH 239 | Intro. to Combinatorics (80%)</p>
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>- STAT 231 | Statistics (83%)</p>
                  </Col>
                </Row>
              </Col>
              <Col style={{width: '45%', margin: '0', display: 'inline-block', float: 'right'}}>
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
            <Row id="TechSkills" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '50%', margin: '0', display: 'inline-block'}}>
                <Row style={{width: '100%', margin: '1% 0'}}>
                  <img src={collage} style={{ marginLeft: '2%' }} alt="languages, tools, and frameworks" width='98%' />
                </Row>
              </Col>
              <Col style={{width: '50%', margin: '0', display: 'inline-block', float: 'right', padding: '0 2%'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ width: '100%', textAlign: 'center' }}><p>Technical Skills</p></div></Row>
                <Row style={{ margin: '0', textAlign: 'center'}}>
                  <p style={{ fontSize: '2rem', marginRight: '2%'}}>{TECHNICAL_SKILLS_TEXT}</p>
                </Row>
                <Row style={{ margin: '0 0 10px 0' }}>
                  <div className="shadow" style={{ width: '100%', textAlign: 'center' }}><p style={{ fontSize: '2.5vw' }}>Languages, Tools, and Frameworks</p></div>
                </Row>
                <Row style={{margin: '0 8%', width: '100%'}}>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'left'}}>
                    <p style={{ fontSize: '2rem'}}>- Java</p>
                    <p style={{ fontSize: '2rem'}}>- C++</p>
                    <p style={{ fontSize: '2rem'}}>- Python</p>
                    <p style={{ fontSize: '2rem'}}>- JavaScript</p>
                    <p style={{ fontSize: '2rem'}}>- WebRTC</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'left'}}>
                    <p style={{ fontSize: '2rem'}}>- Bash</p>
                    <p style={{ fontSize: '2rem'}}>- Github</p>
                    <p style={{ fontSize: '2rem'}}>- AWS</p>
                    <p style={{ fontSize: '2rem'}}>- Azure</p>
                    <p style={{ fontSize: '2rem'}}>- JDBC</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block', float: 'left'}}>
                    <p style={{ fontSize: '2rem'}}>- Apache Flink</p>
                    <p style={{ fontSize: '2rem'}}>- Springboot/Spring</p>
                    <p style={{ fontSize: '2rem'}}>- Node.js</p>
                    <p style={{ fontSize: '2rem'}}>- React</p>
                    <p style={{ fontSize: '2rem'}}>- Docker</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block'}}>
                    <p style={{ fontSize: '2rem'}}>- Flask</p>
                    <p style={{ fontSize: '2rem'}}>- Thymeleaf</p>
                    <p style={{ fontSize: '2rem'}}>- PostgreSQL</p>
                    <p style={{ fontSize: '2rem'}}>- MongoDB</p>
                    <p style={{ fontSize: '2rem'}}>- HTML</p>
                  </Col>
                  <Col style={{width: 'max-content', margin: '0 1%', display: 'inline-block'}}>
                    <p style={{ fontSize: '2rem'}}>- MySQL</p>
                    <p style={{ fontSize: '2rem'}}>- Firebase</p>
                    <p style={{ fontSize: '2rem'}}>- REST</p>
                    <p style={{ fontSize: '2rem'}}>- Socket Connections</p>
                    <p style={{ fontSize: '2rem'}}>- CSS/SCSS</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row id="IndExp" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '60%', margin: '0', display: 'inline-block'}}>
                <Row style={{ margin: '0' }}><div className="shadow" style={{ marginLeft: '2%' }}><p>Industry Experience</p></div></Row>
                <Row style={{ margin: '0' }}>
                  <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>
                  Being in Software Engineering at UWaterloo, I am given 6 co-op opportunities, each being 4 months in lenght. This means that I will graduate school already having 2 full years of industry experience under my belt. At this point in my career, I already have over a full year of industry experience.
                  </p>
                </Row>
                <Row style={{ margin: '2% 0 0 1%' }}>
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
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>{D2L_TEXT}</p>
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
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>{MINDBRIDGE_TEXT_2}</p>
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
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>{MINDBRIDGE_TEXT_1}</p>
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
                    <p style={{ fontSize: '2rem', color: 'white', marginLeft: '2%'}}>{PLASTIC_MOBILE_TEXT}</p>
                  </Row>
                </Row>
              </Col>
              <Col style={{width: '40%', margin: '0', display: 'inline-block', float: 'right'}}>
              <Document file={resume}>
                <Page scale="1.17" pageNumber={1} />
              </Document>
              </Col>
            </Row>
            <Row id="PerProj" style={{width: '100%', margin: '0', height: 'max-content'}}>
              <Col style={{width: '100%', margin: '0'}}>
                <Row className="centeredRow">
                  <div className="shadow"><p>Personal Projects</p></div>
                </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>Learning how to code has forced me to look at the world through a new lense. I actively analyses the problems in my life and seek to solve them, and by solve them I of course mean solve them with code. If the tool that I am looking for does not exist, I just go and create it myself. So here are some of the problems that I have solved in my life!
                    <br/>
                    Click on the project headers to be taken to the code or the deployed application.</p>
                  </Row>
                <Row style={{width: '100%', margin: '1% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/ethanzohar/spotify-playlist-generator" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Spotify Playlist Generator</p></a></div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>{PLAYLIST_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/ethanzohar/Viber" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Viber</p></a></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={viberStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Viber streamer view" width='48.5%' />
                    <img src={viberListen} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Viber listener view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>{VIBER_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://whiteboards.tech" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Whiteboards.tech</p></a></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={whiteboards} style={{ margin: '0 25.75%' }} alt="Whiteboards.tech app" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>{WHITEBOARDS_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://screenshare.pro" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Screenshare.pro</p></a></div>
                  </Row>
                  <Row style={{width: '100%', margin: '1% 0'}}>
                    <img src={screenshareStream} style={{ marginRight: '0.5%', marginLeft: '1%' }} alt="Screenshare.pro streamer view" width='48.5%' />
                    <img src={screenshareWatch} style={{ marginRight: '1%', marginLeft: '0.5%' }} alt="Screenshare.pro watcher view" width='48.5%' />
                  </Row>
                  <Row style={{ width: '90%', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>{SCREENSHARE_TEXT}</p>
                  </Row>
                </Row>
                <Row style={{width: '100%', margin: '2% 0 0 0'}}>
                  <Row className="centeredRow">
                    <div className="shadow"><a href="https://github.com/Computer-Kids-Club/pokeman" className="cancelATag" target="_blank"><p style={{ fontSize: '3vw' }}>Pokémon Online Battle Simulator</p></a></div>
                  </Row>
                  <Row style={{ width: '90%', margin: '1% auto 0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '2rem'}}>{POKEMON_TEXT}</p>
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
