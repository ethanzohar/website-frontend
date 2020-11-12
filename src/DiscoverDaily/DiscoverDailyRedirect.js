import React, { Component } from 'react';

class DiscoverDailyRedirect extends Component {
  UNSAFE_componentWillMount() {
    const paramQuery = new URLSearchParams(this.props.location.search);

    localStorage.setItem('discoverDaily_code', paramQuery.get('code'));

    window.location = window.location.origin + '/discover-daily';
  }

  render() {
    return (
      <div className="SpotifyLoginRedirect">
          <h1>Should Redirect</h1>
      </div>
    );
  }
}

export default DiscoverDailyRedirect;
