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
          <Col style={{ height: '100vh', width: '60vw', margin: '0', display: 'inline-block', verticalAlign: 'middle'}}>
            <Row style={{ width: '90%', marginLeft: '4%', marginTop: '15%' }}>
              <h1 style={{ margin: '0' }}>Discover Weekly...</h1>
              <h1 style={{ margin: '0 0 3% 0' }}>But Daily</h1>
              <h3 style={{ margin: '0.7% 0' }}>Finding new songs that you love is hard, so let us take care of that for you!</h3>
              <h3 style={{ margin: '0.7% 0' }}>Link your Spotify account by logging in below to get access to daily music playlists curated to you.</h3>
              <button style={{ marginTop: '3%' }} className="btn btn-primary spotify-button" onClick={sendLoginRedirect}>Get your daily playlist</button>
            </Row>
          </Col>
          <Col className='discoverDailyRightColumn'>
            {[0,4,8,12,16].map((x) => (
              <Row style={{ width: 'max-content', margin: '0', height: '20vh' }}>
                <Col style={{ width: '20vh', height: '20vh', display: 'inline-block', float: 'right'}}>
                  <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                </Col>
                <Col style={{ width: '20vh', height: '20vh', display: 'inline-block', float: 'right'}}>
                  <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                </Col>
                <Col style={{ width: '20vh', height: '20vh', display: 'inline-block', float: 'right'}}>
                  <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                </Col>
                <Col style={{ width: '20vh', height: '20vh', display: 'inline-block', float: 'right'}}>
                  <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
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
