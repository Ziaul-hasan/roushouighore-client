/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import bgimg from '../../assets/chef background image alt flip overlay (1).jpg'
import './Blog.css'
import ReactToPrint from 'react-to-print';
import { FaFilePdf } from "react-icons/fa";

const Blog = () => {
    const ref = useRef()
    return (
        <div>
            <div className='relative z-10 '>
                <div className='text-center my-20 md:my-44'>
                    <h2 className='text-xl md:text-6xl font-bold text-white'>Questions and Answers</h2>
                </div>
                <div className='mt-32 md:mt-72 w-5/6 md:w-3/5 mx-auto'>
                    <div ref={ref} className='md:my-10 my-2 md:mx-10 mx-4'>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 text-red-600'><span>Question:</span>  Tell us the differences between uncontrolled and controlled components</h2>
                            <h2 className='text-base md:text-lg font-medium'><span className='text-xl md:text-2xl me-5'>Answer:</span> The main differences between controlled and uncontrolled components are:
                                <li className='my-3 md:my-5'>Ownership and Management: Controlled components are typically owned and managed by the developer, while uncontrolled components are owned and managed by third-party providers.</li>
                                <li className='my-3 md:my-5'>Customization and Configuration: Controlled components can be customized and configured to fit the specific needs of the application, while uncontrolled components cannot be customized to the same extent.</li>
                                <li className='my-3 md:my-5'>Security: The security of controlled components can be managed by the developer, while uncontrolled components may have security vulnerabilities that are outside of the developer's control.</li>
                                <li className='my-3 md:my-5'>Availability: Controlled components are typically more available, as they are hosted and managed by the developer or organization, while uncontrolled components may be subject to downtime or service outages that are beyond the developer's control.</li>
                                <li className='my-3 md:my-5'>Support and Maintenance: Controlled components are typically easier to support and maintain, as the developer has direct control over them, while uncontrolled components may require third-party support and maintenance.</li>
                            </h2>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 text-red-600'><span>Question:</span>  How to validate React props using PropTypes?</h2>
                            <h2 className='text-base md:text-lg font-medium'><span className='text-xl md:text-2xl me-5'>Answer:</span> PropTypes ensure that the data passed to a component is of the expected type and format. Here's how you can validate React props using PropTypes:
                                <li className='my-3 md:my-5'>First, import the PropTypes library in our component by adding this line at the top of your file: "import PropTypes from 'prop-types';"</li>
                                <li className='my-3 md:my-5'>Define the expected props for our component using PropTypes.</li>
                                <li className='my-3 md:my-5'>We can also specify that a prop is required by adding .isRequired to the end of the prop type.</li>
                                <li className='my-3 md:my-5'>We can also define custom validators for more complex data types.</li>
                            </h2>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 text-red-600'><span>Question:</span>  Tell us the difference between nodejs and express js.</h2>
                            <h2 className='text-base md:text-lg font-medium'><span className='text-xl md:text-2xl me-5'>Answer:</span> Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. <br /><br />
                                On the other hand, Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing.
                                <br /><br /> Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. <br /><br /> Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture. </h2>
                        </div>
                        <div className='my-8'>
                            <h2 className='text-xl md:text-2xl font-semibold my-6 text-red-600'><span>Question:</span>  What is a custom hook, and why will you create a custom hook?</h2>
                            <h2 className='text-base md:text-lg font-medium'><span className='text-xl md:text-2xl me-5'>Answer:</span> A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks.” This naming convention is suggested in order to follow the pattern that's already in place
                                <br /><br /> There are several advantages to using Custom Hooks:
                                <li className='my-3 md:my-5'>Reusability — we can use the same hook again and again, without the need to write it twice.</li>
                                <li className='my-3 md:my-5'>Clean Code — extracting all the component logic into a hook will provide a cleaner codebase.</li>
                                <li className='my-3 md:my-5'>Maintainability — easier to maintain.</li>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='background-img-blog'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
            <div className="text-center my-5">
                <ReactToPrint trigger={() => <button className='px-5 py-2 rounded-lg bg-yellow-600 text-white text-xl font-medium my-5'> <FaFilePdf className='inline-block me-3'></FaFilePdf> Download PDF</button>} content={() => ref.current}></ReactToPrint>
            </div>
        </div>
    );
};

export default Blog;