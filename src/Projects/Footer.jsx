import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="max-w-screen-xl mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Md. Yousuf Ali. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;