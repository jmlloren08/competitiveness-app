import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function NewsPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

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

                <main className='bg-white mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-6 mb-6'>

                    <section>
                        
                    </section>

                </main>

                <Footer />

            </div>

        </>
    );
}