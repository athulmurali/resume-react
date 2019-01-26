import React, {Component} from 'react';
import './App.css';
import VideoPlayerList from "./components/VideoPlayerList";
import ProjectList from "./components/ProjectList";

class App extends Component {
  render() {
    return (
      <div className="App" >
          <ProjectList/>
          <VideoPlayerList/>
      </div>
    );
  }
}

export default App;


//
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//         Edit <code>src/App.js</code> and save to reload.ø
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//         Learn React
//     </a>
// </header>
