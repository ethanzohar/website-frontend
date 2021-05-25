import React, { useEffect } from 'react';
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
import ReactGa from 'react-ga';
import './fonts/Gotham.otf';

function App() {
  document.title = "Ethan Zohar"

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
      ReactGa.pageview(window.location.pathname + window.location.search);
    }
  }, [])

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
      <Route exact path="/error" component={Error}></Route>
      <Route path='/whiteboards'
        component={() => { 
            window.location.href = 'https://whiteboard-bf561.web.app/'; 
            return null;
        }}
      />
    </BrowserRouter>
  );
}

export default App;
