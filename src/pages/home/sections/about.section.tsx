import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaHome, FaSchool, FaLandmark, FaBook, FaHistory, FaHeart, FaShare } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { aboutImage } from '../../../data/HomeData'

const AboutSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');



    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImage.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const stats = [
        { icon: FaUsers, label: 'Total Population', hindiLabel: 'कुल जनसंख्या', value: '9,618', color: 'indigo' },
        { icon: FaHome, label: 'Number of Houses', hindiLabel: 'घरों की संख्या', value: '1,601', color: 'emerald' },
        { icon: FaUsers, label: 'Female Population', hindiLabel: 'महिला जनसंख्या', value: '47.0%', color: 'rose' },
        { icon: FaSchool, label: 'Literacy Rate', hindiLabel: 'साक्षरता दर', value: '60.3%', color: 'amber' },
        { icon: FaUsers, label: 'Scheduled Tribes', hindiLabel: 'अनुसूचित जनजाति', value: '0.2%', color: 'violet' },
        { icon: FaUsers, label: 'Scheduled Caste', hindiLabel: 'अनुसूचित जाति', value: '15.3%', color: 'blue' },
    ];

    const features = [
        {
            icon: FaHistory,
            title: "Rich Heritage",
            titleHindi: "समृद्ध विरासत",
            description: "Discover the ancient history and cultural heritage of Painal village.",
            descriptionHindi: "पैनाल गाँव की प्राचीन इतिहास और सांस्कृतिक विरासत का अन्वेषण करें।"
        },
        {
            icon: FaUsers,
            title: "Community",
            titleHindi: "समुदाय",
            description: "A close-knit community of over 9,000 residents living in harmony.",
            descriptionHindi: "9,000 से अधिक निवासियों का एक सुसंगत समुदाय।"
        },
        {
            icon: FaLandmark,
            title: "Location",
            titleHindi: "स्थान",
            description: "Situated in Bihta block, Patna district, with excellent connectivity.",
            descriptionHindi: "बिहटा ब्लॉक, पटना जिले में स्थित, उत्कृष्ट संपर्क के साथ।"
        },
        {
            icon: FaBook,
            title: "Education",
            titleHindi: "शिक्षा",
            description: "Home to quality educational institutions and learning centers.",
            descriptionHindi: "गुणवत्तापूर्ण शैक्षणिक संस्थानों और शिक्षा केंद्रों का घर।"
        }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', hindiLabel: 'अवलोकन' },
        { id: 'demographics', label: 'Demographics', hindiLabel: 'जनसांख्यिकी' }
    ];

    return (
        <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4"
                    >
                        About Our Village Painal
                        <span className="block text-base sm:text-lg md:text-xl text-emerald-600 mt-1 sm:mt-2">हमारे गाँव पैनाल के बारे में</span>
                    </motion.h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-emerald-200/50 p-1.5 sm:p-2">
                        <div className="flex gap-1 sm:gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${activeTab === tab.id
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-emerald-50'
                                        }`}
                                >
                                    <span className="font-medium">{tab.label}</span>
                                    <span className="text-xs sm:text-sm opacity-80 ml-1">({tab.hindiLabel})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column - Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={aboutImage[currentImageIndex].url}
                                alt={aboutImage[currentImageIndex].title}
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{aboutImage[currentImageIndex].title}</h3>
                                <p className="text-sm sm:text-base text-emerald-200">{aboutImage[currentImageIndex].description}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="space-y-4 sm:space-y-6">
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="grid grid-cols-1 gap-3 sm:gap-4 h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                                >
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 flex-shrink-0">
                                                    <feature.icon className="text-lg sm:text-xl text-emerald-600" />
                                                </div>
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-0.5 sm:mb-1">
                                                        {feature.title}
                                                        <span className="block text-xs sm:text-sm text-emerald-600">{feature.titleHindi}</span>
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">{feature.description}</p>
                                                    <p className="text-xs text-emerald-600">{feature.descriptionHindi}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'demographics' && (
                                <motion.div
                                    key="demographics"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto pr-2 custom-scrollbar"
                                >
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all"
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className={`p-1.5 sm:p-2 rounded-lg bg-${stat.color}-50`}>
                                                    <stat.icon className={`text-lg sm:text-xl text-${stat.color}-600`} />
                                                </div>
                                                <div>
                                                    <p className="text-lg sm:text-xl font-bold text-gray-800">{stat.value}</p>
                                                    <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                                                    <p className="text-xs text-emerald-600">{stat.hindiLabel}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
                >
                    <motion.button
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all text-sm sm:text-base shadow-sm hover:shadow-md flex items-center gap-1.5 sm:gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaHeart className="text-emerald-100 text-sm sm:text-base" />
                        <span>Learn More</span>
                        <span className="text-emerald-100 text-xs sm:text-sm">(और जानें)</span>
                    </motion.button>
                    <motion.button
                        className="px-4 sm:px-6 py-2 sm:py-3 border border-emerald-200 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all text-sm sm:text-base flex items-center gap-1.5 sm:gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaShare className="text-emerald-600 text-sm sm:text-base" />
                        <span>Share</span>
                        <span className="text-emerald-600 text-xs sm:text-sm">(शेयर करें)</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

// Add custom scrollbar styles
const styles = `
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 2px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #059669;
}
`;

// Add styles to document head
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default AboutSection;

