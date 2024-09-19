import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const WorldCompetitivenessRanking = React.lazy(() => import('@/Components/Custom/General/WCR/WorldCompetitivenessRanking'));
const IndicatorRankingWCR = React.lazy(() => import('@/Components/Custom/General/WCR/IndicatorRankingWCR'));

export default function WorldCompetitivenessYearBook() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-ph-ranks-wcr')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const gaugeLevel = data.gauge ? data.gauge.area_block : 'NDA';
    const latestYear = data.latestYear ? data.latestYear : 'NDA';
    const overallRank = data.overall.length ? data.overall[0].rank : 'NDA';
    const source = data.overall.length ? data.overall[0].source : 'NDA';
    const baselineEconomies = data.overall.length ? data.overall[0].baseline_economies : 'NDA';
    const aseanRank = data.vsAseanEconomies.length ? data.vsAseanEconomies[0].rank_in_asean : 'NDA';
    const remarks = data.vsAseanEconomies.length ? data.vsAseanEconomies[0].remarks : 'NDA';

    return (
        <>
            <Head title="Competitiveness Dashboard - Reports/General/World Competitiveness Yearbook" />

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
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> GENERAL</p>
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
                                <p className='p-3'>The IMD World Competitiveness Yearbook (WCY), first published in 1989, is a comprehensive annual report and worldwide reference point on the competitiveness of countries. It provides benchmarking and trends, as well as statistics and survey data based on extensive research. It analyzes and ranks countries according to how they manage their competencies to achieve long-term value creation.</p>

                                <p className='p-3'>An economy’s competitiveness cannot be reduced only to GDP and productivity because enterprises also have to cope with political, social and cultural dimensions. Governments therefore need to provide an environment characterized by efficient infrastructures, institutions, and policies that encourage sustainable value creation by enterprises.</p>

                                <p className='p-3'>The IMD World Competitiveness Ranking emphasizes a long-term trend highlighted in past editions – that the countries on the top of the list each have a unique approach to becoming competitive.</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <WorldCompetitivenessRanking />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingWCR />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>The top three economies in the 2023 World Competitiveness Yearbook are Denmark (1st), Ireland (2nd), and Switzerland (3rd). In comparison, the Philippines ranks 52nd out of 64 economies in the 2023 WCY. The biggest gainers in 2023 include Indonesia (34th) and Ireland (2nd), which went up by 10 and 9 places, respectively. On the other hand, the biggest losers include Latvia (51st) and Hungary (46th), which went down by 16 and seven places, respectively.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.gmanetwork.com/news/money/economy/873439/philippines-falls-to-52nd-spot-in-world-competitiveness-ranking/story/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines falls to 52nd spot in world competitiveness ranking
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.philstar.com/headlines/2023/06/20/2275086/global-competitiveness-philippine-drops-4-spots-52nd" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Global competitiveness: Philippine drops 4 spots to 52nd
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://newsinfo.inquirer.net/1790431/ph-falls-by-four-spots-in-global-competitiveness-ranking" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH falls by four spots in global competitiveness ranking
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.bworldonline.com/top-stories/2023/06/20/529563/phl-competitiveness-ranking-dips-report/#google_vignette" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PHL competitiveness ranking dips — report
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE WORLD COMPETITIVENESS YEARBOOK</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://imd.cld.bz/IMD-World-Competitiveness-Booklet-2023" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2023 World Competitiveness Yearbook
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://imd.cld.bz/IMD-World-Competitiveness-Booklet-2022" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2022 World Competitiveness Yearbook
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://imd.cld.bz/IMD-World-Competitiveness-Booklet-2021" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2021 World Competitiveness Yearbook
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://imd.cld.bz/IMD-World-Competitiveness-Yearbook-2020" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2020 World Competitiveness Yearbook
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg'>
                                    2019 Not available at IMD’s website. AIM RSN PCC has copy of hard copy.
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