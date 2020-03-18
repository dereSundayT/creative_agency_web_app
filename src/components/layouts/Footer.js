import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center">
      <hr style={{marginLeft:'15px',marginRight:'15px'}}/>
       <section className='py-5'>
<div className='container'>
  <div className='row'>

    <div className='col-md-3'>
     <span> Creative Agency <sup className='sup'>x</sup> </span>
      <p className="text-purple">
        A design agency shaping ideas into products. We help startups <br/>
        and enterprises invent, build and launch.
      </p>
    </div>


    <div className='col-md-3'>
      <h4>
        <b>Services</b>
      </h4>
      <ul className='list-unstyled mt-3 color_purple'>
        <li>
          <a href='/' >
            Web Design
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/' >
            App Design
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/' >
            Photography
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/' >
            Videography
          </a>
        </li>
      </ul>
    </div>

    <div className='col-md-3'>
      <h4>
        <b>Support</b>
      </h4>
      <ul className='list-unstyled mt-3 color_purple'>
        <li>
          <a href='/'>
            Get Support
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/' >
            Contact
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/' >
            Privacy Policy
          </a>
        </li>
        <div className='mb-2'></div>
        <li>
          <a href='/'>
            Pricing
          </a>
        </li>
      </ul>
    </div>



    <div className='col-md-3'>
      <h4>
        <b>social</b>
      </h4>
      <ul className='list-unstyled mt-3 social'>
          <li><a href="/"> </a> <i className='fab fa-facebook-f fa-1x'></i> </li>
          <li><a href="/"> </a> <i className='fab fa-twitter    fa-1x'></i>  </li>
          <li><a href="/"> </a> <i className='fab fa-instagram    fa-1x'></i>  </li>
          <li><a href="/"> </a>  <i class="fab fa-linkedin-in"></i> </li>
      
    
      </ul>
    </div>
  </div>
</div>
</section>
<hr style={{marginLeft:'15px',marginRight:'15px'}}/>
<p className='text-purple'> &copy; frontendtest | All rights reserved 2020</p>

</footer>
  );
};


export default Footer;
