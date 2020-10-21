import React, { Component } from 'react';
import './App.css';

const stateKey = 'spotify_auth_state';
const paramsKey = "spotify_auth_params";
const userInfoKey = "spotify_user_info";
const pageKey = 'spotify_page_key';

class SpotifyLoginRedirect extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const params = getHashParams();
    console.log(params);

    localStorage.setItem(paramsKey, JSON.stringify(params));

    var url = window.location.origin;

    if (params.access_token && (params.state == null || params.state !== localStorage.getItem(stateKey))) {
      url += "/error";
    } else {
      url += "/spotify/";
      url += localStorage.getItem(pageKey);

      getUserInfo(params.access_token);
    }

    console.log("TOKEn")
    console.log(params.access_token)
    console.log(window.location.origin + '/spotify/login/redirect');

    var details = {
      'grant_type': 'authorization_code',
      'code': params.access_token,
      'redirect_uri':  window.location.origin + '/spotify/login/redirect'
    }

    var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

    fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa("53a649e024504a91898d19070924df56:14e30b2109754978a3791c232ad69428"),
    },
    body: formBody
  }).then((r) => r.json())
  .then((b) => {
      console.log(b);
  });

    // window.location = url;
  }

  render() {
    return (
      <div className="SpotifyLoginRedirect">
            <h1>Should Redirect</h1>
      </div>
    );
  }
}

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

async function getUserInfo(access_token) {
  const response = await fetch('https://api.spotify.com/v1/me', {
    Accepts: 'application/json',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  })
  
  localStorage.setItem(userInfoKey, JSON.stringify(await response.json()));
}

export default SpotifyLoginRedirect;
