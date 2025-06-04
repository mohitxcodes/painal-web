import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', hindiName: 'होम', href: '/' },
        { name: 'Ancestry', hindiName: 'वंशावली', href: '/ancestry' },
        { name: 'Gallery', hindiName: 'गैलरी', href: '/gallery' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Header Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 via-green-50 to-green-100 opacity-95 backdrop-blur-sm"></div>

            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern-bg.png')] bg-repeat"></div>

            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>

            {/* Header Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <svg
                                    className="w-8 h-8 text-green-600"
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
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-gray-800">Painal</span>
                                    <span className="text-xs text-green-600">पैनल गांव</span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium flex flex-col items-center"
                                >
                                    <span>{link.name}</span>
                                    <span className="text-xs text-green-600">{link.hindiName}</span>
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/50 focus:outline-none transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
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
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/80 backdrop-blur-sm border-t border-gray-100"
                        >
                            <div className="container mx-auto px-4 py-4">
                                <nav className="flex flex-col space-y-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium py-2 flex flex-col"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span>{link.name}</span>
                                            <span className="text-xs text-green-600">{link.hindiName}</span>
                                        </a>
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