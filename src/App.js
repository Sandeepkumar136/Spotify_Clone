import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [track, setTracks]= useState({});
  const getTracks=()=>{
    
  }

  return <>  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Spotify
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <input
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
    </div>
  </div>
</nav>







  </>;
};

export default App;
