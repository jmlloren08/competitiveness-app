import { Head, Link } from '@inertiajs/react';
import React from 'react';

const ReportPage = () => {
    return (
        <>
            <Head title="Competitiveness Dashboard - Reports" />
            <div>
                <h1>Welcome, Reports</h1>
                <p>back to... <Link href={route('/')}>Home</Link></p>
            </div>
        </>
    )
}

export default ReportPage;