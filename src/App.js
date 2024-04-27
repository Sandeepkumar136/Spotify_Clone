import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [keyword, setkeyword]=useState("");
  const [isLoading, setIsLoading]=useState(true)
  const [tracks, setTracks]= useState([]);
  const getTracks= async()=>{
    let data= await fetch(`https://v1.nocodeapi.com/sandeep_kumar136/spotify/BBbkuQfJlkurZJzF/search?q=${keyword}&type=track`);
    let convertedData= await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
  };

  return <>  
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Spotify
    </a>
    <div className="collapse navbar-collapse dflex justify-content-center" id="navbarSupportedContent">
        <input value={keyword} onChange={event=>setkeyword(event.target.value)}
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getTracks} className="btn btn-outline-success">
          Search
        </button>
    </div>
  </div>
</nav>

<div className='container'>
  <div className='row'>
    {
      tracks.map((element)=>{
        return(
          <div className='col-lg-3 col-md-6 py-2' key={element.id}>
            <div className="card">
  <img src={element.album.images[0].url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist: {element.album.artists[0].name}
    </p>
    <p className='card-text'>
      Release date: {element.album.release_date}
    </p>
    <audio src={element.preview_url} controls className='w-100'>

    </audio>
  </div>
</div>

          </div>
        )
      })
    }

  </div>
</div>
  </>;
};

export default App;
