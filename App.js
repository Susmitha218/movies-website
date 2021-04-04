

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeadings from './components/MovieListHeadings';
import Topbar from './components/Topbar';
import Footer from './components/footer';
import SearchBar from './components/SearchBar';


const App = () => {

  const [movies, setMovies] = useState([]);
  const [SearchValue, setSearchValue] = useState('');
    
  const getMovieRequest=async()=>{
  const url='https://www.omdbapi.com/?apikey=45f0782a&s=war';
  const response= await fetch(url);
  const responseJson= await response.json();
  console.log(responseJson);
  setMovies(responseJson.Search);

};
useEffect(()=>{
  getMovieRequest(SearchValue);

}, [SearchValue]);
  return (
    
  <div className='container-fluid movie-app'>
   <Topbar/>
   
      <div className='row d-flex align-items-centre mt-4 mb-6'>
        
        <searchbox SearchValue={SearchValue} setSearchValue={setSearchValue}/>
        
        <MovieListHeadings heading='English Movies'/>
        <SearchBar/>
      </div>

      
    
    <div className='row'>
      <MovieList movies={movies} />
      
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  );
};

export default App;






//     {
//       Title: "Avengers: Infinity War",
//       Year: "2018",
//       imdbID: "tt4154756",
//       Type: "movie",
//       Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//     },
//     {
//       Title: "Captain America: Civil War",
//       Year: "2016",
//       imdbID: "tt3498820",
//       Type: "movie",
//       Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
//     },
//     {
//       Title: "World War Z",
//       Year: "2013",
//       imdbID: "tt0816711",
//       Type: "movie",
//       Poster: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
//     },
//     {
//       Title:"War of the Worlds",
//     Year:"2005",
//     imdbID:"tt0407304",
//     Type:"movie",
//     Poster:"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
//   },
//   {
//     Title:"Lord of War",
//   Year:"2005",
//   imdbID:"tt0399295",
//   Type:"movie",
//   Poster:"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},
// {
//   Title:"War for the Planet of the Apes",
// Year:"2017",
// imdbID:"tt3450958",
// Type:"movie",
// Poster:"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"},
// {
//   Title:"War Dogs",
// Year:"2016",
// imdbID:"tt2005151",
// Type:"movie",
// Poster:"https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
// },
// {
//   Title:"This Means War",
// Year:"2012",
// imdbID:"tt1596350",
// Type:"movie",
// Poster:"https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"
// },
// {
//   Title:"War Horse",
// Year:"2011",
// imdbID:"tt1568911",
// Type:"movie",
// Poster:"https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"},
// {
//   Title:"Charlie Wilson's War",
//   Year:"2007",
//   imdbID:"tt0472062",
//   Type:"movie",
//   Poster:"https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"}





// import React from 'react';
// import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from './components/Banner';
// import Topbar from './components/Topbar';

// const App = () => {
//     return (
//     <BrowserRouter>



//     <div> 
//         <Topbar/>
//         <Banner/>
//           {/* //<nav>
//             //<ul>
//                 //<li> <Link to="/HOME"> HOME</Link></li>
//                 //<li> <Link to="/CONTACT">CONTACT</Link></li>
//                 //<li> <Link to="/ABOUT">ABOUT</Link></li>
//                 //<li> <Link to="/USERS">USERS</Link></li>
//             //</ul>
//         //</nav>   */}
//         <Switch>
//             <Route exact path="/about" component={ABOUT}/>
//             <Route exact path="/contact" component={CONTACT}/>
//             <Route exact path="/home" component={HOME}/>
//             <Route exact path="/users" component={USERS}/>
//             <Route exact path="/Location" component={LOCATION}/>
//             <Route exact path="/Services" component={SERVICES}/>
//             <Route component={()=><h1>page not found</h1>}/>
//         </Switch>
//     </div> 
// </BrowserRouter>
//      );
// }

// export default App ;
// const ABOUT = () => {
//     return ( <h1>About page</h1> );
// }


// const CONTACT = () => {
//     return ( <h1>Get in touch</h1> 

//          );
// }

// const HOME = () => {
//     return ( <h1>home page</h1>
//      );
// }
// const USERS = () => {
//     return ( <h1>users page</h1> );
// }
// const LOCATION = () => {
//     return ( <h1>Location page</h1> );
// }
// const SERVICES = () => {
//     return ( <h1>Services page</h1> );
// }

























// import Banner from "./components/Banner/Banner"
// import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
// import Home from './components/Home/Home';

// const App = () => {
//   return ( 
//   <BrowserRouter>
//   <div>
//     <TopBar/>
//     {/* <Banner
//       title="Welcome to Routing"
//       description="We will be using BrowserRouter, Switch, Route, Link"
//     /> */}
//     <Switch>
//       <Route exact path="/"  component={Home}/>
//       <Route  path="/about"  component={About}/>
//       <Route  path="/contact"  component={Contact}/>
//       <Route  exact path="/users"  component={Users}/>
//       <Route  path="/user/:userId"  component={UserDetails}/>
//       <Route path="/signin" render={(props) => <SignIn {...props} name={"Details for Sign IN"}/>}/>
//       <Route path="/signup" component={SignUp}/>
//       <Route component={() => <h1>Page Not Found</h1>}/>
//     </Switch>
//   </div>
//   </BrowserRouter> );
// }

// export default App;
// const About = () => {
//   return ( <h1>About Page</h1> );
// }
// const Home = () => {
//   return ( <h1>Home Page</h1> );
// }

// const Contact = () => {
//   return ( <h1>Contact Page</h1> );
// }
// const Users = () => {
//   return ( <h1>Users Page</h1> );
// }

// const UserDetails = (props) => {
//   const {userId} = useParams()
//   debugger
//   return ( <h1>User Details {userId}</h1> );
// }