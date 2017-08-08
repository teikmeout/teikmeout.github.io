import React from 'react';
import Projects from './Projects.jsx';
import '../styles/App.css';
import {renderSkills} from './Skills.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      projetcs: [
        {
          name: "Reask, classroom polling",
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving<br/>
          teachers better insight into relevant topics in real time. <br/>
          Node.js + Express.js + React.js + Socket.io + PostgreSQL`,
          imgurl: "not available"
        },
        {
          name: "Crowd Sourcing Bus Mapper",
          desc: `A web application that allows users to contribute to a crowdsourced map of bus-stops <br/>
          that is much simpler than municipal maps. <br/>
          Node.js + Express.js + MongoDB + Google Maps API + geolocation.L`,
          imageurl: "not available"
        },
        {
          name: "Parking Meter Concept App",
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving
          teachers better insight into relevant topics in real time. Node.js + Express.js + React.js + Socket.io + PostgreSQL`,
          imageurl: "not available"
        },
        {
          name: "Reask, classroom polling",
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving
          teachers better insight into relevant topics in real time. Node.js + Express.js + React.js + Socket.io + PostgreSQL`,
          imageurl: "not available"
        },
        {
          name: "Reask, classroom polling",
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving
          teachers better insight into relevant topics in real time. Node.js + Express.js + React.js + Socket.io + PostgreSQL`,
          imageurl: "not available"
        }
      ],
      blogPosts: {},

    }
  } // end of contructor

  toggleHiddenProject(e) {
    console.log('inside allprojs toggle', e.target);
    // hide all projects before showing a new one
    let allprojs = document.querySelectorAll('.proj-cont');
    for (let proj of allprojs) {
      console.log(proj);
      if(!proj.classList.contains('hidden')) {
        proj.classList.remove('fade-in');
        // proj.classList.remove('flex');
        // proj.classList.add('hidden');
        proj.classList.add('m-fadeOut');
        // set a timeout to remove element from display once animation ends
        setTimeout(() => {
          console.log('disapear!')
          proj.classList.remove('flex');
          proj.classList.remove('m-fadeOut');
          proj.classList.add('hidden');
          console.log(proj);
        }, 300)
      }
    }

    e.target.parentNode.nextSibling.classList.toggle('flex');
    e.target.parentNode.nextSibling.classList.toggle('fade-in');
    e.target.parentNode.nextSibling.classList.toggle('hidden');
  }

  // <div  className="proj-title">
  //         <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Reask, classroom polling</p>
  //       </div>
  //         <div className="proj-cont hidden">
  //           <div className="description-container border">
  //           Built a realtime web-app for use in classrooms <br/>
  //           that aggregates students questions giving <br/>
  //           teachers better insight into relevant topics in real time. <br/>
  //           Node.js + Express.js + React.js + Socket.io + PostgreSQL
  //           </div>
  //           <div className="image-container border">image of the project</div>
  //         </div>

  //       <div className="proj-title">
  //         <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Crowd Sourcing Bus Mapper</p>
  //       </div>
  //         <div className="proj-cont hidden">
  //           <div className="description-container border">description of the project</div>
  //           <div className="image-container border">image of the project</div>
  //         </div>

  //       <div className="proj-title">
  //         <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Parking Meter Concept App</p>
  //       </div>
  //         <div className="proj-cont hidden">
  //           <div className="description-container border">description of the project</div>
  //           <div className="image-container border">image of the project</div>
  //         </div>

  //       <div className="proj-title">
  //         <p onClick={(e) => this.toggleHiddenProject(e)}>🥑  Minesweeper</p>
  //       </div>
  //         <div className="proj-cont hidden">
  //           <div className="description-container border">description of the project</div>
  //           <div className="image-container border">image of the project</div>
  //         </div>

  render() {
    return(
      <div className="cont">
        <h1>Jonathan Ahrens</h1>
        <h3>Full Stack Web Developer - Coding Instuctor</h3>
        <code>Brooklyn, NY</code> <br />
        <a href="mailto:ahrens.jonathan@gmail.com">ahrens.jonathan@gmail.com</a>

        <h4>Projects</h4>
        <Projects toggleHiddenProject={(e) => this.toggleHiddenProject(e)}/>

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
