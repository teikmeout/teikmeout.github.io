import React, { Component } from 'react';
import Projects from './Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      projects: [
        {
          name: "Reask, classroom polling",
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving
          teachers better insight into relevant topics in real time.
          Node.js + Express.js + React.js + Socket.io + PostgreSQL.`,
          imageurl: "image not available",
          link: "http://re-ask.herokuapp.com/",
          github: ""
        },
        {
          name: "Crowd Sourcing Bus Mapper",
          desc: `A web application that allows users to contribute to a crowdsourced map of bus-stops
          that is much simpler than municipal maps.
          Node.js + Express.js + MongoDB + Google Maps API + geolocation.`,
          imageurl: "image not available",
          link: "https://cs-busstop.herokuapp.com/",
          github: ""
        },
        {
          name: "Parking Meter Concept App",
          desc: `Created a web application that serves as a digital parking meter system using Node.js + Express.js + React.js + Google Maps API + PostgreSQL.`,
          imageurl: "image not available",
          link: "http://iparkmyself.herokuapp.com/",
          github: ""
        },
        {
          name: "Grace Hopper Slack Bot",
          desc: `Contributed to a Slackbot that allows students to queue up with TA’s and manages what instructor helps them out. Node.js + Slackbot + MongoDB`,
          imageurl: "image not available",
          link: "not available",
          github: "https://github.com/teikmeout/gracehopper"
        },
        {
          name: "Youtube video syncer",
          desc: `Application that allows two users to watch a youtube video at the same time by  synchronizing  of times and actions via Sockets.io + Node.js + Express.js.`,
          imageurl: "image not available",
          link: "",
          github: ""
        }
      ],
    }
  } // end of contructor

  render() {
    console.log('state ', this.state)
    return (
      <div className="cont">
        <h1>Jonathan Ahrens</h1>
        <h4>Full Stack Web Developer - Coding Instuctor</h4>
        <code>Brooklyn, NY</code> <br />
        <a href="mailto:ahrens.jonathan@gmail.com">ahrens.jonathan@gmail.com</a>

        <h4>Projects</h4>
        <Projects
          projects={this.state.projects}
          />

        <h4>Contact</h4>
          <div><span aria-label="avo" role="img">🍥</span> Linkedin: <a href="https://www.linkedin.com/in/ahrens-jonathan/">jonathan-ahrens</a></div>
          <div><span aria-label="avo" role="img">🍥</span> Github: <a href="https://github.com/teikmeout">teikmeout</a></div>
          <div><span aria-label="avo" role="img">🍥</span> Email: <a href="mailto:ahrens.jonathan@gmail.com">ahrens.jonathan@gmail.com</a></div>
    </div>
    );
  }
}

export default App;
