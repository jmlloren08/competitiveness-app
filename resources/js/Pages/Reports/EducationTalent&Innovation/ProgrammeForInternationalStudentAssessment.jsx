import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const IndicatorRankingPISA = React.lazy(() => import('@/Components/Custom/ETI/PISA/IndicatorRankingPISA'));

export default function ProgrammeForInternationalStudentAssessment() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-eti-pisa-philippine-ranking')
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
            <Head title="Competitiveness Dashboard - Reports/Education Talent & Innovation/Programme for International Student Assessment" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>PROGRAMME FOR INTERNATIONAL STUDENT ASSESSMENT (PISA)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 px-4 sm:px-6 lg:px-8'>

                    <section>
                        <div className='max-w-6xl mx-auto shadow-lg mb-12 p-5 rounded'>
                            <p className='text-blue-900 text-xl'><span className='font-bold'>CATEGORY:</span> EDUCATION TALENT & INNOVATION</p>
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
                                <p className='p-3'>The Program for International Student Assessment (PISA) is an international comparative study of 15-year-old students’ performance in reading, mathematics, and science literacy.</p>
                                <p className='p-3'>PISA has been conducted every 3 years except for a 1-year delay in the current cycle (from 2021 to 2022) due to the pandemic. After the 2025 data collection, PISA will change to a 4-year data collection cycle. The major domain of study rotates between mathematics, science, and reading in each cycle. PISA also includes measures of general or cross-curricular competencies, such as collaborative problem solving.</p>
                            </div>

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingPISA />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>The Program for International Student Assessment (PISA) is an international comparative study of 15-year-old students’ performance in reading, mathematics, and science literacy. In 2022, eighty-one education systems participated in PISA, including 37 member countries of the Organization for Economic Cooperation and Development (OECD) and 44 other countries and subnational education systems. The PISA 2022 results represent outcomes from the 8th cycle of PISA since its inception in 2000 and provide a global view of U.S. students’ performance compared to their peers in the 80 other participating education systems.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.pna.gov.ph/articles/1215002" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        CHED to address PH students’ low int’l assessment ranking 6 December 2023
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE PROGRAM FOR INTERNATIONAL STUDENT ASSESSMENT (PISA)</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://nces.ed.gov/surveys/pisa/pisa2022/index.asp" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2022 Program for International Student Assessment (PISA)
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://nces.ed.gov/surveys/pisa/pisa2018/index.asp" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2018 Program for International Student Assessment (PISA)
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://nces.ed.gov/surveys/pisa/pisa2015/index.asp" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2015 Program for International Student Assessment (PISA)
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://nces.ed.gov/surveys/pisa/pisa2012/index.asp" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2012 Program for International Student Assessment (PISA)
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