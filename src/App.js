import React, {Component} from 'react';
import './App.css';
import VideoPlayerList from "./components/Videos/VideoPlayerList";
import Intro from './components/Intro/Intro'
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div classNameName="container-fluid" >
          <div className="row">
              <div className="col text-center">
                  asd
              </div>
          </div>
              <Header />
                <Intro/>

              <VideoPlayerList />
      </div>
    );
  }
}

export default App;
