import React, { useState, useEffect, useRef } from 'react';

// --- Helper Hook for Animation on Scroll ---
const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

// --- Animated Components ---
const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1500; // 1.5 seconds
      const startTime = Date.now();

      const animate = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentVal = Math.floor(progress * end);
        setDisplayValue(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible, value]);

  return <span ref={ref}>{displayValue}%</span>;
};

// --- SVG Icon Components ---
const SkillIcon = ({ skillName }) => {
  const icons = {
    React: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
      </svg>
    ),
    JavaScript: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F7DF1E" >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2V9h2v7zm4 0h-2v-4c0-1.11-.9-2-2-2h-2V9h4v7z" />
      </svg>
    ),
    TailwindCSS: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38B2AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm5.64-5.64c-.39.39-.39 1.02 0 1.41l3.54 3.54c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L8.05 6.36c-.39-.39-1.02-.39-1.41 0zM14.46 12l3.54-3.54c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0L13.05 10.6c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0z" />
      </svg>
    ),
    HTML5: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E34F26">
        <path d="M1.6 21.3l1.8-20.7h17.2l-1.8 20.7-6.8 2.7-6.8-2.7zM12 4.8h6.2l-.5 5.6h-5.7v-2.8h2.8l-.2-2.8zm-1.4 13.8l-3.5-1.3-.2-2.8h2.8v1.6l1 .3.9-.3v-4.4h-6.2l.6 6.8 4.6 1.7z" />
      </svg>
    ),
    CSS3: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1572B6">
        <path d="M1.6 21.3l1.8-20.7h17.2l-1.8 20.7-6.8 2.7-6.8-2.7zM12 4.8h6.2l-.5 5.6h-5.7v-2.8h2.8l-.2-2.8zm-1.4 13.8l-3.5-1.3-.2-2.8h2.8v1.6l1 .3.9-.3v-4.4h-6.2l.6 6.8 4.6 1.7z" />
      </svg>
    ),
    Svelte: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF3E00">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 15.2L5.4 12l5.4-5.2 1.2 1.2-4.2 4 4.2 4-1.2 1.2zm2.4-1.2l4.2-4-4.2-4 1.2-1.2L18.6 12l-5.4 5.2-1.2-1.2z" />
      </svg>
    ),
    'Node.js': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 15.24l-3.21-1.85v-3.7l3.21 1.85v3.7zm1.28.76v-5.49l-4.5-2.6v5.2l4.5 2.59zm1.28-1.52v-3.7l3.21-1.85v3.7l-3.21 1.85zm-1.28-4.51l4.5-2.6v-2.59l-4.5 2.6v2.59z" />
      </svg>
    ),
    'Express.js': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 dark:text-gray-400">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold">EX</text>
      </svg>
    ),
    MongoDB: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#47A248">
        <path d="M16.14 3.29c-1.34-.33-2.74-.54-4.14-.54-1.4 0-2.8.21-4.14.54-1.31.32-2.55.82-3.69 1.48C2.86 5.42 2 6.55 2 7.77v8.46c0 1.22.86 2.35 2.17 2.99 1.14.66 2.38 1.16 3.69 1.48 1.34.33 2.74.54 4.14.54s2.8-.21 4.14-.54c1.31-.32 2.55-.82 3.69-1.48 1.31-.64 2.17-1.77 2.17-2.99V7.77c0-1.22-.86-2.35-2.17-2.99-1.14-.66-2.38-1.16-3.69-1.48zm-4.14 15.71c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    ),
    'REST APIs': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 dark:text-blue-400">
        <path d="M4 12h16M4 12l6-6m-6 6l6 6M20 12l-6-6m6 6l-6 6"></path>
      </svg>
    ),
    'JWT Auth': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 dark:text-yellow-400">
        <path d="M14 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path d="M18 8V6a4 4 0 00-4-4h-4a4 4 0 00-4 4v2" />
        <path d="M22 18v2a2 2 0 01-2 2h-2" />
        <path d="M6 22H4a2 2 0 01-2-2v-2" />
      </svg>
    ),
    Python: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3776AB">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 14.5v-3.5h2v-2h-2V7.5c0-1.1.9-2 2-2h1.5v2h-1.5c-.28 0-.5.22-.5.5v2.5h2v2h-2v3.5c0 1.1-.9 2-2 2H11c-1.1 0-2-.9-2-2v-1.5h2v1.5c0 .28.22.5.5.5h1z" />
      </svg>
    ),
    Django: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#092E20">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2.2 14.4h-2.4V7.6h2.4v8.8zm4.8 0h-2.4V7.6h2.4v8.8zm4.8 0h-2.4V7.6h2.4v8.8z" />
      </svg>
    ),
    'VS Code': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M17.1 2.9l-14.2 8.2v3.8l14.2 8.2 4.9-2.8v-14.6zm-14.2 9.5l11.4-6.6v3.8l-11.4 6.6zm0 2.5l11.4 6.6v-3.8l-11.4-6.6z" />
      </svg>
    ),
    Git: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F05032">
        <path d="M22.3 9.7c-.2-.6-.7-1.1-1.3-1.3l-8.3-2.7c-.5-.2-1.1-.2-1.6 0L2.8 8.4c-.6.2-1.1.7-1.3 1.3-.2.6-.1 1.3.3 1.8l7.6 9.3c.4.5 1 .8 1.6.8s1.2-.3 1.6-.8l7.6-9.3c.4-.5.5-1.2.3-1.8zM12 19.5l-6.2-7.6h12.4zm0-9.2L5.8 4.7l6.2 2 6.2-2z" />
      </svg>
    ),
    'Coursera AI': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-500">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold">AI</text>
      </svg>
    ),
    Figma: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.46 3H8.54C5.48 3 3 5.48 3 8.54v6.92C3 18.52 5.48 21 8.54 21h6.92c3.06 0 5.54-2.48 5.54-5.54V8.54C21 5.48 18.52 3 15.46 3z" fill="#F24E1E" />
        <path d="M8.54 3C5.48 3 3 5.48 3 8.54h5.54V3H8.54z" fill="#FF7262" />
        <path d="M3 15.46c0 3.06 2.48 5.54 5.54 5.54V9.88H3v5.58z" fill="#1ABCFE" />
        <path d="M15.46 21c3.06 0 5.54-2.48 5.54-5.54h-5.54v5.54z" fill="#0ACF83" />
        <path d="M21 8.54C21 5.48 18.52 3 15.46 3v5.54h5.54V8.54z" fill="#A259FF" />
      </svg>
    ),
    Docker: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M21.93 9.35c-.48-2.58-2.6-4.7-5.18-5.18C14.07 3.69 11.4 3.5 9.35 4.07 4.2 5.33 1.18 10.48 2.45 15.63c.2.81.48 1.58.84 2.31H7.5v-2.25h1.5v2.25h1.5v-2.25h1.5v2.25h1.5v-2.25h1.5v2.25h3.69c3.94-2.25 4.81-7.23 2.56-10.58zM7.5 7.5h1.5v1.5H7.5zm3 0h1.5v1.5h-1.5zm3 0h1.5v1.5h-1.5z" />
      </svg>
    ),
    Webpack: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#8DD6F9">
        <path d="M20.5 13.6v-3.2l-4-2.3-4 2.3v3.2l-4-2.3v3.2l4 2.3 4-2.3v3.2l4-2.3zm-8-3.2l4-2.3 4 2.3v3.2l-4 2.3-4-2.3zM3.5 8.5l4 2.3v3.2l-4-2.3v-3.2zM12 2L3.5 7v10L12 22l8.5-5V7z" />
      </svg>
    ),
    Babel: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F9DC3E">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8h4v-2h-4v2zm0 4h4v-2h-4v2z" />
      </svg>
    ),
    Jira: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0052CC">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.71 14.29L6 9.58l1.41-1.41 5.3 5.3 5.29-5.3L19.41 9.6l-6.7 6.69z" />
      </svg>
    ),
    Postman: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF6C37">
        <path d="M12 2c-3.78 0-7.1 2.14-8.75 5.25-.1.19-.15.4-.15.61v10.28c0 .21.05.42.15.61C4.9 21.86 8.22 24 12 24s7.1-2.14 8.75-5.25c.1-.19.15-.4.15-.61V7.86c0-.21-.05-.42-.15-.61C19.1 2.14 15.78 0 12 0zm0 22c-3.13 0-5.92-1.8-7.3-4.39V6.39C6.08 3.8 8.87 2 12 2s5.92 1.8 7.3 4.39v13.22c-1.38 2.59-4.17 4.39-7.3 4.39zm-3.5-9.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
      </svg>
    ),
    Jenkins: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D24939">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        <circle cx="12" cy="5.5" r="1.5" />
        <circle cx="12" cy="18.5" r="1.5" />
      </svg>
    ),
    Netlify: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00C7B7">
        <path d="M12 2L2 22h20L12 2zm0 3.89l7.11 12.3h-14.22L12 5.89z" />
      </svg>
    ),
    Vercel: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
        <path d="M12 2L1 22h22L12 2zm5.66 16H6.34l5.66-9.75 5.66 9.75z" />
      </svg>
    ),
    'SSL & HTTPS': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13a3 3 0 0 1 2-2.828A3 3 0 0 1 9 13m-4 0v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6m-8-5V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
      </svg>
    ),
    'Reverse Proxy': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3L3 6v12l3 3h12l3-3V6l-3-3H6zm5 13v-4h2v4M12 8v-2h-1v2H9v1h4V9H9v-1h3z" />
      </svg>
    ),
    Bootstrap: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7952B3">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.62 14.5L12 12.88 8.38 16.5 6.94 15.06 10.56 11.44 6.94 7.82 8.38 6.38 12 10.02 15.62 6.38 17.06 7.82 13.44 11.44 17.06 15.06z" />
      </svg>
    ),
    DaisyUI: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        <path d="M16 8h-8v8h8z"></path>
      </svg>
    ),
    ChatGPT: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.233 13.848l-1.397 1.094 1.297 1.332-2.851.63-1.153 1.79-.185-2.868-1.723-1.87-.845 2.572-1.977-2.228.762-2.756-2.32.94-.632 2.847 1.365-1.124 1.138-1.335-1.285 2.798-.68 1.084-1.423 1.843.306.175 2.877 1.738 1.858.747-2.593 2.028 2.178-.723 2.777 2.362-.888.615-2.852-1.324 1.185-1.103 1.378 1.23-2.757.723-1.123 1.397-1.848-.286zM12.03 16.5c1.046 0 1.895-.85 1.895-1.896s-.849-1.895-1.895-1.895-1.896.849-1.896 1.895.85 1.896 1.896 1.896z" />
      </svg>
    ),
    Gemini: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8m0 2a6 6 0 00-6 6 6 6 0 006 6 6 6 0 006-6 6 6 0 00-6-6m0 4a2 2 0 110 4 2 2 0 010-4m-4 0a2 2 0 110 4 2 2 0 010-4m8 0a2 2 0 110 4 2 2 0 010-4" />
      </svg>
    ),
    Canva: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1E9CF8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-6h10v2H7v-2z" />
      </svg>
    ),
    Photoshop: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#31A8FF">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-7h4v2h-4v-2zm0-3h4v2h-4v-2z" />
      </svg>
    ),
    Illustrator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF7C00">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-6h4v2h-4v-2zm0-3h4v2h-4v-2z" />
      </svg>
    ),
    Camtasia: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00B863">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-5h6v-2H9v2zm0-3h6v-2H9v2z" />
      </svg>
    ),
    Pixo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#673AB7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-6h4v2h-4v-2zm0-3h4v2h-4v-2z" />
      </svg>
    ),
    YouTube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.359 2.628-4.384 8.816.029 6.185.484 8.543 4.384 8.816 3.604.246 11.631.245 15.23 0 3.897-.266 4.359-2.628 4.384-8.816-.029-6.185-.484-8.543-4.384-8.816zm-10.615 10.283v-6.565l4.733 3.282-4.733 3.283z" />
      </svg>
    ),
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.214 1.838 1.214 1.07 1.869 2.807 1.331 3.482 1.027.102-.792.405-1.33.739-1.629-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0-.319.192-.694.801-.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    DeepSeek: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-700">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    'GitHub Copilot': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-purple-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h-2v-2h4V7h2v6h2v2h-4v2z" />
      </svg>
    ),
    Midjourney: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13h8v-2h-8v2zm0-4h8v-2h-8v2z" />
      </svg>
    ),
    'DALL-E': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-teal-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    Bard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15V7l6 5-6 5z" />
      </svg>
    ),
    default: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    )
  };

  return icons[skillName] || icons.default;
};

const skillsData = [
  // Frontend
  { name: 'React', proficiency: 85, level: 'Expert Level', description: 'Advanced proficiency', category: 'Frontend' },
  { name: 'JavaScript', proficiency: 90, level: 'Expert Level', description: 'Master level expertise', category: 'Frontend' },
  { name: 'TailwindCSS', proficiency: 88, level: 'Expert Level', description: 'Advanced proficiency', category: 'Frontend' },
  { name: 'HTML5', proficiency: 95, level: 'Expert Level', description: 'Master level expertise', category: 'Frontend' },
  { name: 'CSS3', proficiency: 92, level: 'Expert Level', description: 'Master level expertise', category: 'Frontend' },
  { name: 'Svelte', proficiency: 70, level: 'Expert Level', description: 'Strong working knowledge', category: 'Frontend' },
  { name: 'DaisyUI', proficiency: 80, level: 'Expert Level', description: 'Advanced with Tailwind CSS component library', category: 'Frontend' },
  { name: 'Bootstrap', proficiency: 75, level: 'Expert Level', description: 'Strong working knowledge of Bootstrap', category: 'Frontend' },

  // Backend
  { name: 'Node.js', proficiency: 80, level: 'Expert Level', description: 'Advanced proficiency', category: 'Backend' },
  { name: 'Express.js', proficiency: 75, level: 'Expert Level', description: 'Strong working knowledge', category: 'Backend' },
  { name: 'MongoDB', proficiency: 70, level: 'Expert Level', description: 'Strong working knowledge', category: 'Backend' },
  { name: 'REST APIs', proficiency: 78, level: 'Expert Level', description: 'Strong working knowledge', category: 'Backend' },
  { name: 'JWT Auth', proficiency: 72, level: 'Expert Level', description: 'Strong working knowledge', category: 'Backend' },
  { name: 'Python', proficiency: 82, level: 'Expert Level', description: 'Advanced proficiency', category: 'Backend' },
  { name: 'Django', proficiency: 65, level: 'Expert Level', description: 'Intermediate proficiency', category: 'Backend' },

  // DevOps & Deployment (Updated and added)
  { name: 'Netlify', proficiency: 90, level: 'Expert Level', description: 'Frontend deployment, domain setup', category: 'DevOps & Deployment' },
  { name: 'Vercel', proficiency: 85, level: 'Expert Level', description: 'Next.js and frontend deployment', category: 'DevOps & Deployment' },
  { name: 'SSL & HTTPS', proficiency: 80, level: 'Advanced', description: 'Encrypt, domain config, secure certs', category: 'DevOps & Deployment' },
  { name: 'Reverse Proxy', proficiency: 65, level: 'Intermediate', description: 'Backend services securely', category: 'DevOps & Deployment' },
  { name: 'Docker', proficiency: 55, level: 'Beginner proficiency', category: 'DevOps & Deployment' },
  { name: 'Jenkins', proficiency: 50, level: 'Beginner proficiency', category: 'DevOps & Deployment' },

  // AI Tools (New Category)
  { name: 'ChatGPT', proficiency: 95, level: 'Expert Level', description: 'Advanced natural language processing for various tasks', category: 'AI Tools' },
  { name: 'Gemini', proficiency: 92, level: 'Expert Level', description: 'Utilizing advanced AI models for diverse applications', category: 'AI Tools' },
  { name: 'Coursera AI', proficiency: 85, level: 'Expert Level', description: 'Advanced proficiency', category: 'AI Tools' },
  { name: 'DeepSeek', proficiency: 78, level: 'Advanced', description: 'Proficient with DeepSeek for code completion and generation', category: 'AI Tools' },
  { name: 'GitHub Copilot', proficiency: 85, level: 'Expert Level', description: 'Leveraging AI for intelligent code suggestions and auto-completion', category: 'AI Tools' },
  { name: 'Midjourney', proficiency: 70, level: 'Expert Level', description: 'Generating high-quality images from text prompts', category: 'AI Tools' },
  { name: 'DALL-E', proficiency: 68, level: 'Advanced', description: 'Creating diverse images from textual descriptions', category: 'AI Tools' },
  { name: 'Bard', proficiency: 80, level: 'Expert Level', description: 'Utilizing for creative text generation and information retrieval', category: 'AI Tools' },

  // Content Creation & Platforms (New Category)
  { name: 'Canva', proficiency: 88, level: 'Expert Level', description: 'Graphic design for social media, presentations, and more', category: 'Content Creation & Platforms' },
  { name: 'Photoshop', proficiency: 85, level: 'Expert Level', description: 'Image manipulation, retouching, and digital art', category: 'Content Creation & Platforms' },
  { name: 'Illustrator', proficiency: 80, level: 'Expert Level', description: 'Vector graphics, logos, and scalable designs', category: 'Content Creation & Platforms' },
  { name: 'Camtasia', proficiency: 75, level: 'Expert Level', description: 'Screen recording and video editing for tutorials', category: 'Content Creation & Platforms' },
  { name: 'Pixo', proficiency: 60, level: 'Intermediate', description: 'Basic image editing and quick photo enhancements', category: 'Content Creation & Platforms' },
  { name: 'YouTube', proficiency: 85, level: 'Expert Level', description: 'Video content creation, publishing, and channel management', category: 'Content Creation & Platforms' },

  // Tools & Others (Updated)
  { name: 'VS Code', proficiency: 95, level: 'Expert Level', description: 'Master level expertise', category: 'Tools & Others' },
  { name: 'Git', proficiency: 78, level: 'Expert Level', description: 'Strong working knowledge', category: 'Tools & Others' },
  { name: 'GitHub', proficiency: 92, level: 'Expert Level', description: 'Version control, collaboration, and code hosting platform', category: 'Tools & Others' },
  { name: 'Figma', proficiency: 60, level: 'Intermediate proficiency', description: 'Intermediate proficiency', category: 'Tools & Others' },
  { name: 'Webpack', proficiency: 68, level: 'Strong working knowledge', category: 'Tools & Others' },
  { name: 'Babel', proficiency: 65, level: 'Strong working knowledge', category: 'Tools & Others' },
  { name: 'Jira', proficiency: 80, level: 'Advanced proficiency', category: 'Tools & Others' },
  { name: 'Postman', proficiency: 90, level: 'Master level expertise', category: 'Tools & Others' },

];

const SkillCard = ({ skill }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setWidth(skill.proficiency);
    }
  }, [isVisible, skill.proficiency]);

  return (
    <div ref={ref} className="hover:bg-blend-lighten p-4 rounded-lg transition-all bg-base-200 duration-300
    hover:shadow-lg hover:shadow-blue-500">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md bg-base-300">
            <SkillIcon skillName={skill.name} />
          </div>
          <div>
            <h4 className="font-semibold text-base-content">{skill.name}</h4>
            <p className="text-xs text-base-content/70">{skill.level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary">
            <AnimatedNumber value={skill.proficiency} />
          </p>
          <p className="text-xs text-base-content/70">Proficiency</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-base-300 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <p className="text-sm text-base-content/80 mt-2">{skill.description}</p>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  const INITIAL_VISIBLE_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const showMore = () => setVisibleCount(skills.length);
  const showLess = () => setVisibleCount(INITIAL_VISIBLE_COUNT);

  const hasMore = skills.length > INITIAL_VISIBLE_COUNT;
  const hiddenCount = skills.length - INITIAL_VISIBLE_COUNT;

  return (
    <div className=" p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-6 text-primary">{title}</h3>
      <div className="space-y-4">
        {skills.slice(0, visibleCount).map(skill => <SkillCard key={skill.name} skill={skill} />)}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          {visibleCount < skills.length ? (
            <button onClick={showMore} className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              See More (+{hiddenCount})
            </button>
          ) : (
            <button onClick={showLess} className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              See Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const frontendSkills = skillsData.filter(s => s.category === 'Frontend');
  const backendSkills = skillsData.filter(s => s.category === 'Backend');
  const toolsSkills = skillsData.filter(s => s.category === 'Tools & Others');
  const aiToolsSkills = skillsData.filter(s => s.category === 'AI Tools');
  const contentCreationSkills = skillsData.filter(s => s.category === 'Content Creation & Platforms');
  const devOpsSkills = skillsData.filter(s => s.category === 'DevOps & Deployment');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const visibleCategories = showAllCategories
    ? ['Frontend', 'Backend', 'Tools & Others', 'DevOps & Deployment', 'AI Tools', 'Content Creation & Platforms',]
    : ['Frontend', 'Backend', 'Tools & Others'];

  const categorySkills = {
    Frontend: frontendSkills,
    Backend: backendSkills,
    'Tools & Others': toolsSkills,
    'AI Tools': aiToolsSkills,
    'Content Creation & Platforms': contentCreationSkills,
    'DevOps & Deployment': devOpsSkills,
  };

  return (
    <section id="skills" className="min-h-screen p-4 sm:p-8 font-sans bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex justify-center font-bold text-xl items-center gap-4">
            <div className="w-24 h-px bg-base-content"></div>
            <div className="py-2 px-5 rounded-lg bg-base-200 font-medium">
              Skills Technologies Tools
            </div>
            <div className="w-24 h-px bg-base-content"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-6">My Technical Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {visibleCategories.map(category => (
            <SkillCategory key={category} title={category} skills={categorySkills[category]} />
          ))}
        </div>
        {!showAllCategories && Object.keys(categorySkills).length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllCategories(true)}
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              See more Skills - Technologies - Tools
            </button>
          </div>
        )}
        {showAllCategories && Object.keys(categorySkills).length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllCategories(false)}
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              See less Skills - Technologies - Tools
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;