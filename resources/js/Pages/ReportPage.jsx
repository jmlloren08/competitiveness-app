import { Head } from '@inertiajs/react';
import React from 'react';

const ReportPage = () => {
    return (
        <>
            <Head title="Competitiveness Dashboard - Reports" />

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

                            <div className="px-4">
                                {/* <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div> */}
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('about')}>About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')} active={route().current('reports')}>
                                    Reports
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href={route('news')}>News</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('contact-us')}>Contact Us</ResponsiveNavLink>
                            </div>

                        </div>
                    </div>
                </nav>

                <main className='bg-white mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-6'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg p-6 rounded'>
                            <h2 className='text-2xl font-bold mb-4 bg-sky-900 text-white p-5 rounded'>ABOUT THE REPORT CARD</h2>
                            <p className='p-3'>
                                The Report Card presents the rankings of the Philippines in major international competitiveness reports. The key objective of this collaboration is the development of a comprehensive “competitiveness dashboard”.
                            </p>
                            <p className='p-3'>
                                This dashboard will serve as an integrated platform designed to monitor and analyze various aspects of the country’s competitiveness. It will offer a centralized view of key data and performance metrics, enabling stakeholders to make informed decisions and implement strategies for enhancing competitiveness.
                            </p>
                        </div>
                    </section>

                </main>

                <Footer />

            </div>
        </>
    )
}

export default ReportPage;