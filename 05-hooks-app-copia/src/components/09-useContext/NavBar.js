
import React from 'react';
import { Link } from 'react-router-dom';

// import { AboutScreen } from './AboutScreen';
// import { HomeScreen } from './HomeScreen';
// import { LoginScreen } from './LoginScreen';

export const NavBar = () => {
    
    return (

        <nav>
            <ul >
        
                <li >
                    <Link  to="/about"  > About </Link>
                    {/* <a href="/about" >About</a> */}
                </li>
                <li >
                    <Link  to="/login"  > Login </Link>
                    {/* <a href="/login" >Login</a> */}

                </li>
                <li >
                    <Link  to="/"  > Home </Link>
                    {/* <a href="/home" >Home</a> */}

                </li>
        
            </ul>
        </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //         <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         <a className="nav-link" href="#">Features</a>
    //         <a className="nav-link" href="#">Pricing</a>
    //         <a className="nav-link disabled">Disabled</a>
    //         </div>
    //     </div>
    //     </div>
    // </nav>
      
    //   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //       <div className="container-fluid">
    //           <Link to="/" className="navbar-brand" >Home</Link>
              
    //           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //           <div className="navbar-nav">
    //               {/* <Link className="nav-link active" aria-current="page" to="#">Current</Link> */}
    //               <Link to="/login" className="nav-link" >Login</Link>
    //               <Link to="/about" className="nav-link" >About</Link>
    //               {/* <Link className="nav-link disabled">FAQ</Link> */}
    //           </div>
    //           </div>
    //       </div>
    //   </nav>

  )
}
