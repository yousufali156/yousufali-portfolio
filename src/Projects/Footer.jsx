import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 bg-base-100 text-base-content transition-colors duration-300">
            <div className="max-w-screen-xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Md. Yousuf Ali. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;