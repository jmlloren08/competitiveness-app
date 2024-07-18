import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { Head, Link } from '@inertiajs/react';

export default function ReportPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const menuItems = [
        {
            name: 'General', icon: '/backend/assets/images/icon-general.png',
            subMenu: [
                {
                    name: 'World Competitiveness Yearbook',
                    icon: '/backend/assets/images/icon-wcy.png'
                }
            ]
        },
        {
            name: 'Digital', icon: '/backend/assets/images/icon-digital.png',
            subMenu: [
                {
                    name: 'Digital Quality of Life Index',
                    icon: '/backend/assets/images/icon-dqli.png'
                },
                {
                    name: 'GovTech Maturity Index',
                    icon: '/backend/assets/images/icon-gtmi.png'
                },
                {
                    name: 'ICT Development Index',
                    icon: '/backend/assets/images/icon-ictdi.png'
                },
                {
                    name: 'E-Government Development Index',
                    icon: '/backend/assets/images/icon-egdi.png'
                },
                {
                    name: 'Network Readiness Index',
                    icon: '/backend/assets/images/icon-nri.png'
                },
                {
                    name: 'World Digital Competitiveness Ranking',
                    icon: '/backend/assets/images/icon-wdcr.png'
                }
            ]
        },
        {
            name: 'Education Talent & Innovation', icon: '/backend/assets/images/icon-eti.png',
            subMenu: [
                {
                    name: 'Programme for International Student Assessment (PISA)',
                    icon: '/backend/assets/images/icon-pisa.png'
                },
                {
                    name: 'Global Innovation Index',
                    icon: '/backend/assets/images/icon-gii.png'
                },
                {
                    name: 'Global Talent Competitiveness Index',
                    icon: '/backend/assets/images/icon-gtci.png'
                },
                {
                    name: 'World Talent Ranking',
                    icon: '/backend/assets/images/icon-wtr.png'
                }
            ]
        },
        {
            name: 'Energy & Environment', icon: '/backend/assets/images/icon-ee.png',
            subMenu: [
                {
                    name: 'Energy Transition Index (ETI)',
                    icon: '/backend/assets/images/icon-eti.png'
                },
                {
                    name: 'Environmental Performance Index',
                    icon: '/backend/assets/images/icon-epi.png'
                }
            ]
        },
        {
            name: 'Governance', icon: '/backend/assets/images/icon-governance.png',
            subMenu: [
                {
                    name: 'B-Ready/Doing Business Report',
                    icon: '/backend/assets/images/icon-brdbr.png'
                },
                {
                    name: 'Corruption Perceptions Index',
                    icon: '/backend/assets/images/icon-cpi.png'
                },
                {
                    name: 'Economic Freedom Index',
                    icon: '/backend/assets/images/icon-efi.png'
                },
                {
                    name: 'Worldwide Governance Indicators',
                    icon: '/backend/assets/images/icon-wgi.png'
                }
            ]
        },
        {
            name: 'Health & Nutrition', icon: '/backend/assets/images/icon-hn.png',
            subMenu: [
                {
                    name: 'Global Health Security Index',
                    icon: '/backend/assets/images/icon-ghsi.png'
                },
                {
                    name: 'Global Hunger Index',
                    icon: '/backend/assets/images/icon-ghi.png'
                }
            ]
        },
        {
            name: 'Trade', icon: '/backend/assets/images/icon-trade.png',
            subMenu: [
                {
                    name: 'Logistics Performance Index',
                    icon: '/backend/assets/images/icon-lpi.png'
                }
            ]
        }
    ]

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    }

    const handleBackClick = () => {
        setSelectedMenu('');
    }

    const selectedMenuItem = menuItems.find(item => item.name === selectedMenu);

    return (
        <>
            <Head title="Competitiveness Dashboard - Reports" />

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
                                    <h1 className='text-2xl sm:text-6xl mx-12 sm:m-4 font-bold'>PHILIPPINE GLOBAL COMPETITIVENESS REPORT CARD</h1>
                                    <p className='mt-4 text-base sm:text-lg lg:text-xl'>REPORTS TRACKED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className='bg-white mx-32 py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-12'>

                    <section className='text-center'>
                        {!selectedMenu ? (
                            <div className='grid grid-rows-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-0 md:gap-0 lg:gap-0'>
                                {menuItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            className='bg-gradient-to-r from-blue-900 to-blue-950 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105 w-10/12 sm:w-11/12 h-64 sm:h-72'
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
                        ) : (
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
                                <div className="grid grid-rows-1 sm:grid-rows-auto gap-4 flex items-center justify-center">
                                    {selectedMenuItem.subMenu.map((subItem, subIndex) => (
                                        <div key={subIndex} className="no-bg hover:bg-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 text-white font-bold py-2 px-4 rounded-lg flex items-center">
                                            <div>
                                                <img
                                                    src={subItem.icon}
                                                    alt={`${subItem.name} Icon`}
                                                    className='h-12 mx-auto'
                                                    style={{ filter: 'invert(100%)' }}
                                                />
                                            </div>
                                            <div className="no-underline hover:underline text-lg mx-3 flex items-center"><Link>{subItem.name}</Link></div>
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
                        )}
                    </section>

                </main>

                <Footer />

            </div>

        </>
    );
}