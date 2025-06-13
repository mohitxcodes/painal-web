import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUsers, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', hindiName: 'होम', href: '/', icon: FaHome },
        { name: 'FamilyTree', hindiName: 'वंशावली', href: '/family-tree', icon: FaUsers },
        { name: 'Gallery', hindiName: 'गैलरी', href: '/gallery', icon: FaMapMarkerAlt },
        { name: 'Our Book', hindiName: 'हमारी पुस्तक', href: '/our-book', icon: FaBook },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            {/* Enhanced Background with multiple layers */}
            <div className={`absolute bg-emerald-50 inset-0 z-0 transition-all duration-300 ${isScrolled ? 'bg-opacity-95' : 'bg-opacity-90'}`}></div>

            {/* Classic Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.15] bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            {/* Subtle Color Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-transparent to-blue-100/20 z-0"></div>

            {/* Enhanced grain texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay z-0"></div>

            {/* Subtle Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/30 via-transparent to-transparent z-0"></div>

            {/* Header Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2 group">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <svg
                                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2L2 7L12 12L22 7L12 2Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 17L12 22L22 17"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 12L12 17L22 12"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </motion.div>
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">Painal</span>
                                    <span className="text-[10px] sm:text-xs text-emerald-600 group-hover:text-emerald-700 transition-colors">पैनल गांव</span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium flex items-center space-x-2 group"
                                    whileHover={{ y: -2 }}
                                >
                                    <link.icon className="text-emerald-600 group-hover:text-emerald-700 transition-colors text-base lg:text-lg" />
                                    <div className="flex items-center">
                                        <span>{link.name}</span>
                                        <span className="text-xs text-emerald-600 ml-1.5">({link.hindiName})</span>
                                    </div>
                                </motion.a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-emerald-50 focus:outline-none transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-emerald-100"
                        >
                            <div className="container mx-auto px-4 py-3">
                                <nav className="flex flex-col space-y-3">
                                    {navLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium py-2 flex items-center space-x-3"
                                            onClick={() => setIsMenuOpen(false)}
                                            whileHover={{ x: 5 }}
                                        >
                                            <link.icon className="text-emerald-600 text-base" />
                                            <div className="flex items-center">
                                                <span>{link.name}</span>
                                                <span className="text-xs text-emerald-600 ml-1.5">({link.hindiName})</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};