import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));

export default function ReportPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [selectedSubMenu, setSelectedSubMenu] = useState('');

    const menuItems = [
        {
            name: 'General', icon: '/backend/assets/images/icon-general.png',
            subMenu: [
                {
                    name: 'World Competitiveness Yearbook',
                    icon: '/backend/assets/images/icon-wcy.png',
                    route: 'reports.general.wcy'
                }
            ]
        },
        {
            name: 'Digital', icon: '/backend/assets/images/icon-digital.png',
            subMenu: [
                {
                    name: 'Digital Quality of Life Index',
                    icon: '/backend/assets/images/icon-dqli.png',
                    route: 'reports.digital.dqli'
                },
                {
                    name: 'GovTech Maturity Index',
                    icon: '/backend/assets/images/icon-gtmi.png',
                    route: 'reports.digital.gmi'
                },
                {
                    name: 'ICT Development Index',
                    icon: '/backend/assets/images/icon-ictdi.png',
                    route: 'reports.digital.ictdi'
                },
                {
                    name: 'E-Government Development Index',
                    icon: '/backend/assets/images/icon-egdi.png',
                    route: 'reports.digital.egdi'
                },
                {
                    name: 'Network Readiness Index',
                    icon: '/backend/assets/images/icon-nri.png',
                    route: 'reports.digital.nri'
                },
                {
                    name: 'World Digital Competitiveness Ranking',
                    icon: '/backend/assets/images/icon-wdcr.png',
                    route: 'reports.digital.wdcr'
                }
            ]
        },
        {
            name: 'Education Talent & Innovation', icon: '/backend/assets/images/icon-eti.png',
            subMenu: [
                {
                    name: 'Programme for International Student Assessment (PISA)',
                    icon: '/backend/assets/images/icon-pisa.png',
                    route: 'reports.educationtalent&innovation.pisa'
                },
                {
                    name: 'Global Innovation Index',
                    icon: '/backend/assets/images/icon-gii.png',
                    route: 'reports.educationtalent&innovation.gii'
                },
                {
                    name: 'Global Talent Competitiveness Index',
                    icon: '/backend/assets/images/icon-gtci.png',
                    route: 'reports.educationtalent&innovation.gtci'
                },
                {
                    name: 'World Talent Ranking',
                    icon: '/backend/assets/images/icon-wtr.png',
                    route: 'reports.educationtalent&innovation.wtr'
                }
            ]
        },
        {
            name: 'Energy & Environment', icon: '/backend/assets/images/icon-ee.png',
            subMenu: [
                {
                    name: 'Energy Transition Index (ETI)',
                    icon: '/backend/assets/images/icon-eti2.png',
                    route: 'reports.energy&environment.eti'
                },
                {
                    name: 'Environmental Performance Index',
                    icon: '/backend/assets/images/icon-epi.png',
                    route: 'reports.energy&environment.epi'
                }
            ]
        },
        {
            name: 'Governance', icon: '/backend/assets/images/icon-governance.png',
            subMenu: [
                {
                    name: 'B-Ready/Doing Business Report',
                    icon: '/backend/assets/images/icon-brdbr.png',
                    route: 'reports.governance.brdbr'
                },
                {
                    name: 'Corruption Perceptions Index',
                    icon: '/backend/assets/images/icon-cpi.png',
                    route: 'reports.governance.cpi'
                },
                {
                    name: 'Economic Freedom Index',
                    icon: '/backend/assets/images/icon-efi.png',
                    route: 'reports.governance.efi'
                },
                {
                    name: 'Worldwide Governance Indicators', icon: '/backend/assets/images/icon-wgi.png',
                    subsubMenu: [
                        {
                            name: ' WGI - Voice and Accountability',
                            icon: '/backend/assets/images/icon-va.png',
                            route: 'reports.governance.voiceandaccountability'
                        },
                        {
                            name: ' WGI - Political Stability and Absence of Violence/Terrorism',
                            icon: '/backend/assets/images/icon-psavt.png',
                            route: 'reports.governance.psavt'
                        },
                        {
                            name: 'WGI - Government Effectiveness',
                            icon: '/backend/assets/images/icon-ge.png',
                            route: 'reports.governance.governmenteffectiveness'
                        },
                        {
                            name: 'WGI - Regulatory Quality',
                            icon: '/backend/assets/images/icon-rq.png',
                            route: 'reports.governance.regulatoryquality'
                        },
                        {
                            name: 'WGI - Rule of Law',
                            icon: '/backend/assets/images/icon-rl.png',
                            route: 'reports.governance.ruleoflaw'
                        },
                        {
                            name: 'WGI - Control of Corruption',
                            icon: '/backend/assets/images/icon-cc.png',
                            route: 'reports.governance.controlofcorruption'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Health & Nutrition', icon: '/backend/assets/images/icon-hn.png',
            subMenu: [
                {
                    name: 'Global Health Security Index',
                    icon: '/backend/assets/images/icon-ghsi.png',
                    route: 'reports.health&nutrition.ghsi'
                },
                {
                    name: 'Global Hunger Index',
                    icon: '/backend/assets/images/icon-ghi.png',
                    route: 'reports.health&nutrition.ghi'
                }
            ]
        },
        {
            name: 'Trade', icon: '/backend/assets/images/icon-trade.png',
            subMenu: [
                {
                    name: 'Logistics Performance Index',
                    icon: '/backend/assets/images/icon-lpi.png',
                    route: 'reports.trade.lpi'
                }
            ]
        }
    ]

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setSelectedSubMenu(''); //reset the submenu on new menu click
    }

    const handleSubMenuClick = (subMenu) => {
        setSelectedSubMenu(subMenu); //set the submenu when clicked
    }

    const handleBackClick = () => {
        if (selectedSubMenu) {
            setSelectedSubMenu(''); //go back to main submenu if already in a submenu
        } else {
            setSelectedMenu(''); //go back to main menu
        }
    }

    const selectedMenuItem = menuItems.find(item => item.name === selectedMenu);
    const selectedSubMenuItem = selectedMenuItem?.subMenu?.find(sub => sub.name === selectedSubMenu);

    return (
        <>
            <Head title="Reports - Philippine Global Competitiveness Report Card" />

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

                            <div className="px-4"></div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route('about')} >About</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('reports')} active={route().current('reports')}>Reports</ResponsiveNavLink>
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
                                    <h1 className='text-2xl sm:text-6xl mx-4 sm:m-4 font-bold'>PHILIPPINE GLOBAL COMPETITIVENESS REPORT CARD</h1>
                                    <p className='mt-4 text-base sm:text-lg lg:text-xl'>REPORTS TRACKED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-4 sm:mx-6 lg:mx-32 py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-12'>
                    <section className='text-center'>
                        {!selectedMenu ? (
                            <>
                                {/* for large screens */}
                                <div className='hidden lg:flex lg:justify-center xl:flex xl:justify-center gap-4'>
                                    {menuItems.map((item, index) => (
                                        <div key={index} className="relative w-full flex-1">
                                            <button
                                                className='bg-gradient-to-r from-blue-900 to-blue-950 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105 w-full h-full'
                                                onClick={() => handleMenuClick(item.name)}
                                            >
                                                <div>
                                                    <img
                                                        src={item.icon}
                                                        alt={`${item.name} Icon`}
                                                        className='h-auto mx-auto'
                                                        style={{ filter: 'invert(100%)' }}
                                                    />
                                                </div>
                                                <div className="text-2xl flex items-center justify-center">{item.name}</div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                {/* for small screens */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden xl:hidden gap-4'>
                                    {menuItems.map((item, index) => (
                                        <div key={index} className="relative w-full">
                                            <button
                                                className='bg-gradient-to-r from-blue-900 to-blue-950 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105 w-full h-full'
                                                onClick={() => handleMenuClick(item.name)}
                                            >
                                                <div>
                                                    <img
                                                        src={item.icon}
                                                        alt={`${item.name} Icon`}
                                                        className='h-auto mx-auto'
                                                        style={{ filter: 'invert(100%)' }}
                                                    />
                                                </div>
                                                <div className="text-2xl flex items-center justify-center">{item.name}</div>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : !selectedSubMenu ? (
                            <div className="mb-6 bg-gradient-to-r from-blue-950 to-blue-900 text-white font-bold py-4 px-6 rounded-lg">
                                <div className="mb-4">
                                    <img
                                        src={selectedMenuItem.icon}
                                        alt={`${selectedMenu} Icon`}
                                        className='h-16 mx-auto'
                                        style={{ filter: 'invert(100%)' }}
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">{selectedMenu}</h2>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    {selectedMenuItem.subMenu.map((subItem, subIndex) => (
                                        <div key={subIndex} className="hover:bg-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                                            <div>
                                                <img
                                                    src={subItem.icon}
                                                    alt={`${subItem.name} Icon`}
                                                    className='h-12'
                                                    style={{ filter: 'invert(100%)' }}
                                                />
                                            </div>
                                            <div className="text-lg">
                                                {subItem.subsubMenu ? (
                                                    <button onClick={() => handleSubMenuClick(subItem.name)}>
                                                        {subItem.name}
                                                    </button>
                                                ) : (
                                                    <Link href={route(`${subItem.route}`)}>{subItem.name}</Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className='mt-4 bg-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg'
                                    onClick={handleBackClick}
                                >
                                    Back to Main Menu
                                </button>
                            </div>
                        ) : (
                            <div className="mb-6 bg-gradient-to-r from-blue-950 to-blue-900 text-white font-bold py-4 px-6 rounded-lg">
                                <div className="mb-4">
                                    <img
                                        src={selectedMenuItem.icon}
                                        alt={`${selectedSubMenu} Icon`}
                                        className='h-16 mx-auto'
                                        style={{ filter: 'invert(100%)' }}
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">{selectedSubMenu}</h2>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    {selectedSubMenuItem.subsubMenu.map((subsubItem, subsubIndex) => (
                                        <div key={subsubIndex} className="hover:bg-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg flex items-center space-x-2">
                                            <div>
                                                <img
                                                    src={subsubItem.icon}
                                                    alt={`${subsubItem.name} Icon`}
                                                    className='h-12'
                                                    style={{ filter: 'invert(100%)' }}
                                                />
                                            </div>
                                            <div className="text-lg mx-3 flex items-center">
                                                {subsubItem.subsubMenu ? (
                                                    <button onClick={() => handleSubMenuClick(subsubItem.name)}>
                                                        {subsubItem.name}
                                                    </button>
                                                ) : (
                                                    <Link href={route(`${subsubItem.route}`)}>{subsubItem.name}</Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className='mt-4 bg-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg'
                                    onClick={handleBackClick}
                                >
                                    Back to Sub Menu
                                </button>
                            </div>
                        )}
                    </section>

                </main>

                <Footer />

                <ScrollToTopButton />

            </div >

        </>
    );
}