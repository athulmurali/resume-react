import React, {Component} from 'react';
import './App.css';
import VideoPlayerList from "./components/Videos/VideoPlayerList";
import Intro from './components/Intro/Intro'
import Header from "./components/Header/Header";
import Experience from "./components/Exprerience/Experience";
import ProjectList from "./components/Projects/ProjectList";

class App extends Component {
  render() {
    return (


      <div classNameName="container-website" >
            <Header />

          <div className="container-main container" >
              <Experience/>
              <VideoPlayerList />
              <ProjectList/>
          </div>




      </div>
    );
  }
}

export default App;
