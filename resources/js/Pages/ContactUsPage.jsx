import React, { useEffect, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import ScrollToTopButton from '@/Components/ScrollToTopButton';
import InputError from '@/Components/InputError';

const ResponsiveNavLink = React.lazy(() => import('@/Components/ResponsiveNavLink'));
const NavBar = React.lazy(() => import('@/Components/NavBar'));
const Footer = React.lazy(() => import('@/Components/Footer'));

export default function ContactUsPage() {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (wasSuccessful) {
            reset();
        }
    }, [wasSuccessful]);

    const submit = (e) => {
        e.preventDefault();
        post(route('contact-us'));
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
                                <ResponsiveNavLink href={route('news')} >News</ResponsiveNavLink>
                                <ResponsiveNavLink href={route('contact-us')} active={route().current('contact-us')}>Contact Us</ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>
                <header className="bg-white">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <div className='relative overflow-hidden'>
                            <img src="/backend/assets/images/bg-header.jpg" alt="ARTA Banner" className='w-full h-48 sm:h-64 lg:h-80 rounded-xl' />
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-xl'></div>
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <div className='text-center text-white'>
                                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>CONTACT US</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className='bg-white max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-0 mb-12'>
                    <section
                        className='mx-auto p-6 bg-cover bg-center text-white rounded-lg shadow-md flex flex-col md:flex-row space-y-6 md:space-y-0'
                        style={{ backgroundImage: 'url("/backend/assets/images/bg-header.jpg")' }}
                    >
                        <div className='w-full md:w-1/2 p-6 flex flex-col justify-center'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Let's us know how we can improve the Philippine Global Competitiveness Report Card</h2>
                            <p className='mb-6'>Got any questions or suggestions? Contact us!</p>
                        </div>
                        <div className='w-full md:w-1/2 p-6'>
                            <form onSubmit={submit}>
                                <div className='mb-4'>
                                    <label htmlFor="name" className='block text-sm font-bold mb-2'>
                                        Name:
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-700 bg-white rounded-lg border focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400'
                                        id='name'
                                        name='name'
                                        type="text"
                                        value={data.name}
                                        autoComplete='name'
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder='Your name'
                                        required
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='block text-sm font-bold mb-2'>
                                        Email:
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-700 bg-white rounded-lg border focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400'
                                        id='email'
                                        name='email'
                                        type="email"
                                        value={data.email}
                                        placeholder='Your email'
                                        autoComplete='email'
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="message" className='block text-sm font-bold mb-2'>
                                        Message:
                                    </label>
                                    <textarea
                                        className='w-full px-4 py-3 text-gray-700 bg-white rounded-lg border focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400'
                                        id='message'
                                        name='message'
                                        value={data.message}
                                        autoComplete='message'
                                        onChange={(e) => setData('message', e.target.value)}
                                        required
                                        placeholder='Your message'
                                        rows="5"
                                    ></textarea>
                                    <InputError message={errors.message} className="mt-2" />
                                </div>

                                {wasSuccessful && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                                        <strong className="font-bold">Success:</strong>
                                        <span className="block sm:inline"> Thank you for your feedback! Your message has been sent successfully.</span>
                                    </div>
                                )}

                                {errors.error && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                                        <strong className="font-bold">Error:</strong>
                                        <span className="block sm:inline"> {errors.error}</span>
                                    </div>
                                )}

                                <div className='flex items-center justify-start'>
                                    <button
                                        className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 
                                        transition ease-in-out duration-300 ${processing ? 'bg-gray-500 cursor-not-allowed' : 'cursor-pointer'}`}
                                        type='submit'
                                    >
                                        {processing ? 'Processing...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>

        </>
    );
}