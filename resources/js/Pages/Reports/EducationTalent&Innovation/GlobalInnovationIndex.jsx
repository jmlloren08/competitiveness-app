import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));
const Gauge = React.lazy(() => import('@/Components/Gauge'));
const ETIGII = React.lazy(() => import('@/Components/Custom/ETI/GII/ETIGII'));
const IndicatorRankingGII = React.lazy(() => import( '@/Components/Custom/ETI/GII/IndicatorRankingGII'));

export default function GlobalInnovationIndex() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [data, setData] = useState({
        gauge: null,
        latestYear: null,
        overall: [],
        vsAseanEconomies: []
    });

    useEffect(() => {
        axios.get('/get-eti-gii-philippine-ranking')
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
            <Head title="Competitiveness Dashboard - Reports/Education Talent & Innovation/Global Innovation Index" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>GLOBAL INNOVATION INDEX</h1>
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
                                <p className='p-3'>The Global Innovation Index (GII) takes the pulse of innovation against a background of an economic and geopolitical environment fraught with uncertainty. It reveals the most innovative economies in the world, ranking the innovation performance of around 132 economies while highlighting innovation strengths and weaknesses.</p>
                                <p className='p-3'>Envisioned to capture as complete a picture of innovation as possible, the Index comprises around 80 indicators, including measures on the political environment, education, infrastructure and knowledge creation of each economy.</p>
                                <p className='p-3'>The different metrics that the GII offers help to monitor performance and benchmark developments against economies within the same region or income group.</p>
                            </div>

                            <div>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>VIEW THE RANKINGS</h2>
                            </div>

                            <ETIGII />

                            <div className='mt-12'>
                                <h2 className='text-white text-center text-xl font-bold bg-blue-950 p-3'>INDICATOR RANKINGS</h2>
                            </div>

                            <IndicatorRankingGII />

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>REPORT HIGHLIGHTS</h2>
                                <p className='p-3'>In the Global Innovation Index of 2023, several countries emerged as the top innovation economies within their respective regions.</p>
                                <p className='p-3'> In Latin America and the Caribbean, Brazil led the pack, showcasing a robust research and development infrastructure coupled with significant investments in technology sectors. Following closely were Chile and Mexico, both countries demonstrating a commitment to fostering innovation and entrepreneurship amidst stable economic environments.</p>
                                <p className='p-3'> Moving to Northern America, the United States continued its reign as the top innovation economy, fueled by unparalleled R&D spending and a thriving startup culture. Canada followed suit, leveraging its stable economy and supportive government policies to nurture innovation and competitiveness.</p>
                                <p className='p-3'>In Europe, Switzerland stood out as the leader with its strong emphasis on research, high-quality education system, and conducive business environment. Sweden and the United Kingdom trailed behind, each contributing significantly to the continent’s innovation landscape through innovation-friendly policies and vibrant startup ecosystems.</p>
                                <p className='p-3'>Sub-Saharan Africa saw South Africa taking the lead, driven by its strong research institutions and government initiatives aimed at promoting innovation-driven growth. Botswana and Senegal followed suit, leveraging stable political environments and investments in education and technology infrastructure to bolster their innovation ecosystems.</p>
                                <p className='p-3'>Northern Africa and Western Asia showcased Israel as the top innovation economy, renowned for its thriving startup ecosystem and emphasis on R&D. The United Arab Emirates and Türkiye secured the subsequent positions, propelled by strategic investments in innovation and technology.</p>
                                <p className='p-3'>In South East Asia, East Asia, and Oceania, Singapore emerged as a global innovation hub, backed by strong government support and world-class infrastructure. The Republic of Korea and China followed, each leveraging advanced technology capabilities and strong industrial bases to drive innovation.</p>
                                <p className='p-3'>Lastly, in Central and Southern Asia, India led the pack with its rapidly growing tech industry and vast pool of skilled professionals. Iran (Islamic Republic of) and Kazakhstan secured the subsequent positions, each making strides in various sectors like information technology and biotechnology to enhance their innovation ecosystems.</p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>NEWS ARTICLES</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.dti.gov.ph/archives/news-archives/ph-rises-up-rank-56th-global-innovation-index-2023/#:~:text=MANILA%2C%20PHILIPPINES%2005%20October%202023,2023%20rankings%2C%20ranking%2056th%20overall" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH rises up to rank 56th in the Global Innovation Index 2023
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://cpbrd.congress.gov.ph/2012-06-30-13-06-51/2012-06-30-13-36-50/1690-ff2023-48-philippine-performance-in-the-2023-global-innovation-index" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippine Performance in the 2023 Global Innovation Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.pna.gov.ph/articles/1210659" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        PH improves ranking in Global Innovation Index 2023
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.philstar.com/headlines/2023/09/29/2299816/philippines-improves-global-innovation-index" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Philippines improves in global innovation index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.youtube.com/watch?v=o-GYC13ON_U" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        Global Innovation Index 2023: Message from Philippines’ President
                                    </a>
                                </p>
                            </div>

                            <div className='mt-12 mb-12'>
                                <h2 className='text-white text-2xl text-center font-bold mb-6 bg-sky-900 p-5 rounded'>DOWNLOAD THE GLOBAL INNOVATION INDEX</h2>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.wipo.int/global_innovation_index/en/2023/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2023 Global Innovation Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.wipo.int/global_innovation_index/en/2023/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2022 Global Innovation Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.wipo.int/global_innovation_index/en/2021/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2021 Global Innovation Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.wipo.int/global_innovation_index/en/2020/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2020 Global Innovation Index
                                    </a>
                                </p>
                                <p className='p-2 font-bold text-lg underline'>
                                    <a href="https://www.wipo.int/global_innovation_index/en/2019/" className='text-blue-500 transition ease-in-out hover:text-blue-700 hover:text-xl'>
                                        2019 Global Innovation Index
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