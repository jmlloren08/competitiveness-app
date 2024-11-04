import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-4 right-4 text-white p-2 transition duration-300'
                    aria-label='Scroll to top'
                >
                    <img
                        src='/backend/assets/images/icons8-up-squared-48.png'
                        alt={`Scroll to Top Icon`}
                        className='h-12 mx-auto'
                    />
                </button>
            )}
        </div>
    );
}