import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      blogPosts: {},

    }
  } // end of contructor

  toggleHiddenProject(e) {
    console.log(e.target.nextSibling);
    e.target.nextSibling.classList.toggle('hidden');
  }

  render() {
    return(
      <div className="container">
        <h1>Jonathan Ahrens</h1>
        <h3>Full Stack Web Developer</h3>
        <code>Brooklyn, NY</code> <br />
        <a href="tel:917-302-5196" className="phone"><small>917-3025196</small></a>
        <h4>Projects</h4>
        <ul>
          <li onClick={(e) => this.toggleHiddenProject(e)}>Minesweeper</li>
            <div className="project-container hidden">
            <small>HTML + Javascript + j.Query.</small>
            <small>Recreated the minesweeper game from scratch.</small>
            </div>
          <li onClick={(e) => this.toggleHiddenProject(e)}>Crowd Sourcing Bus Mapper</li>
            <div className="project-container hidden">
            <small>Node.js + Express.js + EJS(views) + MongoDB.</small>
            <small>Web Application helps a user map his location to determine bus mapping</small>
            </div>
          <li onClick={(e) => this.toggleHiddenProject(e)}>Reask, classroom polling</li>
            <div className="project-container hidden">

            </div>
          <li onClick={(e) => this.toggleHiddenProject(e)}>Parking Meter Concept App</li>
            <div className="project-container hidden">

            </div>
        </ul>

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
