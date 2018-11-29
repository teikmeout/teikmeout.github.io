import React from 'react';

function Gists(props) {
  return (
    <section>
      <h3>Gists</h3>
      {
        props &&
        props.gists &&
        props.gists.length > 0
          ? props.gists.map(gist => {
            const filenamekeys = Object.keys(gist.files)
            const gistTitles = filenamekeys.map(filename => {
              const firstLinebBreak = gist.files[filename].content.indexOf('\n')
              const title = gist.files[filename].content.substring(1, firstLinebBreak)

              return (
                <a href={gist.html_url} key={filename}>
                  <p key={"p"+ filename}>{title}</p>
                </a>
              )
            })
            return gistTitles
          })
          : <h1>loading gists...</h1>
      }
    </section>
  )
}

export default Gists;
