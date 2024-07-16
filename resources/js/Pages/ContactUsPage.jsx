import { Head, Link } from "@inertiajs/react";
import React from 'react';

const ContactUsPage = () => {
    return (
        <>
            <div>
                <Head title="Competitiveness Dashboard - Contact Us"></Head>
                <h1>Welcome, Contact Us</h1>
                <p>back to... <Link href={route('/')}>Home</Link></p>
            </div>
        </>
    )
}

export default ContactUsPage;