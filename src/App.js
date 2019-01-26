import React, {Component} from 'react';
import './App.css';
import VideoPlayerList from "./components/Videos/VideoPlayerList";
import ProjectList from "./components/Projects/ProjectList";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div classNameName="App" >
          <Header/>
          <ProjectList/>
          <VideoPlayerList />
      </div>
    );
  }
}

export default App;
