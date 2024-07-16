import { Head, Link } from '@inertiajs/react';
import React from 'react';

const NewsPage = () => {
    return (
        <>
            <Head title="Competitiveness Dashboard - News" />
            <div>
                <h1>Welcome, News</h1>
                <p>back to... <Link href={route('/')}>Home</Link></p>
            </div>
        </>
    )
}

export default NewsPage;