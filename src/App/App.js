import React, { Component } from 'react';
import Projects from '../Projects/Projects';
import Gists from '../Gists/Gists';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import projects from '../data.js'
import './App.scss';

class App extends Component {
  state = {
    currentPage: 'home',
    gists: [],
    projects: projects
  }

  componentDidMount() {
    this.getGists();
  }

  getGists() {
    // fetch top level list of gists
    fetch('https://api.github.com/users/teikmeout/gists')
      .then(res => res.json())
      .then((gists) => {
        // fetch individual content of each gist
        const gistPromises = gists.map(gist => {
          return fetch(gist.url)
            .then(res => res.json())
            .catch(err => console.log('error fetching individua gists', err))
        })
        // wait to resolve each fetch
        Promise.all([...gistPromises])
          .then(results => {

            this.setState({
              gists: results,
            });
          })
          .catch(err => {
            console.log('error resolving promises', err)
          })
      })
      .catch(err => new Error(err));
  }

  render() {
    const projects = this.state && this.state.projects
    const gists = this.state && this.state.gists

    return (
      <div className="cont">
        <Header />
        <main>
          <Projects
            projects={projects}
          />
          <Gists
            gists={gists}
          />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
