import React from 'react';

class Projects extends React.Component {


  // function in progress
  renderProjects(props) {
    console.log('inside renderProjects', this.props);
    if(this.props) {
      return this.props.projects.map(() => {
        return (
          <div  className="proj-title">
            <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Reask, classroom polling</p>
            <div className="proj-cont hidden">
              <div className="description-container">
              description of the project
              </div>
              <div className="image-container">image of the project</div>
            </div>
          </div>
          )
      });
    }
  }

  render() {
    return (
      <div className="projs-cont">


        <div  className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Reask, classroom polling</p>
        </div>
        <div className="proj-cont hidden">
            <div className="desc-cont">
              <small>
              Built a realtime web-app for use in classrooms
              that aggregates students questions giving
              teachers better insight into relevant topics in real time.<br/>
              Node.js + Express.js + React.js + Socket.io + PostgreSQL
              </small>
            </div>
          <div className="img-cont"></div>
        </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Crowd Sourcing Bus Mapper</p>
        </div>
          <div className="proj-cont hidden">
            <div className="desc-cont">
              <small>A web application that allows users to contribute
              to a crowdsourced map of bus-stops that is much simpler than
              municipal maps.<br/>
              Node.js + Express.js + MongoDB + Google Maps API + geolocation.
              </small>
            </div>
            <div className="img-cont"></div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Parking Meter Concept App</p>
        </div>
          <div className="proj-cont hidden">
            <div className="desc-cont">
            <small>Created a web application that serves as a digital
            parking meter system using <br/>
            Node.js + Express.js + React.js + GoogleMaps API + PostgreSQL.</small>
            </div>
            <div className="img-cont"></div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Minesweeper</p>
        </div>
        <div className="proj-cont hidden">
          <div className="desc-cont">
          <small>
          Recreated the windows game of Minesweeper with logic of my own.<br/>
          HTML + CSS + jQuery
          </small>
          </div>
          <div className="img-cont"></div>
        </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Youtube Video Syncer</p>
        </div>
        <div className="proj-cont hidden">
          <div className="desc-cont">
          <small>
          Application that allows two users to watch a youtube video at <br/>
          the same time by  synchronizing  of times and actions via <br/>
          Sockets.io + Node.js + Express.js.
          </small>
          </div>
          <div className="img-cont"></div>
        </div>

        </div>
    )
  }
}

export default Projects;
