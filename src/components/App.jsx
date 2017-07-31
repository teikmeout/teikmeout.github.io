import React from 'react';
// import ReactTooltip from 'react-tooltip';
// import '../styles/normalize.css';
import '../styles/App.css';
import {renderSkills} from './Skills.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      blogPosts: {},

    }
  } // end of contructor

  // helps toggle the description of projects
  toggleHiddenProject(e) {
    console.log('inside allprojs toggle');
    // hide all things
    let allprojs = document.querySelectorAll('.project-container');
    for (let proj of allprojs) {
      console.log(proj.classList.contains('hidden'));
      if(proj.classList.contains('hidden')) {
      }
    }
    e.target.parentNode.nextSibling.classList.toggle('flex')
    e.target.parentNode.nextSibling.classList.remove('hidden')
  }

  render() {
    return(
      <div className="cont">
        <h1>Jonathan Ahrens</h1>
        <h3>Full Stack Web Developer</h3>
        <code>Brooklyn, NY</code> <br />
        <a href="tel:917-302-5196" className="phone"><small>917-3025196</small></a>

        <h4>Projects</h4>
        <div  className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Reask, classroom polling</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Crowd Sourcing Bus Mapper</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Parking Meter Concept App</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Minesweeper</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        {renderSkills()}

        <h4>Contact me</h4>
          <div>🍥 Linkedin: jonathan-ahrens</div>
          <div>🍥 Github: teikmeout</div>
          <div>🍥 Email: ahrens.jonathan@gmail.com</div>
      </div>
    )
  }
}

export default App;
