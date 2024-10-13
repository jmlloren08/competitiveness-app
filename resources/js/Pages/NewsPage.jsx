import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));

export default function NewsPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const reports = [
        {
            title: 'World Competitiveness Ranking',
            articles: [
                {
                    id: 987321,
                    title: 'Philippines falls to 52nd spot in world competitiveness ranking',
                    excerpt: 'The Philippines saw its competitiveness ranking across the world drop by four places...',
                    url: 'https://www.gmanetwork.com/news/money/economy/873439/philippines-falls-to-52nd-spot-in-world-competitiveness-ranking/story/'
                },
                {
                    id: 963741,
                    title: 'Global competitiveness: Philippine drops 4 spots to 52nd',
                    excerpt: 'MANILA, Philippines — Despite posting improvements in its overall economic...',
                    url: 'https://www.philstar.com/headlines/2023/06/20/2275086/global-competitiveness-philippine-drops-4-spots-52nd'
                },
                {
                    id: 159357,
                    title: 'PH falls by four spots in global competitiveness ranking',
                    excerpt: 'MANILA, Philippines — The Philippines dropped by four spots in the yearl...',
                    url: 'https://newsinfo.inquirer.net/1790431/ph-falls-by-four-spots-in-global-competitiveness-ranking'
                },
                {
                    id: 951753,
                    title: 'PHL competitiveness ranking dips — report',
                    excerpt: 'THE PHILIPPINES dropped four spots in an annual global competitiveness report amid global inflation...',
                    url: 'https://www.bworldonline.com/top-stories/2023/06/20/529563/phl-competitiveness-ranking-dips-report/#google_vignette'
                },
            ]
        },
        {
            title: 'E-Government Development Index',
            articles: [
                {
                    id: 684128,
                    title: 'Philippines falls in UN’s E-Government Development Index',
                    excerpt: 'The Philippines dropped 12 places to 89th out of 193 United Nations (UN) member states in the E-...',
                    url: 'https://www.bworldonline.com/infographics/2022/10/20/481762/philippines-falls-in-uns-e-government-development-index/'
                }
            ]
        },
        {
            title: 'Network Readiness Index',
            articles: [
                {
                    id: 358124,
                    title: 'PH emerges as the “year’s biggest mover” in Network Readiness Index (NRI) 2022 Report',
                    excerpt: 'Manila—The Department of Trade and Industry (DTI) welcomed the recent results of the Network Readiness Report (NRI) released by the Portulans Institute—a Washington DC...',
                    url: 'https://www.dti.gov.ph/archives/news-archives/ph-biggest-mover-network-readiness-index-2022-report/'
                },
                {
                    id: 148257,
                    title: 'PH jumps in global ICT readiness ranking',
                    excerpt: 'The Philippines is the biggest mover in the Network Readiness Index (NRI) 2022 ranking...',
                    url: 'https://mb.com.ph/2022/11/29/ph-jumps-in-global-ict-readiness-ranking/'
                }
            ]
        },
        {
            title: 'World Digital Competitiveness Ranking',
            articles: [
                {
                    id: 654897,
                    title: 'PH falls 59th spot in digital competitiveness ranking',
                    excerpt: 'Manila—The Department of Trade and Industry (DTI) welcomed the recent results of the Network Readiness Report (NRI) released by the Portulans Institute—a Washington DC...',
                    url: 'https://business.inquirer.net/434450/ph-slips-3-places-in-digital-competitiveness-ranking'
                },
                {
                    id: 148257,
                    title: 'PH slips 3 places in digital competitiveness ranking',
                    excerpt: 'MANILA  -The Philippines slipped three spots to 59th place in the global...',
                    url: 'https://businessmirror.com.ph/2023/12/01/phl-slips-in-2023-world-digital-competitiveness-ranking/'
                },
                {
                    id: 658987,
                    title: 'Philippines falls to 52nd spot in world competitiveness ranking',
                    excerpt: 'The Philippines is the biggest mover in the Network Readiness Index (NRI) 2022 ranking...',
                    url: 'https://www.gmanetwork.com/news/money/economy/873439/philippines-falls-to-52nd-spot-in-world-competitiveness-ranking/story/'
                },
            ]
        },
        {
            title: 'Programme for International Student Assessment (PISA)',
            articles: [
                {
                    id: 158357,
                    title: 'CHED to address PH students’ low int’l assessment ranking 6 December 2023',
                    excerpt: 'MANILA – The Commission on Higher Education (CHED) on Wednesday said it would work more closely with...',
                    url: 'https://www.pna.gov.ph/articles/1215002'
                }
            ]
        },
        {
            title: 'Global Innovation Index',
            articles: [
                {
                    id: 147952,
                    title: 'PH rises up to rank 56th in the Global Innovation Index 2023',
                    excerpt: 'MANILA, PHILIPPINES 05 October 2023–The Department of Trade and Industry (DTI) reported that the Philippines rose three notches in the latest Global Innovation Index...',
                    url: 'https://www.dti.gov.ph/archives/news-archives/ph-rises-up-rank-56th-global-innovation-index-2023/#:~:text=MANILA%2C%20PHILIPPINES%2005%20October%202023,2023%20rankings%2C%20ranking%2056th%20overall'
                },
                {
                    id: 326514,
                    title: 'Philippine Performance in the 2023 Global Innovation Index',
                    excerpt: 'The Global Innovation Index (GII), published by the World Intellectual Property Organization (WIPO), aims to...',
                    url: 'https://cpbrd.congress.gov.ph/2012-06-30-13-06-51/2012-06-30-13-36-50/1690-ff2023-48-philippine-performance-in-the-2023-global-innovation-index'
                },
                {
                    id: 659587,
                    title: 'PH improves ranking in Global Innovation Index 2023',
                    excerpt: 'MANILA – The Philippines ranking in the Global Innovation Index (GII) improved to 56th place among 132...',
                    url: 'https://www.pna.gov.ph/articles/1210659'
                },
                {
                    id: 253354,
                    title: 'Philippines improves in global innovation index',
                    excerpt: 'MANILA, Philippines — The Philippines was named as one of the top climbers of...',
                    url: 'https://www.philstar.com/headlines/2023/09/29/2299816/philippines-improves-global-innovation-index'
                },
                {
                    id: 158541,
                    title: 'Global Innovation Index 2023: Message from Philippines’ President',
                    excerpt: 'Message from Ferdinand R. Marcos Jr., President of the Philippines, on the occasion of the launch of WIPOs Global Innovation Index (GII) 2023...',
                    url: 'https://www.youtube.com/watch?v=o-GYC13ON_U'
                }
            ]
        },
        {
            title: 'Global Talent Competitiveness Index',
            articles: [
                {
                    id: 653698,
                    title: 'Philippines drops four spots in list of most talent competitive countries',
                    excerpt: 'THE PHILIPPINES has dropped four spots in an index that ranked countries based on their ability to...',
                    url: 'https://www.bworldonline.com/top-stories/2023/11/09/556442/philippines-drops-four-spots-in-list-of-most-talent-competitive-countries/#:~:text=The%20Philippines%20ranked%2084th,the%20Human%20Capital%20Leadership%20Institute.'
                },
                {
                    id: 984659,
                    title: 'Philippines drops four spots in global talent index',
                    excerpt: 'MANILA, Philippines — The Philippines dropped four spots to rank 84th out of...',
                    url: 'https://www.philstar.com/headlines/2023/11/09/2309995/philippines-drops-four-spots-global-talent-index'
                },
                {
                    id: 254152,
                    title: 'Philippines falls 10 spots in global talent competitiveness index',
                    excerpt: 'THE PHILIPPINES dropped 10 spots in an annual global ranking of countries’ ability to attract and retain a skilled workforce, reflecting the challenges faced by companies amid the coronavirus pandemic...',
                    url: 'https://governance.neda.gov.ph/philippines-falls-10-spots-in-global-talent-competitiveness-index/'
                },
                {
                    id: 265452,
                    title: 'PH drops to 60th in global talent ranking',
                    excerpt: 'The Philippines dropped six spots from 54th to 60th among 64 nations, which are still...',
                    url: 'https://mb.com.ph/2023/9/21/ph-drops-to-60th-in-global-talent-ranking'
                }
            ]
        },
        {
            title: 'World Talent Ranking',
            articles: [
                {
                    id: 358591,
                    title: 'Philippines drops in world talent rankings',
                    excerpt: 'MANILA, Philippines — The Philippines ranks among the lowest in global talent...',
                    url: 'https://www.philstar.com/business/2023/09/23/2298266/philippines-drops-world-talent-rankings'
                },
                {
                    id: 165689,
                    title: 'Philippines drops four spots in global talent index',
                    excerpt: 'The Philippines dropped six spots from 54th to 60th among 64 nations, which are still...',
                    url: 'https://mb.com.ph/2023/9/21/ph-drops-to-60th-in-global-talent-ranking'
                }
            ]
        },
        {
            title: 'Energy Transition Index',
            articles: [
                {
                    id: 358591,
                    title: 'Managing the energy trilemma in the Philippines',
                    excerpt: 'The transition to an energy mix with lower carbon emissions is hampered by the existence of...',
                    url: 'https://energsustainsoc.biomedcentral.com/articles/10.1186/s13705-021-00309-1'
                }
            ]
        },
        {
            title: 'Environmental Performance Index',
            articles: [
                {
                    id: 548578,
                    title: 'Climate Change Performance Index 2024',
                    excerpt: 'The annual Climate Change Performance Index (CCPI), published since 2005, is an independent monitoring tool for...',
                    url: 'https://ccpi.org/wp-content/uploads/CCPI-2024-Results.pdf'
                }
            ]
        },
        {
            title: 'Global Health Security Index',
            articles: [
                {
                    id: 362569,
                    title: '2022 Philippine National Demographic and Health Survey (NDHS), February 2023.',
                    excerpt: 'The 2022 Philippines National Demographic and Health Survey (NDHS) was implemented by the...',
                    url: 'https://dhsprogram.com/pubs/pdf/FR381/FR381.pdf'
                }
            ]
        },
        {
            title: 'Global Health Security Index',
            articles: [
                {
                    id: 325123,
                    title: 'Global Hunger Index: Hunger situation in the Philippines improves in 2023',
                    excerpt: 'The Philippines’ rank rose six notches* to 66th out of 125 countries in the latest edition of the Global...',
                    url: 'https://www.bworldonline.com/infographics/2023/10/13/551439/global-hunger-index-hunger-situation-in-the-philippines-improves-in-2023/'
                }
            ]
        },
        {
            title: 'Logistics Performance Index',
            articles: [
                {
                    id: 845685,
                    title: 'PH now top third in World Bank’s 2023 Logistics Performance Index (LPI) report',
                    excerpt: 'MAKATI CITY — The Department of Trade and Industry (DTI) welcomed on 21 April 2023 the World Bank report...',
                    url: 'https://www.dti.gov.ph/archives/ph-now-top-third-in-world-banks-2023-logistics-performance-index-lpi-report/#:~:text=From%20an%20LPI%20score%20of,%2C%20Cambodia%2C%20and%20Lao%20PDR.'
                },
                {
                    id: 248549,
                    title: 'PH posts highest ranking in WB logistics report at 43rd spot',
                    excerpt: 'MANILA – The Philippines landed at the 43rd spot in the World Bank’s (WB) Logistics Performance Index (LPI)...',
                    url: 'https://www.pna.gov.ph/articles/1199992'
                },
                {
                    id: 651632,
                    title: 'Philippines improves in Logistics Performance Index',
                    excerpt: 'The Philippines’ overall score improved by 0.4 point to 3.3 out of 5 in the the seventh edition of Logistics...',
                    url: 'https://www.bworldonline.com/infographics/2023/04/24/518627/philippines-improves-in-logistics-performance-index/'
                },
                {
                    id: 741879,
                    title: 'PH ports move up in World Bank’s logistics index global ranking',
                    excerpt: 'Philippine ports, and the way they are managed, have significantly improved based on the...',
                    url: 'https://mb.com.ph/2023/4/26/ph-ports-move-up-in-world-bank-s-logistics-index-global-ranking'
                },
                {
                    id: 165328,
                    title: 'PH jumps 17 notches in annual global logistic survey',
                    excerpt: 'The Philippines ranks 43rd out of 139 economies around the globe in the...',
                    url: 'https://business.inquirer.net/397276/ph-jumps-17-notches-in-annual-global-logistic-survey'
                }
            ]
        }
    ]

    return (
        <>
            <Head title="News -nPhilippine Global Competitiveness Report Card" />

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
                                <ResponsiveNavLink href={route('about')} >About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')} >Reports</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('news')} active={route().current('news')}>News</ResponsiveNavLink>
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
                                    <h1 className='text-6xl sm:text-12xl font-bold'>NEWS</h1>
                                    <p className='mt-4 text-base sm:text-lg lg:text-xl'>News / Articles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-4 mb-6'>
                    <section className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                        {reports.map((report, index) => (
                            <div key={index} className='mb-6 border rounded-lg shadow-md overflow-hidden'>
                                <h2 className="bg-blue-900 text-white text-xl font-bold p-4">{report.title}</h2>
                                <div className="p-4 space-y-4">
                                    {report.articles.map((article) => (
                                        <div key={article.id} className="bluerounded-lg shadow-md p-4 mb-6 shadow-md overflow-hidden transition-transform duration-300 transform scale-95 hover:scale-100 hover:shadow-lg">
                                            <h3 className="text-lg font-bold">{article.title}</h3>
                                            <p className="text-sm">{article.excerpt}</p>
                                            <a href={article.url} className="text-blue-500 hover:font-bold">
                                                Read more
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                </main>

                <Footer />

                <ScrollToTopButton />

            </div>

        </>
    );
}