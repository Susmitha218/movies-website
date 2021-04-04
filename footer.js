import React from "react";


const footer= () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className='row'>
          <div className="col">
            <h4>Must Watch Movies</h4>
            <ul className="list-unstyled">
              <li>Avengers</li>
              <li>Civil War</li>
              <li>Lord of War</li>
              
              </ul>
              </div>
              <div className="col">
                <h4>Popular English Movies</h4>
                <ul className="list-unstyled">
                  <li>Avengers</li>
                  <li>Lord of War</li>
                  <li>War of the Worlds</li>
                  <li>War Horse</li>
                </ul>
              </div>
              </div>
              <div className="row">
                <p className="col-sm">
                  &copy;{new Date().getFullYear()}Ahaa Movies|All rights reserved|Terms Of Service|Privacy
                </p>
              </div>
              </div>
              </div>
  );
              
  }
            
              
             export default footer;