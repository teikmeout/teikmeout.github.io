import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <h3>Contact</h3>
      <div className="contact-info"><span aria-label="avo" role="img">🍥</span> Linkedin: <a className="bottom-link" href="https://www.linkedin.com/in/ahrens-jonathan/">ahrens-jonathan</a></div>
      <div className="contact-info"><span aria-label="avo" role="img">🍥</span> Github: <a className="bottom-link" href="https://github.com/teikmeout">teikmeout</a></div>
      <div className="contact-info"><span aria-label="avo" role="img">🍥</span> Email: <a className="bottom-link" href="mailto:ahrens.jonathan@gmail.com">ahrens.jonathan@gmail.com</a></div>
      <br/>
      <small>Learn about deploying create-react-app and "gh-pages user page" on my <a href="https://github.com/teikmeout/teikmeout.github.io/blob/create-react-app/README.md">README</a></small>
    </footer>
  )
}

export default Footer;
