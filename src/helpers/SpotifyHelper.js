require('dotenv').config()

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_API_CLIENT_SECRET;

class SpotifyHelper {
  static generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  static getOAuthCodeUrl(redirect_uri) {
    let scope = 'user-read-private user-top-read user-read-email user-read-playback-state user-modify-playback-state user-read-currently-playing streaming app-remote-control user-library-modify user-library-read user-read-playback-position user-read-recently-played playlist-read-collaborative playlist-modify-private playlist-read-private playlist-modify-public';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=code';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(this.generateRandomString(16));

    return url;
  }

  static async getRefreshToken(code, redirect_uri) {
    let details = {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody
    });
    
    return response.json();
  }

  static async getUserInfo(access_token) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      Accepts: 'application/json',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + access_token
      }
    })

    return response.json();
  }
}

module.exports = SpotifyHelper;