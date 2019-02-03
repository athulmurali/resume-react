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


      <div classNameName="container-website" >
            <Header />

          <div className="container-main container" >
              <Experience/>
              <VideoPlayerList />
              <ProjectList projects={PROJECTS_DATA}/>
          </div>




      </div>
    );
  }
}

export default App;
