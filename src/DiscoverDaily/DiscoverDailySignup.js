import React from 'react';
import '../App.css';

const SpotifyHelper = require('../helpers/SpotifyHelper');

const DiscoverDailySignup = () => {
  const buttonPress = () => {
      window.location = SpotifyHelper.getOAuthCodeUrl(window.location.origin + '/discover-daily');
  }

  return (
    <div className="SpotifyLogin">
      <div className="container">
        <div id="login">
          <h1>This is an example of the Implicit Grant flow</h1>
          <button id="login-button" className="btn btn-primary" onClick={buttonPress}>Log in with Spotify</button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverDailySignup;
