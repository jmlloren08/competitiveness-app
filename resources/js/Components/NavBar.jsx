import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import '../../css/NavBar.css';
import ApplicationLogo from './ApplicationLogo';
import NavLink from '@/Components/NavLink';

export default function NavBar() {

    return (
        <div className="flex items-center">

            <Link href="/">
                <ApplicationLogo
                    src='/backend/assets/images/logo-arta.png'
                    alt='ARTA Logo'
                    className='h-16'
                />
            </Link>

            <div className="hidden space-x-4 ml-10 sm:flex">
                <NavLink href={route('/')} active={route().current('/')}>
                    Home
                </NavLink>
                <NavLink href={route('about')}>
                    About
                </NavLink>
                <NavLink href={route('reports')}>
                    Reports
                </NavLink>
                <NavLink href={route('news')}>
                    News
                </NavLink>
                <NavLink href={route('contact-us')}>
                    Contact Us
                </NavLink>
            </div>

            <div className='hidden space-x-1 ml-5 sm:flex'>
                {/* <img src="/backend/assets/images/logo-arta.png" alt="Arta Logo" className='h-16' /> */}
                <img src="/backend/assets/images/logo-dti.png" alt="DTI Logo" className='h-16' />
                <img src="/backend/assets/images/logo-aim.png" alt="AIM Logo" className='h-16' />
                <img src="/backend/assets/images/logo-lcp.png" alt="LCP Logo" className='h-16' />
            </div>

        </div>
    );
}
