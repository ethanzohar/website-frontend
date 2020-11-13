require('dotenv').config()

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

class DiscoverDailyHelper {
  static async signupUser(userId, refreshToken) {
    const response = await fetch(BACKEND_URI + '/api/discover-daily/subscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId, refreshToken
      })
    })

    return response.json();
  }

  static async unsubscribeUser(userId, refreshToken) {
    const { accessToken } = await this.getAccessToken(refreshToken); 

    const response = await fetch(BACKEND_URI + '/api/discover-daily/unsubscribe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId, accessToken
      })
    })

    return response.json();
  }

  static async getUser(userId) {
    const response = await fetch(`${BACKEND_URI}/api/discover-daily/getUser/${userId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    
    return response.json();
  }

  static async getAlbums(refreshToken) {
    const { accessToken } = await this.getAccessToken(refreshToken); 
    const response = await fetch(`https://api.spotify.com/v1/me/tracks?limit=50`, {
      Accepts: 'application/json',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
    });

    const j = await response.json();
    console.log(j)
    const albums = j.items.map((x) => x.track.album.images[0].url);
    return albums;
  }

  static async getAccessToken(refreshToken) {
    const response = await fetch(BACKEND_URI + '/api/discover-daily/accessToken', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken
      })
    })

    return response.json();
  }
}

export default DiscoverDailyHelper;