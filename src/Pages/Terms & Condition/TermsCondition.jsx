/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import bgimg from '../../assets/chef background image overlay (1).jpg'

const TermsCondition = () => {
    return (
        <div>
            <div className='relative z-10 '>
                <div className='text-center my-20 md:my-44'>
                    <h2 className='text-xl md:text-6xl font-bold text-white'>Terms & Conditions</h2>
                </div>
                <div className='mt-32 md:mt-72 w-5/6 md:w-3/5 mx-auto'>
                    <h2 className='text-xl md:text-4xl font-bold my-6 text-red-600'>You Should Follow The Following Terms & Conditions</h2>
                    <div className='my-8'>
                        <li className='my-3 md:my-5'> An Intellectual Property clause will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.</li>
                        <li className='my-3 md:my-5'> A Termination clause will inform users that any accounts on your website and mobile app, or users' access to your website and app, can be terminated in case of abuses or at your sole discretion.</li>
                        <li className='my-3 md:my-5'> A Governing Law clause will inform users which laws govern the agreement. These laws should come from the country in which your company is headquartered or the country from which you operate your website and mobile app.</li>
                        <li className='my-3 md:my-5'> A Links to Other Websites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.</li>
                        <li className='my-3 md:my-5'> If your website or mobile app allows users to create content and make that content public to other users, a Content clause will inform users that they own the rights to the content they have created. This clause usually mentions that users must give you (the website or mobile app developer/owner) a license so that you can share this content on your website/mobile app and to make it available to other users.</li>
                        <li className='my-3 md:my-5'> A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreement so as to encompass the most amount of negative uses.</li>
                    </div>
                </div>
            </div>
            <div className='background-img-blog'>
                <img className='absolute top-0 z-0' src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default TermsCondition;