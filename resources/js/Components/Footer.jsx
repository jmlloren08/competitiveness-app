import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-100 w-full pt-10 pb-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-2">MAIN OFFICE ADDRESS</h3>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'>4th & 5th Floor, NFA Building, NFA Compound, Visayas Avenue, Brgy. Vasra, Diliman, Quezon City, Philippines 1128</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">EMAIL US</h3>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'>complaints@arta.gov.ph</p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'>info@arta.gov.ph</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">KNOW MORE</h3>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://arta.gov.ph/about/mandate-vision-mission/">What is ARTA?</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://arta.gov.ph/about/the-eodb-law/">What is the Ease of Doing Business and Efficient Government Service Delivery Act of 2018?</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://arta.gov.ph/violations-and-penalties/">What are the violations and penalties under R.A. 11032?</a></p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">CALL US</h3>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'>PLDT: 1-ARTA (12782), (02) 8246-7940</p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'>SMART: 0920-925-3078, 0998-856-8338</p>
                    <h3 className="text-lg font-bold mt-6 mb-2">FOLLOW US</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/artagovph" className="text-gray-600 hover:text-blue-800">
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                        </a>
                        <a href="https://www.instagram.com/artagovph" className="text-gray-600 hover:text-pink-800">
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                        </a>
                        <a href="https://x.com/artagovph" className="text-gray-600 hover:text-black">
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </a>
                        <a href="https://www.youtube.com/channel/UChQr6Tl3lqcKfMd4ANNN75w" className="text-gray-600 hover:text-red-800">
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Republic of the Philippines. All rights reserved.</p>
            </div>
        </footer>
    );
}