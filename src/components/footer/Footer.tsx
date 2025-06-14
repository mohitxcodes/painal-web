import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', hindiName: 'हमारे बारे में', href: '/' },
    ];

    return (
        <footer className="relative w-full">
            {/* Base White Background */}
            <div className="absolute inset-0 bg-white opacity-95 backdrop-blur-sm"></div>

            {/* Subtle Gradient Layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/60 via-white to-gray-50/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 via-white to-gray-50/40"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('/assets/pattern-bg.png')] bg-repeat"></div>

            {/* Subtle Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent"></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.01] mix-blend-overlay"></div>

            {/* Footer Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 sm:py-5 md:py-6">
                        {/* Logo and Copyright */}
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
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
                                <span className="text-xs sm:text-sm text-gray-700">
                                    © {currentYear} Painal Village. Made with <FaHeart className="inline text-red-500 mx-0.5 sm:mx-1" /> by the community
                                </span>
                                <span className="text-[10px] sm:text-xs text-green-600">
                                    © {currentYear} पैनल गांव। समुदाय द्वारा <FaHeart className="inline text-red-500 mx-0.5 sm:mx-1" /> के साथ बनाया गया
                                </span>
                            </div>
                        </div>

                        {/* Desktop Quick Links - Single Row */}
                        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                            {quickLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm lg:text-base text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-1"
                                    whileHover={{ y: -1 }}
                                >
                                    <span>{link.name}</span>
                                    <span className="text-xs lg:text-sm text-green-600">({link.hindiName})</span>
                                </motion.a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
