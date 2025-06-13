import { motion } from 'framer-motion';
import { FaUsers, FaUserFriends, FaHistory, FaSearch, } from 'react-icons/fa';

const ExploreMembers = () => {
    const villageData = {
        totalMembers: "9,618",
        totalFamilies: "156",
        areaCovered: "25 sq km",
        oldestMember: "1800",
        youngestMember: "2022"
    };

    return (
        <section className="relative w-full py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3"
                    >
                        Explore Family Heritage in Painal
                        <span className="block text-sm sm:text-base md:text-lg text-emerald-600 mt-1 sm:mt-2">पैनाल में पारिवारिक विरासत का अन्वेषण करें</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
                    >
                        Uncover your family's rich history and connect with relatives across generations. Join our community to preserve and celebrate your ancestral legacy in Painal village.
                    </motion.p>
                </div>

                {/* Enhanced Village Data and Description in Single Row */}
                <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 shadow-sm"
                        >
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                {[
                                    { icon: FaUsers, value: villageData.totalMembers, label: "Total Members", hindiLabel: "कुल सदस्य" },
                                    { icon: FaUserFriends, value: villageData.totalFamilies, label: "Families", hindiLabel: "परिवार" },
                                    { icon: FaHistory, value: villageData.areaCovered, label: "Area Covered", hindiLabel: "क्षेत्र" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-emerald-50 mb-1 sm:mb-1.5 md:mb-2">
                                            <stat.icon className="text-base sm:text-lg md:text-xl text-emerald-600" />
                                        </div>
                                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-0.5">{stat.value}</p>
                                        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600">{stat.label}</p>
                                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-emerald-600">{stat.hindiLabel}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-3 sm:mt-4 md:mt-6 pt-2 sm:pt-3 md:pt-4 border-t border-gray-100">
                                <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-6">
                                    <div className="text-center">
                                        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mb-0.5">Oldest Record</p>
                                        <p className="text-sm sm:text-base md:text-lg font-semibold text-emerald-600">{villageData.oldestMember}</p>
                                    </div>
                                    <div className="w-px h-5 sm:h-6 md:h-8 bg-gray-200"></div>
                                    <div className="text-center">
                                        <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-600 mb-0.5">Latest Record</p>
                                        <p className="text-sm sm:text-base md:text-lg font-semibold text-emerald-600">{villageData.youngestMember}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Description Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 shadow-sm"
                        >
                            <div className="h-full flex flex-col justify-center">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1.5 sm:mb-2 md:mb-3">
                                    Find Your Family Members
                                    <span className="block text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-0.5">अपने परिवार के सदस्यों को खोजें</span>
                                </h3>
                                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-1.5 sm:mb-2 md:mb-3">
                                    Search for your family members by name or village area. Connect with your relatives and discover your family history in Painal.
                                </p>
                                <p className="text-[9px] sm:text-[10px] md:text-xs text-emerald-600">
                                    नाम या गांव के क्षेत्र से अपने परिवार के सदस्यों को खोजें। अपने रिश्तेदारों से जुड़ें और पैनल में अपने परिवार का इतिहास जानें।
                                </p>
                                <motion.button
                                    className="mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all text-xs sm:text-sm md:text-base shadow-sm hover:shadow-md flex items-center justify-center space-x-1.5 sm:space-x-2 md:space-x-3 w-full sm:w-auto sm:self-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaSearch className="text-emerald-100 text-xs sm:text-sm md:text-base" />
                                    <span>Start Your Search</span>
                                    <span className="text-emerald-100 text-[10px] sm:text-xs md:text-sm">(अपनी खोज शुरू करें)</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreMembers;
