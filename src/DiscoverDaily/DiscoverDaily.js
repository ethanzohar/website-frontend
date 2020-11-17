import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotifyHelper from '../helpers/SpotifyHelper';
import DiscoverDailyHelper from '../helpers/DiscoverDailyHelper';
import { images } from './images';

import './discoverDaily.scss';

class DiscoverDaily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      spotifyUser: null,
      refreshToken: null
    }

    this.signupUser = this.signupUser.bind(this);
    this.unsubscribeUser = this.unsubscribeUser.bind(this);
    this.getCovers = this.getCovers.bind(this);
  }

  sendToLogin() {
    window.location = window.location.origin + '/discover-daily/login';
  }

  async getUserState() {
    const code = sessionStorage.getItem('discoverDaily_code');
    const refreshToken = localStorage.getItem('discoverDaily_refreshToken');

    if (refreshToken) {
      this.setState({ refreshToken });
      const { accessToken } = await DiscoverDailyHelper.getAccessToken(refreshToken);
      
      if (accessToken) {
        const spotifyUser = await SpotifyHelper.getUserInfo(accessToken);
        this.setState({ spotifyUser });

        const user = await DiscoverDailyHelper.getUser(spotifyUser.id);
        if (user.userId) this.setState({ user });

        return;
      }
    }
    
    if (code) {
      const { access_token, refresh_token } = await SpotifyHelper.getRefreshToken(code, window.location.origin + '/discover-daily/redirect');
      localStorage.setItem('discoverDaily_refreshToken', refresh_token);

      if (!access_token) this.sendToLogin();
      
      const spotifyUser = await SpotifyHelper.getUserInfo(access_token);
      const user = await DiscoverDailyHelper.getUser(spotifyUser.id);
      this.setState({ user, spotifyUser, refreshToken: refresh_token });

      if (user) await DiscoverDailyHelper.signupUser(spotifyUser, refresh_token);
      return;
    }

    this.sendToLogin();
  }

  async UNSAFE_componentWillMount() {
    await this.getUserState();
  }
  
  async signupUser () {
    const { user } = await DiscoverDailyHelper.signupUser(this.state.spotifyUser.id, this.state.refreshToken);
    this.setState({ user });
  }

  async unsubscribeUser () {
    const { success } = await DiscoverDailyHelper.unsubscribeUser(this.state.spotifyUser.id, this.state.refreshToken);
    if (success) {
      this.setState({ user: null });
    }
  }

  async getCovers() {
    const albums = await DiscoverDailyHelper.getAlbums(this.state.refreshToken);
    let string = "[";

    for (let i of albums) {
      string += "\"";
      string += i;
      string += "\",\n";
    }

    string += "]";

    console.log(string);
  }

  render() {
    return (
      <div className="DiscoverDailyMain">
        <Row style={{width: '100%', margin: '0'}}>
          <Col style={{width: '100%', margin: '0'}}>
            <Col className="discoverDailyLeftColumn">
              {this.state.user ? (
                <Row style={{ width: '90%', marginLeft: '4%', marginTop: '15%' }}>
                  <h1 style={{ margin: '0' }}>Discover Weekly...</h1>
                  <h1 style={{ margin: '0 0 3% 0' }}>But Daily</h1>
                  <h3 style={{ margin: '1.75% 0' }}>Your next curated playlist is on its way and will be ready tomorrow morning!</h3>
                  <h3 style={{ margin: '1.75% 0' }}>If you don't want to get a daily playlist anymore you can click the button below to unsubscribe.</h3>
                  <button style={{ marginTop: '1%' }}  className="btn btn-primary spotify-button" onClick={this.unsubscribeUser}>Unsubscribe</button>
                </Row>
              ) : (
                <Row style={{ width: '90%', marginLeft: '4%', marginTop: '15%' }}>
                  <h1 style={{ margin: '0' }}>Discover Weekly...</h1>
                  <h1 style={{ margin: '0 0 3% 0' }}>But Daily</h1>
                  <h3 style={{ margin: '1.75% 0' }}>Click the button below to get a daily playlist with 30 songs that we've curated for you based on your listening history.</h3>
                  <button style={{ marginTop: '1%' }} className="btn btn-primary spotify-button" onClick={this.signupUser}>Get your daily playlist</button>
                </Row>
              )}
              
              {/* <button className="btn btn-primary spotify-button" onClick={this.getCovers}>GET COVERS</button> */}
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
}

export default DiscoverDaily;
