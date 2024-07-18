import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="w-full">
            {/* main footer */}
            <div className="bg-gray-100 m-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
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
            {/* sub footer */}
            <div className="bg-gray-200 m-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src="https://www.officialgazette.gov.ph/wp-content/themes/govph/assets/images/footlogo.png" alt="GOV Logo" className='h-48' />
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-2">REPUBLIC OF THE PHILIPPINES</h1>
                    <p>All content is in the public domain unless otherwise stated.</p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-2">ABOUT GOVPH</h1>
                    <p>Learn more about the Philippine government, its structure, how government works and the people behind it.</p>
                    <p className='m-1 p-1'></p>
                    <p>GOV.PH</p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://gov.ph/data">Open Data Portal</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://officialgazette.gov.ph">Official Gazette</a></p>
                </div>
                <div>
                    <h1 className="text-lg font-bold mb-2">GOVERNMENT LINKS</h1>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://president.gov.ph">Office of the President</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="https://www.ovp.gov.ph">Office of the Vice President</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="http://www.senate.gov.ph">Senate of the Philippines</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="http://www.congress.gov.ph">House of Representatives</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="http://sc.judiciary.gov.ph">Supreme Court</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="http://ca.judiciary.gov.ph/">Court of Appeals</a></p>
                    <p className='border-transparent text-gray-500 hover:text-red-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'><a href="http://sb.judiciary.gov.ph/">Sandiganbayan</a></p>
                </div>
            </div>
        </footer>
    );
}