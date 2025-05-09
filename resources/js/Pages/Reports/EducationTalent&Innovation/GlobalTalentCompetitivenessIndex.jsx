import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ScrollToTopButton = React.lazy(() => import('@/Components/ScrollToTopButton'));
const Loader = React.lazy(() => import('@/Components/Loading'));
const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const ETIGTCI = React.lazy(() => import('@/Components/Custom/ETI/GTCI/ETIGTCI'));
const IndicatorRankingGTCI = React.lazy(() => import('@/Components/Custom/ETI/GTCI/IndicatorRankingGTCI'));

export default function GlobalTalentCompetitivenessIndex() {

    const [loading, setLoading] = useState(true);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-eti-gtci-philippine-ranking')
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
            <Head title="Competitiveness Dashboard - Reports/Education Talent & Innovation/Global Talent Competitiveness Index" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>GLOBAL TALENT COMPETITIVENESS INDEX</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> EDUCATION TALENT AND INNOVATION</p>
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
                                <p className='p-3'>The GTCI report is published annually by INSEAD, the Business School for the World, in collaboration with Descartes Institute for the Future (an independent, non-profit, high-level consultancy in multilateral projects, based in Geneva, Switzerland) and with our Knowledge Partner the Human Capital Leadership Institute (HCLI, a centre of excellence that facilitates the acceleration of leadership development and strategic human capital management capabilities in Asia).</p>
                                <p className='p-3'>The report is a comprehensive annual benchmarking report that measures how countries and cities grow, attract and retain talent. It provides a unique resource for decision makers to understand the global talent competitiveness picture and develop strategies to boost their economies. The 2023 report covers 134 countries across all income groups.</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <ETIGTCI />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingGTCI />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>Over the past decade, the top 15 countries in the Global Talent Competitiveness Index (GTCI) have shown remarkable stability. Eighteen countries have featured among the top 15 at least once, with 12 consistently making the cut in all ten editions of the GTCI. Switzerland has consistently claimed the top spot since the GTCI’s inception in 2013, followed by Singapore, which has consistently ranked second, except in 2020. The United States has returned to the top three, climbing one spot this year and appearing in this tier five times over the past decade. Denmark, which held third place last year, dropped to fourth, closely trailing the United States.</p>
                                <p className='p-3'>Northern European countries dominate the top ten, with the Netherlands, Finland, and Norway following Denmark. Australia, the United Kingdom, Luxembourg, and Canada are also among the consistent top performers. However, Belgium, Austria, and New Zealand, which previously made the top 15, fell outside this year.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.bworldonline.com/top-stories/2023/11/09/556442/philippines-drops-four-spots-in-list-of-most-talent-competitive-countries/#:~:text=The%20Philippines%20ranked%2084th,the%20Human%20Capital%20Leadership%20Institute." className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines drops four spots in list of most talent competitive countries
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.philstar.com/headlines/2023/11/09/2309995/philippines-drops-four-spots-global-talent-index" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines drops four spots in global talent index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://governance.neda.gov.ph/philippines-falls-10-spots-in-global-talent-competitiveness-index/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines falls 10 spots in global talent competitiveness index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://mb.com.ph/2023/9/21/ph-drops-to-60th-in-global-talent-ranking" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH drops to 60th in global talent ranking
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE GLOBAL TALENT COMPETITIVENESS INDEX</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.insead.edu/system/files/2023-11/gtci-2023-report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2023 Global Talent Competitiveness Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.insead.edu/sites/insead/files/assets/dept/fr/gtci/GTCI-2022-report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2022 Global Talent Competitiveness Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.insead.edu/sites/insead/files/assets/dept/fr/gtci/GTCI-2021-Report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2021 Global Talent Competitiveness Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.insead.edu/sites/insead/files/assets/dept/fr/gtci/GTCI-2020-report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2020 Global Talent Competitiveness Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.insead.edu/sites/insead/files/assets/dept/fr/gtci/GTCI-2019-report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2019 Global Talent Competitiveness Index
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