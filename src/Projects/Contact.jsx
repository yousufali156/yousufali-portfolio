import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Mail,
  Phone,
  MapPin,
  SendHorizonal,
  SendHorizontal,
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_9m6xcrq',
      'template_slwz2la',
      formRef.current,
      'T30uYxLqU11ruxXjW'
    )
    .then(() => {
      toast.success('✅ Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <h1 className="text-4xl text-center font-bold mb-12">
        <span className="px-4 py-1 rounded-md shadow-lg">Contact Me</span>
      </h1>

      <motion.div
        className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left - Send Message */}
        <div className="bg-base-200 p-6 rounded-lg shadow-xl border border-base-300">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
            Send Message
          </h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="input input-bordered w-full"
                />
              </div>
              <br />
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="What’s this about?"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project or just say hello!"
                className="textarea textarea-bordered w-full"
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }} 
              className="btn btn-primary w-full"
            >
              <SendHorizontal className="w-5 h-5" /> Send Message
            </motion.button>
          </form>
        </div>

        {/* Right - Let's Connect */}
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-secondary mb-6">Let’s Connect</h2>
          <p className="mb-4">
            Interested in working together or have a question? Let’s connect and make something awesome together!
          </p>
          <div className="space-y-10">
            <div className="bg-base-200 p-4 rounded-lg border border-base-300 flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <a href="mailto:yousufali.dev@gmail.com" className="link link-hover">
                  yousufali.dev@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-base-200 p-4 rounded-lg border border-base-300 flex items-center gap-3">
              <Phone className="w-6 h-6 text-secondary" />
              <div>
                <p className="text-sm font-semibold">Phone / WhatsApp</p>
                <a href="tel:+8801754954385" className="link link-hover">
                  +880 1754 954385
                </a>
              </div>
            </div>
            <div className="bg-base-200 p-4 rounded-lg border border-base-300 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p>Bogura, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
