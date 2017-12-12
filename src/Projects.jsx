import React from 'react';
import './Projects.css';

function Projects(props) {

  console.log('running projects! ', props);
  return (
    props.projects.map((el, i) => {
      return (
        <div key={"cont"+i} className="whole-proj">
          <div  className="proj-title" key={"proj-title"+i}>
            <p key={"title"+i} onClick={(e) => this.props.toggleHiddenProject(e)}><span key={"avo"+i} aria-label="avo" role="img">🥑 </span>{el.name}</p>
          </div>
          <div key={"proj-cont"+i} className="proj-cont hidden">
              <div key={"desc-cont"+i} className="desc-cont">
                <small key={"small"+i}>
                  {el.desc}
                </small>
              </div>
            <div key={"img-cont"+i} className="img-cont">{el.imageurl}</div>
          </div>
        </div>
    )
    })
  )
}

export default Projects;
