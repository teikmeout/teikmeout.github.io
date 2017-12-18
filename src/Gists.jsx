import React from 'react';

function Gists(props) {
  console.log('props in Gists -> ', props.gists);
  return (
    <section>
      <h3>Gists</h3>
      {
        props.gists.length > 0
          ? props.gists.map(x => {
              for (let llave in x.files) {
                return(
                  <a href="{x.url}" key={llave}><p key={"p"+llave}>{llave}</p></a>
                );
              }
          })
          : <h1>{"-"+props.gists.length}</h1>
       }
    </section>
  )
}

export default Gists;
