import React from 'react';
const Topbar = () => {
  return (  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Ahaa</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">MOVIES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">SHOWS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">VIEWS</a>
      </li>
    </ul>
  </div>
</nav>
  );
}
 
export default Topbar ;









// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// const Topbar = () => {
//   return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//       <img
//       src=" https://bulma.io/images/bulma-logo.png"
//       alt=""
//       width="auto"
//       height="24"
//       className="d-line-block align-top"/>

//   </div>
// <a className="navbar-brand" href="#">CCS</a>

//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item ">
//         <Link to="/HOME">
//          <span className="nav-link active">HOME</span>
//         </Link>
        
//       </li>
//       <li className="nav-item">
//       <Link to="/CONTACT">
//          <span className="nav-link active">CONTACT</span>
//         </Link>
        
//       </li>
      
//       <li className="nav-item">
//         <Link to="/USERS">
//          <span className="nav-link active">USERS</span>
//         </Link>
        
        
//       </li>
     
//         <li className="nav-item">
//         <Link to="/SERVICES">
//          <span className="nav-link active">SERVICES</span>
//         </Link>
//         </li>
//         <li className="nav-item">
//         <Link to="/LOCATION">
//          <span className="nav-link active">LOCATION</span>
//         </Link>
//         </li>
//     </ul>
//   </div>
  
// </nav>

//     );
// }
 
// export default Topbar;






// import React, { Component } from 'react';

// const Topbar = () => {
//   return ( 
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//     </div>
//     </nav>
//     );
    
  
  
   
//   );

 
// export default Topbar;




//   import React, { Component } from 'react';
//   <const Topbar = () => {  */}
//      return(<nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
// //     <a className="navbar-brand" href="#">Ahaa</a>
// //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>

// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav mr-auto">
// //         <li className="nav-item active">
// //           <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#">MOVIES</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#">SHOWS</a>
// //         </li>
// //         <li className="nav-item dropdown">
// //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// //             Genres
// //       </a>
// //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
// //             <a className="dropdown-item" href="#">Kids</a>
// //             <a className="dropdown-item" href="#">Action</a>
// //             <a className="dropdown-item" href="#">Commedy</a>
// //             <a className="dropdown-item" href="#">Crime</a>
// //             <a className="dropdown-item" href="#">Romance</a>
// //             <a className="dropdown-item" href="#">Thriller</a>

// //           </div>
// //         </li>
        
// //       </ul>
// // </div>
// //   </nav>
// // );
// // }
//  export default Topbar; 