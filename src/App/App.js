import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import Gists from '../Gists/Gists';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  state = {
    currentPage: 'home',
    gists: [],
  }

  componentDidMount() {
    console.log('mounted');
    this.getGists();
  }

  getGists() {
    fetch('https://api.github.com/users/teikmeout/gists')
      .then(res => res.json())
      .then((gists) => {
        console.log('the gists -> ', gists)
        this.setState({
          gists,
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="cont border">
        <Header />
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
