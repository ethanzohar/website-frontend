import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import HomePage2 from "./HomePage2";
import Endpoints from "./Endpoints";
import SpotifyLogin from "./viber/SpotifyLogin";
import Spotify from "./viber/Spotify";
import Listen from "./viber/Listen";
import Stream from "./viber/Stream";
import Error from "./Error";
import SpotifyLoginRedirect from "./viber/SpotifyLoginRedirect";
import DiscoverDaily from "./DiscoverDaily/DiscoverDaily";
import DiscoverDailySignup from "./DiscoverDaily/DiscoverDailySignup";

function App() {
  document.title = "Ethan Zohar"

  return (
    <BrowserRouter>
      <Route exact path="/old" component={HomePage}></Route>
      <Route exact path="/" component={HomePage2}></Route>
      <Route exact path="/endpoints" component={Endpoints}></Route>
      <Route exact path="/spotify" component={Spotify}></Route>
      <Route exact path="/spotify/login" component={SpotifyLogin}></Route>
      <Route exact path="/spotify/login/redirect" component={SpotifyLoginRedirect}></Route>
      <Route exact path="/spotify/listen" component={Listen}></Route>
      <Route exact path="/spotify/stream" component={Stream}></Route>
      <Route exact path="/discover-daily" component={DiscoverDaily}></Route>
      <Route exact path="/discover-daily/signup" component={DiscoverDailySignup}></Route>
      <Route exact path="/error" component={Error}></Route>
    </BrowserRouter>
  );
}

export default App;
