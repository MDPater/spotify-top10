import React from 'react';
import './spotifyAuth.js'
import './App.css';

function App () {
    return (
      <div className="App">
        <div className="App-header">
          <h3>See your top 10 Tracks/Artists last month</h3>
        </div>
        <div className='login'>
            <button id='login-button' onClick="redirectToSpotifyAuthEndpoint()">Log in with Spotify</button>
            <button id='logout-button' onClick="logout">Logout</button>
        </div>
        <div className='Center'>
          <span id='loggedin'>
            <ul id='tracks'></ul>
            <ul id='artists'></ul>
          </span>
          <h4>Made by Max de Pater</h4>
        </div>
      </div>
    );
}

export default App;
