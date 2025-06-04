import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';
import { AnimatedBackground } from '../../../components/common/AnimatedBackground';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);

    const villageInfo = {
        name: "Painal",
        hindiName: "पैनाल",
        location: {
            district: "Patna",
            block: "Bihta",
            distance: {
                patna: "21 KM west of Patna",
                bihta: "9 KM from Bihta"
            }
        },
        stats: [
            { icon: FaUsers, label: "Population", labelHindi: "जनसंख्या", value: "9,618", color: "indigo" },
            { icon: FaHome, label: "Houses", labelHindi: "घर", value: "1,601", color: "emerald" },
            { icon: FaMapMarkerAlt, label: "Pin Code", labelHindi: "पिन कोड", value: "800111", color: "amber" },
            { icon: FaSchool, label: "District", labelHindi: "जिला", value: "Patna", color: "violet" }
        ],
        description: "Discover the rich heritage and warm community of Painal village. Situated at the border of Patna and Bhojpur districts with an elevation of 62 meters above sea level, our village combines agricultural traditions with modern aspirations.",
        tags: ["Agriculture", "Heritage", "Community"]
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-[90vh] py-12 w-full overflow-hidden">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-indigo-100 z-0"></div>

            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            {/* Animated background elements */}
            <AnimatedBackground />

            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-green-800 font-medium"
                        >
                            {villageInfo.location.block} Block, {villageInfo.location.district} District
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Welcome to <span className="text-green-700 relative">
                                {villageInfo.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-1 bg-green-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl sm:text-3xl font-semibold text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="text-green-600">{villageInfo.hindiName}</span>
                        </motion.h2>

                        <motion.div
                            className="flex items-center space-x-2 text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-base sm:text-lg">{villageInfo.location.distance.patna}, {villageInfo.location.distance.bihta}</p>
                        </motion.div>

                        <motion.p
                            className="text-base sm:text-lg text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {villageInfo.description}
                        </motion.p>

                        {/* Village Stats - Enhanced Professional Design */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {villageInfo.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border-l-4 border-l-green-500 border-t border-r border-b border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg bg-${stat.color}-50`}>
                                            <stat.icon className={`text-xl text-${stat.color}-600`} />
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-1">
                                                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                                                <span className="text-xs text-green-600">({stat.labelHindi})</span>
                                            </div>
                                            <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <motion.button
                                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm sm:text-base shadow-sm hover:shadow-md"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Village <span className="text-green-200">(गाँव की खोज)</span>
                            </motion.button>
                            <motion.button
                                className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Our History <span className="text-green-600">(हमारा इतिहास)</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative mt-8 lg:mt-0"
                        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                    >
                        <motion.div
                            className="relative rounded-2xl overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="assets/painal-map.png"
                                alt="Painal Village"
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                            <motion.div
                                className="absolute z-50 bottom-4 left-4 sm:bottom-6 sm:left-6 text-white max-w-[80%]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <p className="text-sm sm:text-base font-medium">{villageInfo.name} Village <span className="text-green-200">({villageInfo.hindiName} गाँव)</span></p>
                                <p className="text-xs sm:text-sm opacity-90">A vibrant agricultural community with a population of {villageInfo.stats[0].value} residents</p>

                                <div className="flex mt-3 space-x-2">
                                    {villageInfo.tags.map((tag, index) => (
                                        <span key={index} className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;