import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='bg-gradient-to-b from-black to-teal-400 h-full md:h-screen'>
            <div className='container'>
                <Accordion className='w-4/6 mx-auto py-20' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1. Different between Authorization & Authentication ?</Accordion.Header>
                        <Accordion.Body>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <li className='text-center pb-4'>Authorization</li>
                                    <div className=''>
                                        <p className=' border-2 p-2 m-0'>Authorization determines what resources a user can access.</p>
                                        <p className=' border-2 p-2 m-0'>Authorization works through settings that are implemented and maintained by the organization.</p>
                                        <p className=' border-2 p-2 m-0'>Authorization always takes place after authentication.</p>
                                        <p className=' border-2 p-2 m-0'>Authorization isn’t visible to or changeable by the user.</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <li className='text-center pb-4'>Authentication</li>
                                    <div className='h-full'>
                                        <p className=' border-2 p-2 m-0'>Authentication verifies who the user is.</p>
                                        <p className=' border-2 p-2 m-0'>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                                        <p className=' border-2 p-2 m-0'>Authentication is the first step of a good identity and access management process.</p>
                                        <p className=' border-2 p-2 m-0'>Authentication is visible to and partially changeable by the user.</p>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2. Why are you using firebase? What other options do you have to implement Authentication ?</Accordion.Header>
                        <Accordion.Body>
                            <div className='row'>
                                <div className='col-12 col-md-6 border-2 border-gray-400'>
                                    <h6 className='border-b-2 border-gray-400 text-center py-2'>Why are you using Firebase?</h6>
                                    <ul className='list-disc'>
                                        <li className='pb-2'>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.</li>
                                        <li className='pb-2'>Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</li>
                                        <li className='pb-2'>As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets.</li>
                                    </ul>
                                </div>
                                <div className='col-12 col-md-6 border-2 border-gray-400'>
                                    <h6 className='border-b-2 border-gray-400 text-center py-2'>Authentication library list?</h6>
                                    <ul className='list-disc'>
                                        <li>Auth0/auth0-react</li>
                                        <li>Azure/msal-react</li>
                                        <li>Axa-fr/react-oidc-context</li>
                                        <li>Redux-auth-wrappe r</li>
                                        <li>React-aad-msal</li>
                                        <li>Redux-oidc</li>
                                        <li>React-firebase-auth</li>
                                        <li>React-router-role-authorization</li>
                                        <li>Redux-auth</li>
                                        <li>React-check-auth</li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>#3. What other service does firebase provide other than Authentication ?</Accordion.Header>
                        <Accordion.Body>
                            <p>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.</p>
                            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                            <p>Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;