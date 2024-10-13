import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const Header = React.lazy(() => import('@/Components/Header'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const PartnerLogos = React.lazy(() => import('@/Components/PartnerLogos'));
const PhilippinesReportsRanking = React.lazy(() => import('@/Components/PhilippinesReportsRanking'));
const Confetti = React.lazy(() => import('@/Components/Confetti'));

export default function HomePage() {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Head title="Philippine Global Competitiveness Report Card" />
            <Confetti />
            {/* Navigation */}
            <div className="min-h-screen bg-white-100">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-24">
                            <NavBar />
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Dropdown for mobile */}
                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route('/')} active={route().current('/')}>
                                Home
                            </ResponsiveNavLink>
                        </div>
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                {/* <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div> */}
                            </div>
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('about')}>About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')}>Reports</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('news')}>News</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('contact-us')}>Contact Us</ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <Header />
                {/* Partner Logos Section */}
                <div className='max-w-6xl bg-white shadow-sm mx-auto py-6 px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-24 relative z-0 rounded-none sm:rounded-full'
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)' }}>
                    <div className='max-w-6xl mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-between relative'>
                        <div className='flex flex-col sm:flex-row items-center mb-4 sm:mb-0'>
                            <span className='text-lg font-semi-bold mr-4 ml-4'>Organized by:</span>
                            <img src="/backend/assets/images/logo-arta.png" alt="ARTA Logo" className='h-16 max-w-full object-contain' />
                        </div>
                        <PartnerLogos />
                    </div>
                </div>
                {/* Main Content */}
                <main className='bg-white mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-6'>
                    <section className='mb-3'>
                        <div className='max-w-6xl mx-auto shadow-lg p-6 rounded'>
                            <h2 className='text-white text-2xl font-bold mb-4 bg-sky-900 p-5 rounded'>ABOUT THE DASHBOARD</h2>
                            <p className='p-3'>
                                The Philippine Global Competitiveness Report Card, developed by the Anti-Red Tape Authority (ARTA), AIM-Rizalino S. Navarro Policy Center for Competitiveness (RSNPCC), and Liveable Cities Philippines contains the compilation of a comprehensive list of 20 global competitiveness reports categorized into seven sectors: General, Digital, Education, Talent and Innovation, Energy and Environment, Governance, and Health and Nutrition.
                            </p>
                            <p className='p-3'>
                                This Competitiveness Dashboard serves as an integrated platform designed to monitor and analyze various aspects of the country's competitiveness effectively. It offers a centralized view of key data and performance metrics, enabling stakeholders to make informed decisions and implement strategies for enhancing competitiveness.
                            </p>
                            <p className='p-3'>
                                The development of the Philippine Global Competitiveness Report Card represents a significant opportunity to enhance the Philippines' global competitiveness and further provide an attractive and enabling environment for businesses, including foreign investments. By prioritizing data integrity, technological innovation, user engagement, and continuous improvement, ARTA, AIM-RSN PCC, and Liveable Cities intends to pursue the success and sustainability of the competitiveness dashboard in driving positive economic outcomes and sustainable development.
                            </p>
                        </div>
                    </section>
                    <div className='max-w-6xl mx-auto shadow-lg p-6 rounded'>
                        <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>PHILIPPINES REPORTS RANKING</h2>
                        <h2 className='text-white text-center font-bold bg-blue-900 p-3 mb-6'>CHART</h2>
                        <PhilippinesReportsRanking />

                    </div>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}