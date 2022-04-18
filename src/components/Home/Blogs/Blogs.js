import React from 'react';

const Blogs = () => {
    return (
        <div className='row'>
            
                <h3>Difference between Authentication and Authorization?</h3>
                <div className=' d-md-flex text-start mt-3'>
                    <div className='col-md-6 col-sm-12'>
                        <h4>Authentication :</h4>
                    <ul>
                    <li>
                        Authentication verifies who the user is.
                    </li>
                    <li>
                        Authentication works through passwords,one-time-pins,biometric information,
                        and other information provided or entered by the user.
                    </li>
                    <li>
                        Authentication is the first step of a good identity and a access management
                        process.
                    </li>
                    <li>
                        Authentication is visible to and partially changeable by the user.
                    </li>
                </ul>
                </div>
                    <div className='col-md-6 col-sm-12'>
                        <h4>Authorization :</h4>
                    <ul>
                    <li>Authorization determines what resources a user can access.</li>
                    <li>
                        Authorization works through settings that are implemented and
                        maintained by the organization
                    </li>
                    <li>
                        Authorization always takes place after Authentication
                    </li>
                    <li>
                        Authorization is not visible to or changeable by the user
                    </li>
                </ul>
                </div>
                </div>
            
            
        </div>
    );
};

export default Blogs;