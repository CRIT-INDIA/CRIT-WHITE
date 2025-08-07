'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showChat, setShowChat] = useState(false);
  
  // Debug: Log state changes and handle escape key
  useEffect(() => {
    console.log('showChat state changed:', showChat);
    
    // Add event listener for escape key to close modal
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && showChat) {
        document.body.style.overflow = 'auto';
        setShowChat(false);
      }
    };
    
    if (showChat) {
      window.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showChat]);
  const [showContactForm, setShowContactForm] = useState(false);
  const text = "CONTACT US";
  const [barPos, setBarPos] = useState(0);
  const letterRefs = React.useRef([]);
  const [barLeft, setBarLeft] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let pos = 0;
    let direction = 1;
    const interval = setInterval(() => {
      pos += direction;
      if (pos > text.length) {
        direction = -1;
        pos = text.length - 1;
      } else if (pos < 0) {
        direction = 1;
        pos = 0;
      }
      setBarPos(pos);
    }, 180); // Adjust speed here
    return () => clearInterval(interval);
  }, [text.length]);

  useEffect(() => {
    if (barPos < text.length && letterRefs.current[barPos]) {
      setBarLeft(letterRefs.current[barPos].offsetLeft);
    } else if (barPos === text.length && letterRefs.current[text.length - 1]) {
      // Place bar at the right edge of the last letter
      const last = letterRefs.current[text.length - 1];
      setBarLeft(last.offsetLeft + last.offsetWidth);
    }
  }, [barPos, text.length]);

  const contactIcons = [
    { icon: Facebook, id: 'facebook', action: () => window.open('https://www.facebook.com') },
    { icon: MessageCircle, id: 'chat', action: () => {
      console.log('Opening chat modal');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      setShowChat(true);
    }},
    { icon: Mail, id: 'mail', action: () => window.open('mailto:info@critindia.com') },
    { icon: Phone, id: 'phone', action: () => window.open('tel:+917773954892') }
  ];

  return (
    <div className="relative min-h-* overflow-hidden pt-24 pb-10 sm:pt-32 lg:pt-40 px-4 sm:px-8 lg:px-16">
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center w-full max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="flex-1 w-full mb-10 lg:mb-0 text-center">
          {/* Contact Us Button */}
          <div className="mb-8 sm:mb-12 relative overflow-hidden">
            <h2 className="relative font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl rounded-lg tracking-wide flex items-center justify-center text-center" style={{height: '3.5rem'}}>
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  ref={el => letterRefs.current[i] = el}
                  className={`transition-colors duration-200`}
                  style={{
                    color: (barPos > 0 && i < barPos) ? "#ff0000" : "#000",
                    position: "relative",
                    zIndex: 1,
                    fontWeight: "bold",
                    fontSize: "2.2rem",
                    letterSpacing: "0.1em"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {/* Vertical bar */}
              <span
                style={{
                  position: "absolute",
                  left: barLeft,
                  top: "50%",
                  height: "70%",
                  width: "6px",
                  background: "#ff0000",
                  zIndex: 2,
                  borderRadius: "3px",
                  transform: "translateY(-50%)",
                  transition: "left 0.18s linear"
                }}
              />
            </h2>
          </div>
          {/* Main text */}
          <div className="space-y-6">
            <p className="text-black text-base sm:text-lg lg:text-lg leading-relaxed font-light justify-start text-left">
            Thank you for your interest in  
            <span className="text-red-600 font-semibold"> Connecting Roots</span>. Whether you are seeking SAP solutions, support, or insights, our experienced team is here to help drive your business forward.{' '}
              <br></br><span className="text-red-600 font-semibold">Connecting Roots, Empowering Growth</span>{' '}
              Tell us your business requirements below, and one of our SAP experts will reach out to guide you. Lets innovate, transform, and elevate your enterprise together </p>
          </div>
        </div>
        {/* Right side - Interactive contact icons */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="relative">
            {/* Central glowing area */}
            <div className="relative flex items-center justify-center w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-transparent border-4 border-red-600/40 shadow-2xl shadow-red-500/20">
              {/* Outer static ring for icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-4 border-red-600/40 rounded-full" style={{ position: 'absolute', left: 0, top: 0 }} />
                {/* Icons on the ring */}
                {contactIcons.map((item, index) => {
                  // Position icons at specific angles to match the image
                  // Now that the icons are in the correct order: Facebook, message, mail, phone
                  // We can use a simpler calculation for the angles
                  const angle = (index / contactIcons.length) * 2 * Math.PI + Math.PI * 0.25; // Start at top-right (1:30 o'clock)
                  
                  const radius = 140; // Slightly larger than the ring radius
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  // For the phone icon, always show tooltip above and with higher z-index
                  const isPhone = item.id === 'phone';
                  return (
                    <div
                      key={item.id}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)` ,
                        top: `calc(50% + ${y}px)` ,
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'auto',
                        zIndex: hoveredIcon === item.id ? 30 : 10
                      }}
                      onMouseEnter={() => setHoveredIcon(item.id)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Clicked on ${item.id} icon`);
                        item.action();
                      }}
                      aria-label={item.id}
                      tabIndex={0}
                    >
                      {/* Tooltip */}
                      {hoveredIcon === item.id && (
                        <div className={`absolute left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow z-50 ${isPhone ? '-top-10' : '-top-8'}`}
                          style={{ whiteSpace: 'nowrap' }}>
                          {item.id.charAt(0).toUpperCase() + item.id.slice(1).trim()}
                        </div>
                      )}
                      <div className="relative w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                        {/* Icon background with glow */}
                        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                          hoveredIcon === item.id ? 'scale-105 shadow-[0_0_24px_8px_rgba(255,255,255,0.7)]' : 'scale-100 shadow-[0_0_16px_4px_rgba(255,255,255,0.4)]'
                        }`} style={{ background: '#ff0000', border: '2px solid #ff0000' }}>
                        </div>
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <item.icon 
                            className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 transition-all duration-300 text-white ${
                              hoveredIcon === item.id ? 'scale-110' : ''
                            }`} 
                            style={{ filter: hoveredIcon === item.id ? 'drop-shadow(0 0 12px #fff)' : 'drop-shadow(0 0 6px #fff)' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Center device/hand illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="w-16 h-24 sm:w-20 sm:h-32 bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl border-2 border-red-600/30 shadow-xl relative overflow-hidden flex flex-col items-center justify-between py-2">
                    {/* Speaker slot */}
                    <div className="w-6 h-1 rounded-full bg-gray-300/60 mb-2 mt-1" />
                    {/* Screen */}
                    <div className="absolute inset-2 top-6 bottom-6 bg-gradient-to-b from-red-900/50 to-slate-900/50 rounded-md">
                      {/* Screen glow */}
                      <div className="absolute inset-0 bg-red-400/10 rounded-md animate-pulse" />
                    </div>
                    {/* Home button */}
                    <div className="relative z-10 flex flex-col items-center w-full">
                      <div className="mx-auto mt-auto mb-3 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-gray-200 bg-white/80 shadow-inner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {showChat && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" 
          style={{pointerEvents: 'auto'}}
          onClick={(e) => {
            // Close modal when clicking on backdrop
            if (e.target === e.currentTarget) {
              document.body.style.overflow = 'auto';
              setShowChat(false);
            }
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent clicks from reaching the backdrop
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-600">Chat with Us</h3>
              <button 
                onClick={() => {
                  document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
                  setShowChat(false);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4 h-64 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <div className="bg-red-100 text-red-800 p-2 rounded-lg self-start max-w-[80%]">
                  Hello! How can we help you today?
                </div>
              </div>
            </div>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message here..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-red-600">Contact Us</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}