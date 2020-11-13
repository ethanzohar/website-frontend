import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotifyHelper from '../helpers/SpotifyHelper';
import DiscoverDailyHelper from '../helpers/DiscoverDailyHelper';

import './discoverDaily.scss';

const images = ["https://i.scdn.co/image/ab67616d0000b273d85dff554553ebeebdc650a9", "https://i.scdn.co/image/ab67616d0000b273c73d04c427f7f7493e955dea", "https://i.scdn.co/image/ab67616d0000b27344efd7fe59657dc005c10d28", "https://i.scdn.co/image/ab67616d0000b273761d333503de1812f39a2286", "https://i.scdn.co/image/ab67616d0000b2731c6f4001446dc505274f91f4", "https://i.scdn.co/image/ab67616d0000b273db4b09703f0faf88d1231fd1", "https://i.scdn.co/image/ab67616d0000b2731c4239fed0b10f47738a0869", "https://i.scdn.co/image/ab67616d0000b2739ea6e351183d2482981900f1", "https://i.scdn.co/image/ab67616d0000b27326d8340fc2dbb03d75f1f62b", "https://i.scdn.co/image/ab67616d0000b273bd454feb8295bfec9cdf210f", "https://i.scdn.co/image/ab67616d0000b2739653ef20a18293320153ef85", "https://i.scdn.co/image/ab67616d0000b273afdf7f3a753f6a1319c849d7", "https://i.scdn.co/image/ab67616d0000b2734a42166d927b3acce345c5c0", "https://i.scdn.co/image/ab67616d0000b27345710bd2a476ed719c79b1e5", "https://i.scdn.co/image/ab67616d0000b27362798273b66773bed25abc36", "https://i.scdn.co/image/ab67616d0000b273cfc824b65a3b1755d98a7e23", "https://i.scdn.co/image/ab67616d0000b273fa1f915caff4e15a6189dfc8", "https://i.scdn.co/image/ab67616d0000b273b4e9cc30c40e502c3472e055", "https://i.scdn.co/image/ab67616d0000b273cac45386e4113b5949476423", "https://i.scdn.co/image/ab67616d0000b2736bcc1c8c3c5326f2852ba4a5", "https://i.scdn.co/image/ab67616d0000b273cdcfbdbe5efe2aa8e93713d2", "https://i.scdn.co/image/ab67616d0000b273e2377c56fc54b3ac57741575", "https://i.scdn.co/image/ab67616d0000b27303fb205a0d3dc7f08b32f844", "https://i.scdn.co/image/ab67616d0000b27376f3759bcbf52582a3562d17", "https://i.scdn.co/image/ab67616d0000b2736402c8c1c4c53e7c56170212", "https://i.scdn.co/image/ab67616d0000b273c33c32740d79ed0ac28d31ef", "https://i.scdn.co/image/ab67616d0000b273808d80990a02b6dbfb09f8d3", "https://i.scdn.co/image/ab67616d0000b27387c28ce0f35503a11d67d6ae", "https://i.scdn.co/image/ab67616d0000b273ad8ce63d52ab1d4bb1b2d14d", "https://i.scdn.co/image/ab67616d0000b273510047f402a3ff9849881e4d", "https://i.scdn.co/image/ab67616d0000b27321afc8d761412a5a781f34db", "https://i.scdn.co/image/ab67616d0000b2735c52a80e55163380daa05218", "https://i.scdn.co/image/ab67616d0000b273ea85a1aa9f1ca5c93cc575d3", "https://i.scdn.co/image/ab67616d0000b2732d86f76b4e373e312f3662b5", "https://i.scdn.co/image/ab67616d0000b2736a421cf1b14a6a9765296768", "https://i.scdn.co/image/ab67616d0000b273f860547bc8ba0c59df4fe2c3", "https://i.scdn.co/image/ab67616d0000b273a4eafa42c62543f48ddfc60c", "https://i.scdn.co/image/ab67616d0000b2732f301d9a1619cedde57ef028", "https://i.scdn.co/image/ab67616d0000b273e6d896d0369324af77f47e9a", "https://i.scdn.co/image/ab67616d0000b2739b07c057c6c7d9390282f0a7", "https://i.scdn.co/image/ab67616d0000b273888ad532d7564d7d17fafe07", "https://i.scdn.co/image/ab67616d0000b2730db4852c6e88163bbc7fe894", "https://i.scdn.co/image/ab67616d0000b273130b05e36a605e493c9e0bad", "https://i.scdn.co/image/ab67616d0000b27302ff14916d70938eb79340d6", "https://i.scdn.co/image/ab67616d0000b2739ad2960fafd7b9656c895578", "https://i.scdn.co/image/ab67616d0000b273e9c5c1d1fb76ff7d1eee9da1", "https://i.scdn.co/image/ab67616d0000b273f640827cf4b0b3670f08132a", "https://i.scdn.co/image/ab67616d0000b2730977615a2557b89edd7a67ce", "https://i.scdn.co/image/ab67616d0000b273a6ffa05455a502911432ae71", "https://i.scdn.co/image/ab67616d0000b2730a63b2cfcdd0f7a20ba01b28"];

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
        const user = await DiscoverDailyHelper.getUser(spotifyUser.id);
        this.setState({ user, spotifyUser });
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
    console.log(success);
    if (success) {
      this.setState({ user: null });
    }
  }

  async getCovers() {
    const albums = await DiscoverDailyHelper.getAlbums(this.state.refreshToken);
    console.log(albums);
  }

  render() {
    return (
      <div className="DiscoverDailyMain">
        <Row style={{width: '100%', margin: '0'}}>
          <Col style={{width: '100%', margin: '0'}}>
            <Col style={{ height: '100vh', width: 'calc(100vw - 80vh)', margin: '0', display: 'inline-block', verticalAlign: 'middle'}}>
              {this.state.user ? (
                <Row style={{ width: '90%', marginLeft: '4%' }}>
                  <h1>Discover Weekly... but daily</h1>
                  <button className="btn btn-primary spotify-button" onClick={this.unsubscribeUser}>Unsubscribe</button>
                </Row>
              ) : (
                <Row style={{ width: '90%', marginLeft: '4%' }}>
                  <h1>Discover Weekly... but daily</h1>
                  <h3>Now that you have linked your Spotify account, it is time to signup!</h3>
                  <h3>Click the button below to get daily music playlists with songs that you'll love!</h3>
                  <h3>Every day you will get a playlist with 30 brand new songs that we've selected based on your listening history.</h3>
                  <button className="btn btn-primary spotify-button" onClick={this.signupUser}>Get your daily playlist</button>
                </Row>
              )}
              
              <button className="btn btn-primary spotify-button" onClick={this.getCovers}>GET COVERS</button>
            </Col>
            <Col style={{ height: '100vh', width: '80vh', margin: '0', backgroundColor: 'blue', display: 'inline-block', float: 'right'}}>
              {[0,4,8,12,16].map((x) => (
                <Row style={{ width: '80vh', margin: '0', height: '20vh' }}>
                  <Col style={{ width: '20vh', height: '20vh', display: 'inline-block'}}>
                    <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                  </Col><Col style={{ width: '20vh', height: '20vh', display: 'inline-block'}}>
                    <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                  </Col><Col style={{ width: '20vh', height: '20vh', display: 'inline-block'}}>
                    <img src={images[Math.floor(Math.random() * images.length)]} style={{ width: '20vh' }}></img>
                  </Col><Col style={{ width: '20vh', height: '20vh', display: 'inline-block'}}>
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
