import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const TradeLPI = React.lazy(() => import('@/Components/Custom/Trade/LPI/TradeLPI'));
const IndicatorRankingTradeLPI = React.lazy(() => import('@/Components/Custom/Trade/LPI/IndicatorRankingLPI'));

export default function LogisticsPerformanceIndex() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-trade-lpi-philippine-ranking')
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
            <Head title="Competitiveness Dashboard - Reports/Trade/Logistics Performance Index" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>LOGISTICS PERFORMANCE INDEX</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> TRADE</p>
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
                                <p className='p-3'>The LPI is an interactive benchmarking tool created to help countries identify the challenges and opportunities they face in their performance on trade logistics and what they can do to improve their performance. The LPI 2023 allows for comparisons across 139 countries. The 2023 LPI for the first time measures the speed of trade with indicators derived from big datasets tracking shipments.</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <TradeLPI />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingTradeLPI />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>The Logistics Performance Index (LPI) for 2023 revealed significant disparities in global logistics performance, with top-performing countries showcasing advanced infrastructure, efficient customs processes, and streamlined supply chain management systems. Singapore emerged as the leading nation in logistics performance, demonstrating exceptional efficiency and reliability in its logistics operations. Finland and Denmark secured the second and third positions, respectively, highlighting their strong logistical capabilities and seamless connectivity within global trade networks. Germany and the Netherlands rounded out the top five, leveraging their strategic geographic locations and extensive transportation networks to facilitate smooth movement of goods.</p>
                                <p className='p-3'>On the other end of the spectrum, Cameroon, Haiti, Somalia, Afghanistan, and Libya ranked among the least performers in logistics. These countries faced challenges ranging from inadequate infrastructure and inefficient customs procedures to political instability and security concerns, hindering their ability to effectively manage and optimize logistics operations. Despite efforts to improve logistics infrastructure and processes, these nations continue to struggle with the complexities of global trade and logistics, impacting their overall competitiveness and economic development.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.dti.gov.ph/archives/ph-now-top-third-in-world-banks-2023-logistics-performance-index-lpi-report/#:~:text=From%20an%20LPI%20score%20of,%2C%20Cambodia%2C%20and%20Lao%20PDR." className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH now top third in World Bank’s 2023 Logistics Performance Index (LPI) report
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.pna.gov.ph/articles/1199992" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH posts highest ranking in WB logistics report at 43rd spot
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.bworldonline.com/infographics/2023/04/24/518627/philippines-improves-in-logistics-performance-index/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines improves in Logistics Performance Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://mb.com.ph/2023/4/26/ph-ports-move-up-in-world-bank-s-logistics-index-global-ranking" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH ports move up in World Bank’s logistics index global ranking
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://business.inquirer.net/397276/ph-jumps-17-notches-in-annual-global-logistic-survey" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH jumps 17 notches in annual global logistic survey
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE LOGISTICS PERFORMANCE INDEX</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://lpi.worldbank.org/index.php/sites/default/files/2023-04/LPI_2023_report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2023 Logistics Performance Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://openknowledge.worldbank.org/bitstream/handle/10986/29971/LPI2018.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2018 Logistics Performance Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://wb-lpi-media.s3.amazonaws.com/LPI_Report_2016.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2016 Logistics Performance Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://lpi.worldbank.org/index.php/sites/default/files/2023-01/LPI_Report_2014.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2014 Logistics Performance Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://lpi.worldbank.org/index.php/sites/default/files/2023-02/LPI_2012_Report.pdf" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2012 Logistics Performance Index
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

            </div>

        </>
    );
}