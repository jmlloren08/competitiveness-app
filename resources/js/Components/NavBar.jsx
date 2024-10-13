import React from 'react';
import { Link } from '@inertiajs/react';
import '../../css/NavBar.css';
import ApplicationLogo from './ApplicationLogo';
import NavLink from '@/Components/NavLink';

export default function NavBar() {
    const currentRoute = route().current();

    return (
        <div className="flex items-center">

            <Link href="/">
                <ApplicationLogo
                    src='/backend/assets/images/logo-arta.png'
                    alt='ARTA Logo'
                    className='h-16 max-w-full object-contain'
                />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden space-x-4 ml-10 sm:flex">
                <NavLink href={route('/')} active={currentRoute === '/'}>
                    Home
                </NavLink>
                <NavLink href={route('about')} active={currentRoute === 'about'}>
                    About
                </NavLink>
                <NavLink href={route('reports')} active={currentRoute === 'reports'}>
                    Reports
                </NavLink>
                <NavLink href={route('news')} active={currentRoute === 'news'}>
                    News
                </NavLink>
                <NavLink href={route('contact-us')} active={currentRoute === 'contact-us'}>
                    Contact Us
                </NavLink>
            </div>

            <div className='hidden space-x-1 ml-5 sm:flex'>
                {[
                    { src: '/backend/assets/images/logo-dti.png', alt: 'DTI Logo', url: 'https://www.dti.gov.ph/' },
                    { src: '/backend/assets/images/logo-aim.png', alt: 'AIM Logo', url: 'https://aim.edu/' },
                    { src: '/backend/assets/images/logo-lcp.png', alt: 'LCP Logo', url: 'https://www.lcp.gov.ph/' }
                ].map((logo, index) => (
                    <a key={logo.alt} href={logo.url} target='_blank' rel='noopener noreferrer' className='scale-90 hover:scale-100 transition-transform duration-300'>
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className='h-16 max-w-full object-contain'
                        />
                    </a>
                ))}
            </div>

        </div>
    );
}