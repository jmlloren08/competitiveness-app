import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';

const ScrollToTopButton = React.lazy(() => import('@/Components/ScrollToTopButton'));
const Loader = React.lazy(() => import('@/Components/Loading'));
const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));

export default function AboutPage() {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Head title="About - Philippine Global Competitiveness Report Card" />

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

                    <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route('/')}>
                                Home
                            </ResponsiveNavLink>
                        </div>
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4"></div>
                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('about')} active={route().current('about')}>About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')}>Reports</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('news')}>News</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('contact-us')}>Contact Us</ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className='relative overflow-hidden'>
                            <img src="/backend/assets/images/bg-header.jpg" alt="ARTA Banner" className='w-full h-64 rounded-xl' />
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-xl'></div>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='text-center text-white'>
                                    <h1 className='text-6xl sm:text-12xl font-bold'>ABOUT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-4 mb-6'>
                    <section>
                        <div className='max-w-7xl mx-auto shadow-lg p-6 rounded'>
                            <h2 className='text-2xl font-bold mb-4 bg-sky-900 text-white p-5 rounded'>ABOUT THE REPORT CARD</h2>
                            <p className='p-3'>
                                The Report Card presents the rankings of the Philippines in major international competitiveness reports. The key objective of this collaboration is the development of a comprehensive “competitiveness dashboard”.
                            </p>
                            <p className='p-3'>
                                This dashboard will serve as an integrated platform designed to monitor and analyze various aspects of the country’s competitiveness. It will offer a centralized view of key data and performance metrics, enabling stakeholders to make informed decisions and implement strategies for enhancing competitiveness.
                            </p>
                        </div>
                    </section>
                    {/* youtube video section */}
                    <section>
                        <div className='max-w-7xl mx-auto shadow-lg p-6 rounded mt-8 mb-8'>
                            <h2 className='text-2xl font-bold mb-4'>Watch Our Video</h2>
                            <div className='rounded mb-4'>
                                <iframe
                                    width="100%"
                                    height="669"
                                    src="https://www.youtube.com/embed/aa2JcZMluDg"
                                    title="Philippine Global Competitiveness Report Card"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
}
