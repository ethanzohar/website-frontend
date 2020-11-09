import React, { Component } from 'react';
import '../App.css';

const SpotifyHelper = require('../helpers/SpotifyHelper');
const DiscoverDailyHelper = require('../helpers/DiscoverDailyHelper');

class DiscoverDaily extends Component {
  useQuery() { return new URLSearchParams(this.props.location.search); }

  async componentDidMount() {
    const paramQuery = this.useQuery();
    const code = paramQuery.get('code');

    if (code) {
      const { access_token, refresh_token } = await SpotifyHelper.getRefreshToken(code, window.location.origin + window.location.pathname);
      const userId = (await SpotifyHelper.getUserInfo(access_token)).id;

      const response = await DiscoverDailyHelper.signupUser(userId, refresh_token);
      console.log(response);
    }
  }
  
  buttonPress = () => {
    window.location = SpotifyHelper.getOAuthCodeUrl(window.location.origin + '/discover-daily');
  }

  render() {
    return (
      <div className="SpotifyLoginRedirect">
          <h1>Should Redirect</h1>
          <button id="login-button" className="btn btn-primary" onClick={this.buttonPress}>Log in with Spotify</button>
      </div>
    );
  }
}

export default DiscoverDaily;
