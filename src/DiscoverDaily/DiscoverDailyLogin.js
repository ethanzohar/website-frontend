import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotifyHelper from '../helpers/SpotifyHelper';

import './discoverDaily.scss';

const DiscoverDailyLogin = () => {
  const sendLoginRedirect = () => {
      window.location = SpotifyHelper.getOAuthCodeUrl(window.location.origin + '/discover-daily/redirect');
  }

  return (
    <div className="DiscoverDailyMain">
      <Row style={{width: '100%', margin: '0'}}>
        <Col style={{width: '100%', margin: '0'}}>
          <Col style={{ height: '100vh', width: '60%', margin: '0', display: 'inline-block', verticalAlign: 'middle'}}>
            <Row style={{ width: '90%', marginLeft: '4%' }}>
              <h1>Discover Weekly... but daily</h1>
              <h3>Finding new songs that you love is hard, so let us take care of that for you!</h3>
              <h3>Link your Spotify account by logging in below to get access to daily music playlists curated to you.</h3>
              <button className="btn btn-primary spotify-button" onClick={sendLoginRedirect}>Login with Spotify</button>
            </Row>
          </Col>
          <Col style={{ height: '100vh', width: '40%', margin: '0', backgroundColor: 'blue', display: 'inline-block'}}></Col>
        </Col>
      </Row>
    </div>
  );
}

export default DiscoverDailyLogin;
