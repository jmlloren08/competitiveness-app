import { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Header from '@/Components/Header';
import NavBar from '@/Components/NavBar';

export default function AboutPage() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
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
                        <ResponsiveNavLink href={route('about')} active={route().current('/about')}>
                            About
                        </ResponsiveNavLink>
                    </div> 

                    <div className="pt-4 pb-1 border-t border-gray-200">

                        <div className="px-4">
                            {/* <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div> */}
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('about')}>About</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('reports')}>Reports</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('news')}>News</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('contact-us')}>Contact Us</ResponsiveNavLink>
                        </div>

                    </div>
                </div>
            </nav>

            <Header />

            <main>

            </main>
        </div>
    );
}