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
              <div>
                <small>- {el.tech}</small>
              </div>
              <div>
                <small><a href={el.link == 'not deployed' ? '#' : el.link}>{el.link}</a></small>
              </div>
              <div>
                <small><a href={el.link}>{el.github}</a></small>
              </div>
            {/*<div key={"img-cont"+i} className="img-cont"><small key={"small-img-desc"+i}>{el.imageurl}</small></div>*/}
          </div>
        </div>
    )
    })
  )
}

export default Projects;
