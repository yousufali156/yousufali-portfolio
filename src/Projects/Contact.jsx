import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">I'm currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <a href="mailto:mdyousufali.dev@gmail.com" className="text-lg hover:text-blue-400">mdyousufali.dev@gmail.com</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <a href="tel:+8801754954385" className="text-lg hover:text-blue-400">+880 1754 954385</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.07.709 3.038 3.523 4.922c2.09 1.34 2.829 1.422 3.295 1.422.466 0 1.175-.242 1.348-.841.173-.599.173-1.109.124-1.208z" /></svg>
                        <a href="https://www.linkedin.com/in/yousufali156/" className="text-lg hover:text-blue-400">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;