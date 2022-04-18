import React from 'react';
import mypic from '../../../images/mypic.jpg'
const About = () => {
    return (
        <div>
            {/* <img height={250} src={mypic} alt="" />
            <h2>Ahsan Habib</h2> */}
            <div class="container">
    <div class="row d-flex justify-content-center mt-5 mb-5">
        <div class="col-md-6 m-auto">
            <h4 class="bg-info p-2 text-center rounded"></h4>
        </div>
    </div>
    <div class="profile col-md-10 m-auto">
        <div class="jumbotron pt-2 pb-2">
            <div class="title text-center mb-3">

            </div>
            <div class="row ">
                <div class="col-lg-4">
                    <a href=""><img style={{"width":"200px","height":"200px"}} src={mypic} class=" img-fluid rounded-circle" alt=""/></a>
                    
                </div>
                <div class="col-lg-6">
                    
                    
                    <h4>Full Name:MD AHSAN HABIB</h4>
                    
                                <p>Goal:I Love Web Development.i try to learning but not good,
                                    programming hero give me the confidence i can do
                    </p>
                    

                </div>
                
            </div>
        </div>
    </div>

        </div>
        </div>
    );
};

export default About;