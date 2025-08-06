'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection1() {
    const [activeId, setActiveId] = useState('1-1');
    const [hoveredId, setHoveredId] = useState(null);
    const [isAutoCycling, setIsAutoCycling] = useState(true);
    const [userInteracted, setUserInteracted] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');
    const [faqs, setFaqs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch FAQ data from JSON file
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('/json/data/faq.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQ data');
                }
                const data = await response.json();
                
                const transformedFaqs = [];
                const categoriesSet = new Set();
                
                const serviceCategory = Object.values(data)[0];
                
                Object.entries(serviceCategory).forEach(([category, questions], catIndex) => {
                    categoriesSet.add(category);
                    
                    Object.entries(questions).forEach(([qKey, qData], qIndex) => {
                        const id = `${catIndex + 1}-${qIndex + 1}`;
                        const answer = Array.isArray(qData.answer) 
                            ? qData.answer.map((item, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    • {item}
                                </React.Fragment>
                            ))
                            : qData.answer;
                            
                        transformedFaqs.push({
                            id,
                            category,
                            q: qData.question,
                            a: answer
                        });
                    });
                });
                
                const categoriesList = Array.from(categoriesSet);
                setFaqs(transformedFaqs);
                setCategories(categoriesList);
                
                if (categoriesList.length > 0) {
                    setActiveCategory(categoriesList[0]);
                    const firstFaq = transformedFaqs.find(faq => faq.category === categoriesList[0]);
                    if (firstFaq) {
                        setActiveId(firstFaq.id);
                    }
                }
                
            } catch (err) {
                console.error('Error loading FAQ data:', err);
                setError('Failed to load FAQ data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);
  
    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => faq.category === activeCategory);
    }, [faqs, activeCategory]);
  
    useEffect(() => {
        if (!isAutoCycling || userInteracted) return;
  
        const interval = setInterval(() => {
            setActiveId(prevId => {
                const currentIndex = faqs.findIndex(faq => faq.id === prevId);
                const nextIndex = (currentIndex + 1) % faqs.length;
                return faqs[nextIndex].id;
            });
        }, 3000);
  
        return () => clearInterval(interval);
    }, [isAutoCycling, userInteracted, faqs]);
  
    useEffect(() => {
        if (userInteracted) {
            const timeout = setTimeout(() => {
                setUserInteracted(false);
                setIsAutoCycling(true);
            }, 4000);
  
            return () => clearTimeout(timeout);
        }
    }, [userInteracted]);
  
    const handleFaqClick = (faqId) => {
        setActiveId(faqId);
        setIsAutoCycling(false);
        setUserInteracted(true);
    };
  
    const handleMouseEnter = (faqId) => {
        setHoveredId(faqId);
    };
  
    const handleMouseLeave = () => {
        setHoveredId(null);
    };

    // Enhanced animation variants
    const cardVariants = {
        initial: { 
            opacity: 0, 
            x: -30,
            scale: 0.98 
        },
        animate: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            scale: 1.02,
            y: -2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        active: {
            scale: 1.03,
            y: -4,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const answerVariants = {
        initial: { 
            opacity: 0, 
            y: 30, 
            scale: 0.95,
            filter: "blur(4px)"
        },
        animate: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1
            }
        },
        exit: { 
            opacity: 0, 
            y: -20, 
            scale: 0.95,
            filter: "blur(4px)",
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const arrowVariants = {
        initial: { rotate: 0 },
        hover: { 
            rotate: 15,
            x: 2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        active: { 
            rotate: 45,
            x: 4,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const categoryButtonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        tap: { 
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };
  
    return (
        <section className="relative min-h-* py-16 md:py-20 overflow-hidden pb-20 bg-[#fff5f5]">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-7">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
                            <span className="text-black">Frequently Asked Questions</span>
                            <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="160" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 18 Q 110 8, 215 14" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none"/>
                                <path d="M15 21 Q 120 15, 200 18" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
                            </svg>
                        </h2>
                        
                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    variants={categoryButtonVariants}
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setUserInteracted(true);
                                        setIsAutoCycling(false);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        activeCategory === category
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                                            : 'bg-white text-black hover:bg-gray-50 border border-red-100'
                                    }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
  
                {/* FAQ Container */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                    {/* Left Side - Questions */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredFaqs.map((faq, index) => {
                            const isActive = activeId === faq.id;
                            const isHovered = hoveredId === faq.id;
                            
                            return (
                                <motion.div
                                    key={faq.id}
                                    variants={cardVariants}
                                    initial="initial"
                                    animate="animate"
                                    whileHover={!isActive ? "hover" : "active"}
                                    transition={{ delay: index * 0.05 }}
                                    onMouseEnter={() => handleMouseEnter(faq.id)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleFaqClick(faq.id)}
                                    className="relative cursor-pointer group"
                                >
                                    <motion.div
                                        className={`relative p-5 rounded-2xl border-2 transition-all duration-500 ease-out ${
                                            isActive
                                                ? 'bg-red-500 border-red-500 shadow-2xl shadow-red-500/25'
                                                : isHovered
                                                ? 'bg-white border-red-200 shadow-xl shadow-gray-200/50'
                                                : 'bg-white border-gray-200 shadow-md hover:shadow-lg'
                                        }`}
                                        style={{
                                            transformOrigin: 'center center'
                                        }}
                                    >
                                        <div className="relative flex items-start gap-3">
                                            {/* Number */}
                                            <motion.div
                                                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base transition-all duration-400 ease-out ${
                                                    isActive
                                                        ? 'bg-white text-red-500 shadow-lg'
                                                        : isHovered
                                                        ? 'bg-red-100 text-red-600'
                                                        : 'bg-red-50 text-red-600'
                                                }`}
                                                animate={{
                                                    scale: isActive ? 1.1 : isHovered ? 1.05 : 1,
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                {faq.id}
                                            </motion.div>
  
                                            {/* Question */}
                                            <div className="flex-1">
                                                <motion.p
                                                    className={`text-xs font-semibold tracking-wider mb-1 transition-all duration-400 ${
                                                        isActive 
                                                            ? 'text-red-100' 
                                                            : isHovered
                                                            ? 'text-red-500'
                                                            : 'text-red-400'
                                                    }`}
                                                    animate={{
                                                        x: isActive ? 2 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {faq.category}
                                                </motion.p>
                                                <motion.h3
                                                    className={`text-base font-semibold transition-all duration-400 ${
                                                        isActive
                                                            ? 'text-white'
                                                            : isHovered
                                                            ? 'text-gray-800'
                                                            : 'text-gray-900'
                                                    }`}
                                                    animate={{
                                                        x: isActive ? 2 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {faq.q}
                                                </motion.h3>
                                            </div>
  
                                            {/* Arrow */}
                                            <motion.svg
                                                variants={arrowVariants}
                                                initial="initial"
                                                animate={isActive ? "active" : isHovered ? "hover" : "initial"}
                                                className={`w-5 h-5 flex-shrink-0 transition-colors duration-400 ${
                                                    isActive
                                                        ? 'text-white'
                                                        : isHovered
                                                        ? 'text-red-500'
                                                        : 'text-red-400'
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </motion.svg>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
  
                    {/* Right Side - Answer Display */}
                    <div className="lg:sticky lg:top-6 mt-8 lg:mt-26">
                        <AnimatePresence mode="wait">
                            {faqs.map((faq) => (
                                activeId === faq.id && (
                                    <motion.div
                                        key={faq.id}
                                        variants={answerVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="relative"
                                    >
                                        {/* Background Decoration */}
                                        <motion.div 
                                            className="absolute -inset-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl opacity-50 blur-2xl"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                opacity: [0.3, 0.5, 0.3]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        
                                        <motion.div 
                                            className="relative bg-white rounded-2xl p-7 shadow-2xl border-2 border-red-100"
                                            initial={{ scale: 0.95 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            {/* Top Pattern */}
                                            <motion.div 
                                                className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-10 blur-2xl"
                                                animate={{
                                                    x: [0, 10, 0],
                                                    y: [0, -5, 0]
                                                }}
                                                transition={{
                                                    duration: 6,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            
                                            {/* Category Badge */}
                                            <motion.div 
                                                className="inline-flex items-center gap-1.5 mb-5 bg-red-50 px-4 py-2 rounded-full"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1, duration: 0.4 }}
                                            >
                                                <motion.div 
                                                    className="w-1.5 h-1.5 bg-red-500 rounded-full"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ 
                                                        duration: 2, 
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                <span className="text-xs font-semibold tracking-wider text-red-700">
                                                    {faq.category}
                                                </span>
                                            </motion.div>
  
                                            {/* Question Title */}
                                            <motion.h3 
                                                className="text-xl font-bold text-gray-900 mb-3"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2, duration: 0.4 }}
                                            >
                                                {faq.q}
                                            </motion.h3>
  
                                            {/* Answer */}
                                            <motion.div 
                                                className="text-gray-600 leading-relaxed text-base"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                            >
                                                {faq.a}
                                            </motion.div>
  
                                            {/* Action Button */}
                                            <motion.div 
                                                className="mt-7 flex items-center gap-3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.4 }}
                                            >
                                                
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
