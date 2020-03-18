import React from "react";
import TeamOne from "../images/teamOne.jpg";
import TeamTwo from "../images/teamTwo.jpg";
import TeamThree from "../images/teamThree.jpg";


const Team = () => {
    return(
        <section className="ftco-section text-center">
            <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section">
            <span className="subheading">Meet The Team</span>
            <h3 className="mb-4 text-purple">great outcome always  relay on <br/> the great foundation</h3>
            </div>
            </div>
            <div className="row">
                <div className="item team  col-md-4">
                    <div className="speaker">
                        <img src={TeamOne} className="img-fluid" alt="Colorlib HTML5 Template" />
                        <div className="text text-center py-3">
                            <h3 className='text-purple'>Paul George</h3>
                            <span className="position grey" >Standard screen generation</span>
                            <ul className="social mt-3">
                                <li><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                                <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                                <li><a href="/"><span className="fab fa-linkedin-in"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item team col-md-4">
                    <div className="speaker">
                        <img src={TeamTwo} className="img-fluid" alt="Colorlib HTML5 Template" />
                        <div className="text text-center py-3">
                            <h3 className='text-purple'>Paul George</h3>
                            <span className="position grey">Standard screen generation</span>
                            <ul className="social mt-3">
                                <li className='mr-3'><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                                <li className='mr-3'><a href="/"><span className="fab fa-twitter"></span></a></li>
                                <li className='mr-3'><a href="/"><span className="fab fa-linkedin-in"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item team col-md-4">
                    <div className="speaker">
                        <img src={TeamThree} className="img-fluid" alt="Colorlib HTML5 Template" />
                        <div className="text text-center py-3">
                            <h3 className='text-purple'>Mike Pens</h3>
                            <span className="position grey">Standard screen generation</span>
                            <ul className="social mt-3">
                                <li className='mr-3'><a href="/"><span className="fab fa-facebook-f"></span></a></li>
                                <li className='mr-3'><a href="/"><span className="fab fa-twitter"></span></a></li>
                                <li className='mr-3'><a href="/"><span className="fab fa-linkedin-in"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>



               
            </div>
            <button className='' style={{borderRadius:'25px',width:'auto', padding:'10px 30px 10px 30px',color:'white',background:'#2e318e'}}> LET'S CATCH ALL</button>

        </section>
   
       
    )
}


export default Team