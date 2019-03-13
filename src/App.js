import React, {Component} from 'react';
import './App.css';
import VideoPlayerList from "./components/Videos/VideoPlayerList";
import Header from "./components/Header/Header";
import Experience from "./components/Exprerience/Experience";
import ProjectList from "./components/Projects/ProjectList";
import {PROJECTS_DATA} from "./data";

class App extends Component {
  render() {
    return (


      <div className="container-website col col-lg-12" >
            <Header />
          <div className="container-main container col col-lg-8 " >
              <Experience/>
              <ProjectList projects={PROJECTS_DATA}/>
              <VideoPlayerList />
          </div>
      </div>
    );
  }
}

export default App;
