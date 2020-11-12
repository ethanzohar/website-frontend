import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotifyHelper from '../helpers/SpotifyHelper';
import DiscoverDailyHelper from '../helpers/DiscoverDailyHelper';

import './discoverDaily.scss';

class DiscoverDaily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      userId: null,
      refreshToken: null
    }
  }

  sendToLogin() {
    window.location = window.location.origin + '/discover-daily/login';
  }

  async UNSAFE_componentWillMount() {
    const code = localStorage.getItem('discoverDaily_code');
    const access_code = localStorage.getItem('discoverDaily_accessCode');

    if (access_code) {
      const userId = (await SpotifyHelper.getUserInfo(access_code)).id;

      if (userId) {
        const user = await DiscoverDailyHelper.getUser(userId);

        if (!user) {
          const { access_token, refresh_token } = await SpotifyHelper.getRefreshToken(access_code, window.location.origin + '/discover-daily/redirect');
          localStorage.setItem('discoverDaily_accessCode', access_token);
  
          if (!access_token) this.sendToLogin();
          
          const userId = (await SpotifyHelper.getUserInfo(access_token)).id;
          this.setState({ user, userId, refreshToken: refresh_token });
        } else {
          this.setState({ user });
        }
      } else if (code) {
        const { access_token, refresh_token } = await SpotifyHelper.getRefreshToken(code, window.location.origin + '/discover-daily/redirect');
        localStorage.setItem('discoverDaily_accessCode', access_token);

        if (!access_token) this.sendToLogin();
        
        const userId = (await SpotifyHelper.getUserInfo(access_token)).id;
        const user = await DiscoverDailyHelper.getUser(userId);
        this.setState({ user, userId, refreshToken: refresh_token });
  
        if (user) await DiscoverDailyHelper.signupUser(userId, refresh_token);
      } else {
        this.sendToLogin();
      }
    } else if (code) {
      const { access_token, refresh_token } = await SpotifyHelper.getRefreshToken(code, window.location.origin + '/discover-daily/redirect');
      localStorage.setItem('discoverDaily_accessCode', access_token);

      if (!access_token) this.sendToLogin();
      
      const userId = (await SpotifyHelper.getUserInfo(access_token)).id;
      const user = await DiscoverDailyHelper.getUser(userId);
      this.setState({ user, userId, refreshToken: refresh_token });

      if (user) await DiscoverDailyHelper.signupUser(userId, refresh_token);
    } else {
      this.sendToLogin();
    }
  }
  
  async signupUser () {
    const user = await DiscoverDailyHelper.signupUser(this.state.userId, this.state.refresh_token);
    this.setState({ user });
  }

  render() {
    return (
      <div className="DiscoverDailyMain">
        <Row style={{width: '100%', margin: '0'}}>
          <Col style={{width: '100%', margin: '0'}}>
            <Col style={{ height: '100vh', width: '60%', margin: '0', display: 'inline-block', verticalAlign: 'middle'}}>
              {!this.state.user ? (
                <Row style={{ width: '90%', marginLeft: '4%' }}>
                  <h1>USER EXISTS</h1>
                </Row>
              ) : (
                <Row style={{ width: '90%', marginLeft: '4%' }}>
                  <h1>Discover Weekly... but daily</h1>
                  <h3>Link your Spotify account by logging in below to get access to daily music playlists curated to you.</h3>
                  <button className="btn btn-primary spotify-button" onClick={this.signupUser}>Get your daily playlist</button>
                </Row>
              )}
            </Col>
            <Col style={{ height: '100vh', width: '40%', margin: '0', backgroundColor: 'blue', display: 'inline-block'}}></Col>
          </Col>
        </Row>
    </div>
    );
  }
}

export default DiscoverDaily;
