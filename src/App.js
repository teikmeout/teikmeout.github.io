import React, { Component } from 'react';
import Projects from './Projects';
import Gists from './Gists';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      name: 'Jonathan Ahrens',
      projects: [
        {
          name: 'Reask, classroom polling',
          desc: `Built a realtime web-app for use in classrooms that aggregates students questions giving
          teachers better insight into relevant topics in real time.`,
          tech: 'Node.js + Express.js + React.js + Socket.io + PostgreSQL.',
          imageurl: 'image not available',
          link: 'http://re-ask.herokuapp.com/',
          github: 'https://github.com/teikmeout/reAsk',
        },
        {
          name: 'Crowd Sourcing Bus Mapper',
          desc: `A web application that allows users to contribute to a crowdsourced map of bus-stops
          that is much simpler than municipal maps.`,
          tech: 'Node.js + Express.js + MongoDB + Google Maps API + geolocation.',
          imageurl: 'image not available',
          link: 'https://cs-busstop.herokuapp.com/',
          github: 'https://github.com/teikmeout/CrowdSourcedBusStops',
        },
        {
          name: 'Parking Meter Concept App',
          desc: 'Created a web application that serves as a digital parking meter system.',
          tech: 'Node.js + Express.js + React.js + Google Maps API + PostgreSQL.',
          imageurl: 'image not available',
          link: 'http://iparkmyself.herokuapp.com/',
          github: ',https://github.com/teikmeout/iParkMyself',
        },
        {
          name: 'Grace Hopper Slack Bot',
          desc: `Contributed to a Slackbot that allows students to queue up with TA’s and manages what instructor helps them out.`,
          tech: 'Node.js + Slackbot + MongoDB.',
          imageurl: 'image not available',
          link: 'not deployed',
          github: 'https://github.com/teikmeout/gracehopper',
        },
        {
          name: 'Youtube video syncer',
          desc: `Application that allows two users to watch a youtube video at the same time by  synchronizing  of times and actions.`,
          tech: 'Sockets.io + Node.js + Express.js.',
          imageurl: 'image not available',
          link: 'not deployed',
          github: 'https://github.com/teikmeout/youtubeSocketSync'
        },
      ],
      gists: [],
    }; // end of state
  } // end of contructor

  componentDidMount() {
    console.log('mounted');
    this.getGists();
  }

  getGists() {
    fetch('https://api.github.com/users/teikmeout/gists')
      .then(res => res.json())
      .then((gists) => {
        console.log('the gists -> ', gists);
        this.setState({
          gists,
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  handleHover() {
    this.setState({
      name: this.state.name == 'Jonathan Ahrens' ? 'Taka' : 'Jonathan Ahrens'
    })
  }


  render() {
    return (
      <div className="cont border">
        <header>
          <h1
            onMouseEnter={() => this.handleHover()}
            onMouseLeave={() => this.handleHover()}
          >
            {this.state.name}
          </h1>
          <a className="email" href="mailto:ahrens.jonathan@gmail.com">ahrens.jonathan@gmail.com</a>
        </header>
        <main>
          <h3>Full Stack Web Developer - Coding Instuctor</h3>
          <code>Brooklyn, NY</code>
          <br/>
          <Projects
            projects={this.state.projects}
          />
          <Gists
            gists={this.state.gists}
          />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
