import React from 'react';

export default function Header() {
    return (

        <header className="bg-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className='relative overflow-hidden'>
                    <img src="/backend/assets/images/bg-header.jpg" alt="ARTA Banner" className='w-full rounded-xl' />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-75 rounded-xl'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='text-center text-white'>
                            <h1 className='text-2xl sm:text-8xl md:text-8xl lg:text-8xl mx-12 sm:m-0 font-bold'>PHILIPPINE GLOBAL COMPETITIVENESS REPORT CARD</h1>
                            <p className='mt-2 sm:mt-4 text-1xl sm:text-2xl mx-3 sm:m-0'>Measuring and Tracking the Country's Global Competitiveness</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}
