import React from 'react';
// import ReactTooltip from 'react-tooltip';
import './App.css';
import '../styles/normalize.css';

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
          <p onClick={(e) => this.toggleHiddenProject(e)}>Reask, classroom polling</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>Crowd Sourcing Bus Mapper</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>Parking Meter Concept App</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.toggleHiddenProject(e)}>Minesweeper</p>
        </div>
          <div className="project-container hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <h4>Skills</h4>
        <ul>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>AJAX</li>
          <li>React.js</li>
          <li>React-Native.js</li>
          <li>Webpack 2.0</li>
          <li>Node.js</li>
          <li>Restful Routing</li>
          <li>Fetch</li>
          <li>Express.js</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
        </ul>

        <h4>Contact me</h4>
        <ul>
          <li>Linkedin: jonathan-ahrens</li>
          <li>Github: teikmeout</li>
          <li>Email: ahrens.jonathan@gmail.com</li>
        </ul>
      </div>
    )
  }
}

export default App;
