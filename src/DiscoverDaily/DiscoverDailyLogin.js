import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotifyHelper from '../helpers/SpotifyHelper';
import { images } from './images';

import './discoverDaily.scss';

const DiscoverDailyLogin = () => {
  const sendLoginRedirect = () => {
      window.location = SpotifyHelper.getOAuthCodeUrl(window.location.origin + '/discover-daily/redirect');
  }

  return (
    <div className="DiscoverDailyMain">
      <Row style={{width: '100%', margin: '0'}}>
        <Col style={{width: '100%', margin: '0'}}>
            <Col className="discoverDailyLeftColumn">
            <Row style={{ width: '90%', marginLeft: '4%', marginTop: '15%' }}>
              <h1 style={{ margin: '0' }}>Discover Weekly...</h1>
              <h1 style={{ margin: '0 0 3% 0' }}>But Daily</h1>
              <h3>Finding new songs that you love is hard, so let us take care of that for you!</h3>
              <h3>Link your Spotify account by logging in below to get access to daily music playlists curated to you.</h3>
              <button className="btn btn-primary spotify-button" onClick={sendLoginRedirect}>Get your daily playlist</button>
            </Row>
          </Col>
          <Col className='discoverDailyRightColumn'>
            {[0,4,8,12,16].map((x) => (
              <Row className="imageRow">
                <Col className="imageCol">
                  <img src={images[Math.floor(Math.random() * images.length)]} alt="albumImage"></img>
                </Col>
                <Col className="imageCol">
                  <img src={images[Math.floor(Math.random() * images.length)]} alt="albumImage"></img>
                </Col>
                <Col className="imageCol">
                  <img src={images[Math.floor(Math.random() * images.length)]} alt="albumImage"></img>
                </Col>
                <Col className="imageCol">
                  <img src={images[Math.floor(Math.random() * images.length)]} alt="albumImage"></img>
                </Col>
              </Row>
            ))}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

export default DiscoverDailyLogin;
