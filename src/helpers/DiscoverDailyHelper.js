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
}

export default DiscoverDailyHelper;