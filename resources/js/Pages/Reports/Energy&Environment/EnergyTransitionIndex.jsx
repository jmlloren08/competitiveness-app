import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ScrollToTopButton = React.lazy(() => import('@/Components/ScrollToTopButton'));
const Loader = React.lazy(() => import('@/Components/Loading'));
const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const EEETI = React.lazy(() => import('@/Components/Custom/EE/ETI/EEETI'));
const IndicatorRankingEEETI = React.lazy(() => import('@/Components/Custom/EE/ETI/IndicatorRankingEEETI'));

export default function EnergyTransitionIndex() {

    const [loading, setLoading] = useState(true);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-ee-eti-philippine-ranking')
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

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Head title="Competitiveness Dashboard - Reports/Energy and Environment/Energy Transition Index" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>ENERGY TRANSITION INDEX</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> ENERGY AND ENVIRONMENT</p>
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
                                <p className='p-3'>The ETI provides a data-driven framework to measure and understand the performance of energy systems and readiness for energy transition across countries focusing on the transition. Given the emerging landscape and its potential implications for energy transition decision-making, the ETI framework has been updated to ensure relevance and usefulness for making decisions. While the energy triangle remains valid – with a balanced approach towards the three priorities of equity, security and sustainability – the updated ETI framework identifies specific components of these dimensions. Global average ETI scores increased by 10% since 2014, but showed only marginal growth in the past three years.</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <EEETI />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingEEETI />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>Over the past decade, the global ETI scores improved by 10%, supported by an increase of 19% in transition readiness scores, but only a 6% increase in system performance scores. The Nordic countries (Sweden, Denmark, Norway and Finland) continue to maintain their top rankings, scoring highly on both system performance and transition readiness. A few countries, such as Kenya and Azerbaijan, jumped significantly in rank this year for making aggressive efforts towards transition readiness by improving their regulatory environment and infrastructure. Importantly, in the last decade, the world’s largest energy consumer, China, gained 43% – approximately double the global average – in its transition readiness scores, making its way into the top 20 as the only Asian country. Transition momentum” has been incorporated as a measure to determine country progress on the system performance parameters. Only two countries – India and Singapore – are making advances on all aspects of energy system performance.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://energsustainsoc.biomedcentral.com/articles/10.1186/s13705-021-00309-1" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Managing the energy trilemma in the Philippines
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE ENERGY TRANSITION INDEX</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www3.weforum.org/docs/WEF_Fostering_Effective_Energy_Transition_2023.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2023 Fostering Effective Energy Transition
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www3.weforum.org/docs/WEF_Energy_Transition_Index_2022.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2022 Fostering Effective Energy Transition
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www3.weforum.org/docs/WEF_Fostering_Effective_Energy_Transition_2021.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2021 Fostering Effective Energy Transition
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www3.weforum.org/docs/WEF_Fostering_Effective_Energy_Transition_2020_Edition.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2020 Fostering Effective Energy Transition
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www3.weforum.org/docs/WEF_Fostering_Effective_Energy_Transition_2019.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2019 Fostering Effective Energy Transition
                                    </a>
                                </p>
                            </div>

                        </div>

                    </section>

                    <div className='flex justify-center m-12'>
                        <Link href={route('reports')}>
                            <button
                                className='mt-4 bg-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg'
                            >
                                Back to Main Menu
                            </button>
                        </Link>
                    </div>

                </main>

                <Footer />

                <ScrollToTopButton />

            </div>

        </>
    );
}