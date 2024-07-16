import React from 'react';
import '../../css/LogoBar.css'
const LogoBar = () => {
    return (
        <div className='logoBar'>
            <img src="/backend/assets/images/logo-arta.png" alt="Arta Logo" className='logo' />
            <img src="/backend/assets/images/logo-dti.png" alt="DTI Logo" className='logo' />
            <img src="/backend/assets/images/logo-aim.png" alt="AIM Logo" className='logo' />
            <img src="/backend/assets/images/logo-lcp.png" alt="LCP Logo" className='logo' />
        </div>
    );
}

export default LogoBar;