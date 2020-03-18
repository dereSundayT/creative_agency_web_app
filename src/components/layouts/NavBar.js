import React from 'react';

const NavBar = () => {
  return (
    <section className='navbar'>
      	  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container-fluid">
	      <a className="navbar-brand" href="/">agency<span><sup className='sup'>X</sup></span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" 
        aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto navbar-right">
	          <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
	          <li className="nav-item"><a href="/" className="nav-link">Services</a></li>
	          <li className="nav-item"><a href="/" className="nav-link">Project</a></li>
	          <li className="nav-item"><a href="/" className="nav-link">About Us</a></li>
	          <li className="nav-item"><a href="/" className="nav-link">Contact</a></li>
	          <li className="nav-item cta mr-md-2" ><a href="/" className="nav-link" style={{borderRadius:'20px', color:'whitesmoke !important'}}>MY PROJECT</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    </section>
  );
};
export default NavBar;
