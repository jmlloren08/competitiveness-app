import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function ReportPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const menuItems = [
        {
            name: 'General', icon: '/backend/assets/images/icon-general.png',
            subMenu: [{name: 'World Competitiveness Yearbook', icon: '/backend/assets/images/icon-wcy.png'}]
        },
        {
            name: 'Digital', icon: '/backend/assets/image/icon-digital.png',
            subMenu: [
                'Digital Quality of Life Index', icon: '/backend/assets/images/dqli.png',
                'GovTech Maturity Index', icon: '/backend/assets/images/gtmi.png',
                'ICT Development Index', icon: '/backend/assets/images/ictdi.png'
                'E-Government Development Index',
                'Network Readiness Index',
                'World Digital Competitiveness Ranking'
            ]
        },
        {
            name: 'Education Talent & Innovation',
            subMenu: [
                'Programme for International Student Assessment (PISA)',
                'Global Innovation Index',
                'Global Talent Competitiveness Index',
                'World Talent Ranking'
            ]
        },
        {
            name: 'Energy & Environment',
            subMenu: [
                'Energy Transition Index (ETI)',
                'Environmental Performance Index'
            ]
        },
        {
            name: 'Governance',
            subMenu: [
                'B-Ready/Doing Business Report',
                'Corruption Perceptions Index',
                'Economic Freedom Index',
                'Worldwide Governance Indicators'
            ]
        },
        {
            name: 'Health & Nutrition',
            subMenu: [
                'Global Health Security Index',
                'Global Hunger Index'
            ]
        },
        { name: 'Trade', subMenu: ['Logistics Performance Index'] }
    ]

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    }

    const handleBackClick = () => {
        setSelectedMenu('');
    }

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

                <main className='bg-white mx-24 py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-12'>

                    <section className='text-center'>
                        {!selectedMenu ? (
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
                                {menuItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            className='bg-blue-900 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105 w-10/12 h-72'
                                            onClick={() => handleMenuClick(item.name)}
                                        >
                                            <div>
                                                <img
                                                    src={`/backend/assets/images/${item.name.toLowerCase()}.png`}
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
                            <div className="mb-6 bg-blue-900 text-white font-bold py-4 px-6 rounded-lg">
                                <h2 className="text-2xl font-bold mb-4">{selectedMenu}</h2>
                                <ul>
                                    {menuItems.find(item => item.name === selectedMenu).subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="text-lg mb-2">
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className='mt-4 bg-gray-800 text-white font-bold py-2 px-4 rounded-lg'
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