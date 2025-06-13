import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHome, FaUsers, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [currentText, setCurrentText] = useState(0);

    const villageInfo = {
        name: "Painal",
        hindiName: "पैनाल",
        location: {
            district: "Patna",
            block: "Bihta",
        },
        stats: [
            { icon: FaUsers, label: "Population", labelHindi: "जनसंख्या", value: "9,618", color: "emerald" },
            { icon: FaHome, label: "Houses", labelHindi: "घर", value: "1,601", color: "emerald" },
            { icon: FaMapMarkerAlt, label: "Pin Code", labelHindi: "पिन कोड", value: "800111", color: "emerald" },
            { icon: FaSchool, label: "District", labelHindi: "जिला", value: "Patna", color: "emerald" }
        ],
        description: "Discover the rich heritage and warm community of Painal village. 21 KM from Patna, 9 KM from Bihta.",
        tags: ["Agriculture", "Heritage", "Community"]
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const textVariants = {
        enter: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        center: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95
        }
    };

    return (
        <div className="relative min-h-[85vh] sm:min-h-[90vh] py-8 sm:py-12 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 sm:space-y-6"
                        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-block bg-emerald-50 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-emerald-700 font-medium border border-emerald-200 shadow-[0_2px_10px_rgba(16,185,129,0.1)] hover:shadow-[0_4px_15px_rgba(16,185,129,0.15)] transition-all duration-300"
                        >
                            {villageInfo.location.block} Block, {villageInfo.location.district} District
                        </motion.div>

                        <div className="relative h-[60px] sm:h-[80px]">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Welcome to{" "}
                                <div className="relative inline-block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentText}
                                            variants={textVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }}
                                            className="text-emerald-700 relative inline-block"
                                        >
                                            {currentText === 0 ? villageInfo.name : villageInfo.hindiName}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            />
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </motion.h1>
                        </div>

                        <motion.p
                            className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {villageInfo.description}
                        </motion.p>

                        {/* Village Stats - Single Line for Mobile */}
                        <motion.div
                            className="flex flex-wrap sm:grid sm:grid-cols-2 gap-3 sm:gap-6 py-4 overflow-x-auto sm:overflow-visible"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {villageInfo.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex-shrink-0 sm:flex-shrink w-[140px] sm:w-auto group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-all duration-300 border border-transparent hover:border-emerald-200/50">
                                        <div className={`p-1.5 sm:p-2 rounded-lg bg-${stat.color}-50 shadow-[0_2px_8px_rgba(16,185,129,0.1)] group-hover:shadow-[0_4px_12px_rgba(16,185,129,0.15)] transition-all duration-300 border border-${stat.color}-100/50`}>
                                            <stat.icon className={`text-lg sm:text-xl text-${stat.color}-600`} />
                                        </div>
                                        <div>
                                            <div className="flex items-baseline space-x-1 sm:space-x-2">
                                                <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                                                <div className="flex flex-col">
                                                    <p className="text-[10px] sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</p>
                                                    <p className="text-[8px] sm:text-xs text-emerald-600 leading-tight">{stat.labelHindi}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent group-hover:via-emerald-300 transition-all duration-300"></div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <motion.button
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all text-sm sm:text-base shadow-[0_4px_12px_rgba(16,185,129,0.2)] hover:shadow-[0_6px_16px_rgba(16,185,129,0.3)] border border-emerald-500/20 hover:border-emerald-400/30"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Explore Village <span className="text-emerald-100">(गाँव की खोज)</span>
                            </motion.button>
                            <motion.button
                                className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm sm:text-base shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-emerald-200 hover:text-emerald-700"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Our Ancestry <span className="text-emerald-600">(हमारा वंशावली)</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image (Hidden on Mobile) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative mt-6 sm:mt-8 lg:mt-0 hidden sm:block"
                        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                    >
                        <motion.div
                            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="assets/painal-map.png"
                                alt="Painal Village"
                                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent"></div>

                            <motion.div
                                className="absolute z-50 bottom-3 sm:bottom-4 left-3 sm:left-4 md:bottom-6 md:left-6 text-white max-w-[85%] sm:max-w-[80%]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <p className="text-sm sm:text-base font-medium">{villageInfo.name} Village <span className="text-emerald-300">({villageInfo.hindiName} गाँव)</span></p>
                                <p className="text-xs sm:text-sm text-gray-200">A vibrant agricultural community with a population of {villageInfo.stats[0].value} residents</p>

                                <div className="flex mt-2 sm:mt-3 space-x-2">
                                    {villageInfo.tags.map((tag, index) => (
                                        <span key={index} className="inline-block bg-white/20 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs text-white border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
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