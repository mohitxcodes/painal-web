import { motion } from 'framer-motion';
import { FaUsers, FaHome, FaMapMarkerAlt, FaUserFriends, FaHistory } from 'react-icons/fa';

const ExploreMembers = () => {
    const villageData = {
        totalMembers: "9,618",
        totalFamilies: "156",
        generations: "7",
        oldestMember: "1800",
        youngestMember: "2022"
    };

    return (
        <section className="relative w-full py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Simple Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-sm text-emerald-700 font-medium border border-emerald-200 mb-4">
                        <FaHome className="text-emerald-600" />
                        <span>Painal Village</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Find Your Family in Painal
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Search and connect with your family members in Painal village
                    </p>
                </div>

                {/* Styled Village Data */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-3">
                                    <FaUsers className="text-2xl text-emerald-600" />
                                </div>
                                <p className="text-3xl font-bold text-gray-800 mb-1">{villageData.totalMembers}</p>
                                <p className="text-sm text-gray-600">Total Members</p>
                                <p className="text-xs text-emerald-600">कुल सदस्य</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-3">
                                    <FaUserFriends className="text-2xl text-emerald-600" />
                                </div>
                                <p className="text-3xl font-bold text-gray-800 mb-1">{villageData.totalFamilies}</p>
                                <p className="text-sm text-gray-600">Families</p>
                                <p className="text-xs text-emerald-600">परिवार</p>
                            </div>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-3">
                                    <FaHistory className="text-2xl text-emerald-600" />
                                </div>
                                <p className="text-3xl font-bold text-gray-800 mb-1">{villageData.generations}</p>
                                <p className="text-sm text-gray-600">Generations</p>
                                <p className="text-xs text-emerald-600">पीढ़ियां</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex justify-center items-center gap-8">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">Oldest Record</p>
                                    <p className="text-xl font-semibold text-emerald-600">{villageData.oldestMember}</p>
                                </div>
                                <div className="w-px h-12 bg-gray-200"></div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-1">Latest Record</p>
                                    <p className="text-xl font-semibold text-emerald-600">{villageData.youngestMember}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Description */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm mb-12 max-w-3xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Find Your Family Members
                            <span className="block text-sm text-emerald-600">अपने परिवार के सदस्यों को खोजें</span>
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Search for your family members by name or village area. Connect with your relatives and discover your family history in Painal.
                        </p>
                        <p className="text-emerald-600">
                            नाम या गांव के क्षेत्र से अपने परिवार के सदस्यों को खोजें। अपने रिश्तेदारों से जुड़ें और पैनल में अपने परिवार का इतिहास जानें।
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <motion.button
                        className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all text-lg shadow-sm hover:shadow-md flex items-center justify-center mx-auto space-x-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaMapMarkerAlt className="text-emerald-100" />
                        <span>Start Your Search</span>
                        <span className="text-emerald-100">(अपनी खोज शुरू करें)</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default ExploreMembers;
