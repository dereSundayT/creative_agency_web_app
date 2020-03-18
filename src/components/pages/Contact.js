import React from 'react';

const Contact = () => {
  return (
    <div className="contact d-flex justify-content-center">
        <section className="py-5 ">
    <div className="py-5">
	<div className="row py-5">
            <div className="col-md-12">
            <small id="emailHelp" className="form-text text-muted text-center ">contact us</small>
                <h1 className="text-purple"><b>Have an awesome idea in your mind?</b></h1>
                <h1 className="text-purple"><b>we would love to hear</b></h1>
               
                 <form className="form-inline">
                      <div className=" col-4 form-group  myInput">
                        <input type="email" className="form-control"  placeholder="enter your email" />
                      </div>
                      <button type="submit" className="col-2 float-left" style={{width:'50px',marginRight:'20px',background:'blue',borderRadius:'20px', padding:'5px',color:'whitesmoke'}}>Start</button>
                </form>
                               
            </div>
        </div>
</div>
</section>




 
    </div>
  );
};
export default Contact;
