import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const DigitalEGDI = React.lazy(() => import('@/Components/Custom/Digital/EGDI/DigitalEGDI'));
const IndicatorRankingEGDI = React.lazy(() => import('@/Components/Custom/Digital/EGDI/IndicatorRankingEGDI'));

export default function EGovernmentDevelopmentIndex() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-ph-ranks-egdi')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const gaugeLevel = data.gauge ? data.gauge.area_block : 'Bottom Third';
    const latestYear = data.latestYear ? data.latestYear : 'NDA';
    const overallRank = data.overall.length ? data.overall[0].rank : 'NDA';
    const source = data.overall.length ? data.overall[0].source : 'NDA';
    const baselineEconomies = data.overall.length ? data.overall[0].baseline_economies : 'NDA';
    const aseanRank = data.vsAseanEconomies.length ? data.vsAseanEconomies[0].rank_in_asean : 'NDA';
    const remarks = data.vsAseanEconomies.length ? data.vsAseanEconomies[0].remarks : 'NDA';

    return (
        <>
            <Head title="Competitiveness Dashboard - Reports/Digital/E-Government Development Index" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>E-GOVERNMENT DEVELOPMENT INDEX</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> DIGITAL</p>
                            <p className='text-blue-900 text-xl mb-3'><span className='font-bold'>PUBLISHER:</span> {source}, {latestYear}</p>
                            <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>PHILIPPINES RANKING</h2>
                            {/* overall vs asean economies */}
                            <div className="flex flex-col sm:flex-row mb-6">
                                <div className="flex flex-col w-full">
                                    <div className="bg-sky-900 rounded-lg drop-shadow">
                                        <p className="text-white text-xl m-3">OVERALL</p>
                                        <h1 className='text-white text-center text-8xl font-bold'>{overallRank}</h1>
                                        <p className="text-white text-center text-xl m-3">OVER {baselineEconomies} ECONOMIES</p>
                                    </div>
                                    <div className="bg-sky-700 rounded-lg mt-3 drop-shadow">
                                        <p className="text-white text-xl m-3">VS ASEAN ECONOMIES</p>
                                        <h1 className='text-white text-center text-8xl font-bold'>{aseanRank}</h1>
                                        <p className="text-white text-center text-xl m-3">{remarks}</p>
                                    </div>
                                </div>
                                {/* gauge meter */}
                                <div>
                                    <Gauge gauge={gaugeLevel} />
                                </div>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>ABOUT THE REPORT</h2>
                                <p className='p-3'>The United Nations E-Government Survey has been published biennially by the United Nations Department of Economic and Social Affairs (UN DESA) since 2001. The assessment measures the e-government performance of countries relative to one another, as opposed to being an absolute measurement. The EGDI, which assesses e government development at the national level, is a composite index based on the weighted average of three normalized indices, such as the Telecommunications Infrastructure Index (TII), Human Capital Index (HCI), and the Online Service Index (OSI).</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <DigitalEGDI />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingEGDI />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>Between 2020 and 2022, the global average EGDI value rose from 0.5988 to 0.6102 and average HCI and TII values increased by 2 and 5 per cent, respectively, while the OSI average experienced a slight dip, declining from 0.5620 to 0.555. It is important to note that this change in the OSI could be attributed to the updated survey methodology (UN, 2022).</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.bworldonline.com/infographics/2022/10/20/481762/philippines-falls-in-uns-e-government-development-index/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines falls in UN’s E-Government Development Index
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE E-GOVERNMENT DEVELOPMENT INDEX</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2022" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        UN E-Government Survey 2022
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2020" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        UN E-Government Survey 2020
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2018" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        UN E-Government Survey 2018
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2016" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        UN E-Government Survey 2016
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://publicadministration.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2014" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        UN E-Government Survey 2014
                                    </a>
                                </p>
                            </div>

                        </div>

                    </section>

                    <div className='flex justify-center m-12'>
                        <button
                            className='mt-4 bg-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg'
                        >
                            <Link href={route('reports')}>Back to Main Menu</Link>
                        </button>
                    </div>

                </main>

                <Footer />

            </div>

        </>
    );
}