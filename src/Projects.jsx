import React from 'react';
import './Projects.css';

function Projects(props) {

  console.log('running projects! ', props);
  return (
    props.projects.map((el, i) => {
      return (
        <div key={"cont"+i} className="whole-proj">
          <div  className="proj-title" key={"proj-title"+i}>
            <h4 key={"title"+i} className="proj-h4"><span key={"avo"+i} aria-label="avo" role="img">🥑 </span>{el.name}</h4>
          </div>
          <div key={"proj-cont"+i} className="proj-cont hidden">
              <div key={"desc-cont"+i} className="desc-cont">
                {el.desc}
              </div>
              <div>
                <small>- {el.tech}</small><br/>
              </div>
              <div className="proj-link">
                <small><a href={el.github}>{el.link}</a></small>
              </div>
              <div className="proj-gh">
                <small><a className="link" href={el.github}>{el.github}</a></small>
              </div>
            {/*<div key={"img-cont"+i} className="img-cont"><small key={"small-img-desc"+i}>{el.imageurl}</small></div>*/}
          </div>
        </div>
    )
    })
  )
}

export default Projects;
