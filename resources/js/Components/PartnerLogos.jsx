import React from 'react';

export default function PartnerLogos() {
    return (
        <div className='flex flex-col sm:flex-row items-center mb-4 sm:mb-0'>
            <span className='text-lg font-semibold mr-4 sm:ml-8'>In partnership with:</span>
            <div className='flex items-center mr-5'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <img src="/backend/assets/images/logo-dti.png" alt="DTI Logo" className='h-16' />
                    <img src="/backend/assets/images/logo-aim.png" alt="AIM Logo" className='h-16' />
                    <img src="/backend/assets/images/logo-lcp.png" alt="LCP Logo" className='h-16' />
                </div>
            </div>
        </div>
    );
}