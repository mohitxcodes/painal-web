import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative min-h-[90vh] w-full bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                            Welcome to <span className="text-indigo-600">Painal</span>
                        </h1>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-base sm:text-lg">Painal, Bihta, Patna, Bihar</p>
                        </div>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            Discover the rich heritage and warm community of Painal village.
                            A place where tradition meets progress, and every story adds to our
                            collective history.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-2">
                            <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
                                Explore Village
                            </button>
                            <button className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-sm sm:text-base">
                                Our History
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="assets/painal-map.png"
                                alt="Painal Village"
                                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 rounded-full opacity-20"></div>
                        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-400 rounded-full opacity-20"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;