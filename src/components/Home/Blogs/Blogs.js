import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='row '>
            
                <h3 className='text-start m-2'>1. Difference between Authentication and Authorization?</h3>
                <div className=' d-md-flex text-start mt-3 ms-2'>
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
            
            <div className=' d-md-flex text-start mt-3 ms-2'>
                <div className='col-md-6 text-start'>
                <h3>2. Why are you using Firebase Authentication?</h3>
                <p>
                    Most apps need to know the identity of a user.
                    Firebase Authentication provides backend services,
                    easy-to-use SDKs, and ready-made UI libraries to authenticate
                    users to your app. It supports authentication using passwords,
                    phone numbers, popular federated identity providers like Google,
                        Facebook and Twitter, and more.
                    <h5>Others Authentication site</h5>
                    <ul>
                        <li>Auth0</li>
                        <li>Passport</li>
                        <li>Amazon Cognito</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                    </ul>
                </p>
                </div>
                <div className='col-md-6 text-start'>
                    <h4>3. What other services does firebase provide other than authentication?</h4>
                <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.
                There are many services which Firebase provides, Most useful of them are</p>
                <ul>
                    <li>
                        Cloud Firestore
                    </li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
                </div>
            </div>
            <div >
                
            </div>
        </div>
        </div>
    );
};

export default Blogs;