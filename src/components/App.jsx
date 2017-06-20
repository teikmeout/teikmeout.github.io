import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      blogPosts: {},

    }
  } // end of contructor

  render() {
    return(
      <div className="container">
        <h1>Jonathan Ahrens</h1>
        <h3>Full Stack Web Developer</h3>
        <small>Brooklyn, NY</small> <br/>
        <a href="tel:917-302-5196" className="phone"><small>917-3025196</small></a>
      </div>
    )
  }
}

export default App;
