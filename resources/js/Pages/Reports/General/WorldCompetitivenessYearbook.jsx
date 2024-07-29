import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';
import Gauge from '@/Components/Gauge';

export default function WorldCompetitivenessYearBook() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const gaugeValue = 'Middle Third';

    return (
        <>
            <Head title="Competitiveness Dashboard - Reports/General" />

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
                            <ResponsiveNavLink href={route('/')}>Home</ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">

                            <div className="px-4">
                                {/* <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div> */}
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('about')} >About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')} >Reports</ResponsiveNavLink>
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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>WORLD COMPETITIVENESS RANKING</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-1xl'><span className='font-bold'>CATEGORY:</span> GENERAL</p>
                            <p className='text-blue-900 text-1xl mb-3'><span className='font-bold'>PUBLISHER:</span> INTERNATIONAL INSTITUTE OF MANAGEMENT DEVELOPMENT (IMD), 2023</p>
                            <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>PHILIPPINES RANKING</h2>
                            {/* overall vs asean economies */}
                            <div className="flex flex-col sm:flex-row mb-6">
                                <div className="flex flex-col w-full">
                                    <div className="bg-sky-900 rounded-lg drop-shadow">
                                        <p className="text-white m-3">OVERALL</p>
                                        <h1 className='text-white text-center text-7xl font-bold'>52</h1>
                                        <p className="text-white text-center m-3">OVER 64 ECONOMIES</p>
                                    </div>
                                    <div className="bg-sky-700 rounded-lg mt-3 drop-shadow">
                                        <p className="text-white m-3">VS ASEAN ECONOMIES</p>
                                        <h1 className='text-white text-center text-7xl font-bold'>5</h1>
                                        <p className="text-white text-center m-3">OVER 5 ASEAN ECONOMIES</p>
                                    </div>
                                </div>
                                {/* gauge meter */}
                                <div>
                                    <Gauge gauge={gaugeValue} />
                                </div>
                            </div>

                        </div>

                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>ABOUT THE REPORT</h2>
                            <p className='p-3'>The IMD World Competitiveness Yearbook (WCY), first published in 1989, is a comprehensive annual report and worldwide reference point on the competitiveness of countries. It provides benchmarking and trends, as well as statistics and survey data based on extensive research. It analyzes and ranks countries according to how they manage their competencies to achieve long-term value creation.</p>

                            <p className='p-3'>An economy’s competitiveness cannot be reduced only to GDP and productivity because enterprises also have to cope with political, social and cultural dimensions. Governments therefore need to provide an environment characterized by efficient infrastructures, institutions, and policies that encourage sustainable value creation by enterprises.</p>

                            <p className='p-3'>The IMD World Competitiveness Ranking emphasizes a long-term trend highlighted in past editions – that the countries on the top of the list each have a unique approach to becoming competitive.</p>
                        </div>

                    </section>

                </main>

                <Footer />

            </div>

        </>
    );
}