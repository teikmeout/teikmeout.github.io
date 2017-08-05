import React from 'react';

class Projects extends React.Component {


  render() {
    return (
      <div className="projs-cont">


      <div  className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Reask, classroom polling</p>
        </div>
          <div className="proj-cont hidden">
            <div className="description-container border">
            description of the project
            </div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Crowd Sourcing Bus Mapper</p>
        </div>
          <div className="proj-cont hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Parking Meter Concept App</p>
        </div>
          <div className="proj-cont hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        <div className="proj-title">
          <p onClick={(e) => this.props.toggleHiddenProject(e)}>🥑  Minesweeper</p>
        </div>
          <div className="proj-cont hidden">
            <div className="description-container border">description of the project</div>
            <div className="image-container border">image of the project</div>
          </div>

        </div>
    )
  }
}

export default Projects;
