import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import {
  Mail, Phone, MapPin, SendHorizontal,
  Github, Linkedin, MessageCircleMore
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const formRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_9m6xcrq',
      'template_slwz2la',
      formRef.current,
      'T30uYxLqU11ruxXjW'
    )
      .then(() => {
        toast.success('✅ Message sent successfully!');
        formRef.current.reset();
        if (messageRef.current) messageRef.current.value = '';
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('❌ Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  const generateMessageIdea = (type) => {
    let message = '';
    switch (type) {
      case 'Project Inquiry':
        message = `Hi, I'm interested in hiring you for a project. Can we discuss your availability, pricing, and timeline? Looking forward to working together!`;
        break;
      case 'Collaboration':
        message = `Hey! I love your work and was wondering if you'd be open to collaborating on a creative or technical project. Let me know what you think.`;
        break;
      case 'General Chat':
        message = `Hi there! Just wanted to connect and have a quick chat about your work and experiences. Looking forward to hearing from you!`;
        break;
      default:
        message = '';
    }
    if (messageRef.current) {
      messageRef.current.value = message;
    }
  };

  const ContactCard = ({ icon: Icon, label, value, link, color = 'text-primary' }) => (
    <motion.div
      data-aos="fade-up"
      className="p-4 border rounded-xl flex items-center gap-4 transition-all duration-300
      bg-base-200 dark:bg-base-200
      hover:bg-blue-400 dark:hover:bg-green-400
      hover:shadow-[0_0_60px_10px_rgba(59,130,246,0.4)]
      hover:ring-2 hover:ring-base-content"
    >
      <div className={`p-3 rounded-full border bg-base-100 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-semibold">{label}</p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" className="link link-hover">
            {value}
          </a>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="contact" className="py-20 text-base-content transition-colors duration-300">

      <div className="flex justify-center mb-12 font-bold text-xl items-center gap-4">
        <div className="w-24 h-px bg-base-content"></div>
        <div className="py-2 px-5 rounded-lg bg-base-200 font-medium">
          Contact Me
        </div>
        <div className="w-24 h-px bg-base-content"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Cards */}
        <div className="space-y-5">

          <h1 className='font-bold text-green-500 text-center mb-7 text-4xl bg-base-100 rounded-xl p-4 border border-base-300 shadow'>Get In Touch</h1>

          <ContactCard icon={Mail} label="Email" value="yousufali.dev@gmail.com" link="mailto:yousufali.dev@gmail.com" />
          <ContactCard icon={Phone} label="Phone" value="+8801754954385" link="tel:+8801754954385" color="text-green-500" />
          <ContactCard icon={Github} label="GitHub" value="Yousuf Ali" link="https://github.com/yousufali156" color="text-purple-500" />
          <ContactCard icon={Linkedin} label="LinkedIn" value="Yousuf Ali" link="https://linkedin.com/in/yousufali156" color="text-blue-600" />
          <ContactCard icon={MessageCircleMore} label="WhatsApp" value="Chat Now" link="https://wa.me/8801754954385" color="text-green-400" />
          <ContactCard icon={MapPin} label="Address" value="Bogura, Bangladesh" />
        </div>

        {/* Right: Message Generator + Contact Form */}
        <div>
          {/* AI Message Generator UI */}
          <div className="bg-base-100 text-center rounded-xl p-4 mb-6 border border-base-300 shadow">
            <h4 className="font-bold text-green-500">Having trouble starting the conversation?</h4>
            <p className="text-secondary text-sm mb-3">
              Select a topic, and ✨AI will generate a message for you!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button type="button" className="btn btn-sm btn-outline" onClick={() => generateMessageIdea('Project Inquiry')}>
                Project Inquiry ✨
              </button>
              <button type="button" className="btn btn-sm btn-outline" onClick={() => generateMessageIdea('Collaboration')}>
                Collaboration ✨
              </button>
              <button type="button" className="btn btn-sm btn-outline" onClick={() => generateMessageIdea('General Chat')}>
                General Chat ✨
              </button>
            </div>
            {loading && (
              <div className="flex items-center text-secondary mt-3">
                <span className="loading loading-spinner loading-sm mr-2"></span>
                <span>Sending...</span>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <motion.div
            data-aos="fade-left"
            className="bg-base-200 p-6 rounded-xl shadow-lg border border-base-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Send Me a Message</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="input input-bordered w-full"
                  placeholder="What’s this about?"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  ref={messageRef}
                  required
                  className="textarea textarea-bordered w-full"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="relative w-full px-5 py-2.5 group bg-green-500 hover:bg-green-400 text-white rounded flex items-center justify-center gap-2 font-semibold transition-all"
              >
                <motion.span
                  className="relative flex items-center gap-2 z-10"
                  whileHover={{ y: -2, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <SendHorizontal className="w-5 h-5" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Guarantee Section */}
      <motion.div
        data-aos="fade-up"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="mt-10 px-4">
          <div
            className="max-w-6xl mx-auto relative overflow-hidden rounded-lg p-6 border
            shadow-xl transition-all duration-300
            hover:shadow-[0_0_60px_10px_rgba(59,130,246,0.4)] hover:ring-2 hover:ring-blue-400
            animate-gradient-x bg-[length:400%_400%]"
          >
            <style>
              {`
                @keyframes gradient-x {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient-x {
                  animation: gradient-x 8s ease infinite;
                }
              `}
            </style>

            <div className="flex flex-col items-center justify-center text-center gap-3">
              <div className="flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold">Quick Response Guarantee</h3>
              </div>
              <p className="text-sm max-w-xl">
                I typically respond to all hiring inquiries and project proposals within 24 hours.
                For urgent opportunities, feel free to reach out directly via email or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
