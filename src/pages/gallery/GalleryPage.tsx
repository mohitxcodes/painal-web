import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLandmark, FaSchool, FaInfoCircle, FaChevronLeft, FaChevronRight, FaHeart, FaShare, FaDownload, FaPrint, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';

interface GalleryItem {
    id: number;
    title: string;
    hindiTitle: string;
    description: string;
    hindiDescription: string;
    images: string[];
    location: string;
    hindiLocation: string;
    yearEstablished?: string;
    significance?: string;
    hindiSignificance?: string;
}
const galleryData: { [key: string]: GalleryItem[] } = {
    temples: [
        {
            id: 1,
            title: "Shiva Temple",
            hindiTitle: "शिव मंदिर",
            description: "A historic temple dedicated to Lord Shiva, known for its architectural beauty and spiritual significance. The temple hosts various religious ceremonies throughout the year.",
            hindiDescription: "भगवान शिव को समर्पित एक ऐतिहासिक मंदिर, जो अपनी वास्तुकला की सुंदरता और आध्यात्मिक महत्व के लिए जाना जाता है। मंदिर पूरे वर्ष विभिन्न धार्मिक समारोहों का आयोजन करता है।",
            images: [
                "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000",
                "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000",
                "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000"
            ],
            location: "Center of Painal Village",
            hindiLocation: "पैनल गांव का केंद्र",
            yearEstablished: "1850",
            significance: "Major religious and cultural center",
            hindiSignificance: "प्रमुख धार्मिक और सांस्कृतिक केंद्र"
        },
        {
            id: 2,
            title: "Hanuman Temple",
            hindiTitle: "हनुमान मंदिर",
            description: "A sacred temple dedicated to Lord Hanuman, known for its peaceful atmosphere and daily prayers. The temple is particularly crowded on Tuesdays and Saturdays.",
            hindiDescription: "भगवान हनुमान को समर्पित एक पवित्र मंदिर, जो अपने शांत वातावरण और दैनिक प्रार्थनाओं के लिए जाना जाता है। मंगलवार और शनिवार को मंदिर विशेष रूप से भीड़-भाड़ वाला होता है।",
            images: [
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
            ],
            location: "East Painal Village",
            hindiLocation: "पूर्व पैनल गांव",
            yearEstablished: "1900",
            significance: "Popular religious site",
            hindiSignificance: "लोकप्रिय धार्मिक स्थल"
        },
        {
            id: 3,
            title: "Hanuman Temple",
            hindiTitle: "हनुमान मंदिर",
            description: "A sacred temple dedicated to Lord Hanuman, known for its peaceful atmosphere and daily prayers. The temple is particularly crowded on Tuesdays and Saturdays.",
            hindiDescription: "भगवान हनुमान को समर्पित एक पवित्र मंदिर, जो अपने शांत वातावरण और दैनिक प्रार्थनाओं के लिए जाना जाता है। मंगलवार और शनिवार को मंदिर विशेष रूप से भीड़-भाड़ वाला होता है।",
            images: [
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
            ],
            location: "East Painal Village",
            hindiLocation: "पूर्व पैनल गांव",
            yearEstablished: "1900",
            significance: "Popular religious site",
            hindiSignificance: "लोकप्रिय धार्मिक स्थल"
        },
    ],
    schools: [
        {
            id: 1,
            title: "Government Primary School",
            hindiTitle: "सरकारी प्राथमिक विद्यालय",
            description: "The oldest educational institution in the village, providing quality education to children from all backgrounds. The school has modern facilities and dedicated teachers.",
            hindiDescription: "गांव का सबसे पुराना शैक्षणिक संस्थान, जो सभी पृष्ठभूमि के बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करता है। स्कूल में आधुनिक सुविधाएं और समर्पित शिक्षक हैं।",
            images: [
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1100",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
            ],
            location: "North Painal",
            hindiLocation: "उत्तर पैनल",
            yearEstablished: "1950",
            significance: "Primary education center",
            hindiSignificance: "प्राथमिक शिक्षा केंद्र"
        }
    ],
    landmarks: [
        {
            id: 1,
            title: "Village Square",
            hindiTitle: "गांव का चौक",
            description: "The central gathering place of the village, where community events and celebrations take place. It's surrounded by ancient trees and traditional architecture.",
            hindiDescription: "गांव का केंद्रीय सभा स्थल, जहां सामुदायिक कार्यक्रम और उत्सव आयोजित होते हैं। यह प्राचीन पेड़ों और पारंपरिक वास्तुकला से घिरा हुआ है।",
            images: [
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
                "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
            ],
            location: "Center of Painal Village",
            hindiLocation: "पैनल गांव का केंद्र",
            significance: "Community gathering place",
            hindiSignificance: "सामुदायिक सभा स्थल"
        }
    ]
};

const tabs = [
    { id: 'temples', label: 'Temples', hindiLabel: 'मंदिर', icon: FaLandmark },
    { id: 'schools', label: 'Schools', hindiLabel: 'स्कूल', icon: FaSchool },
    { id: 'landmarks', label: 'Landmarks', hindiLabel: 'लैंडमार्क', icon: FaLandmark },
];

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState('temples');
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);

    // Auto-advance carousel
    useEffect(() => {
        if (selectedItem && !isFullscreen) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [selectedItem, isFullscreen]);

    const nextImage = () => {
        if (selectedItem) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
        }
    };

    const prevImage = () => {
        if (selectedItem) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-10">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-emerald-50 to-teal-50 z-0"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>
            <AnimatedBackground />
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Enhanced Header with Parallax Effect */}
                    <motion.div
                        className="text-center relative"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-green-200 rounded-full filter blur-3xl opacity-20"></div>
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                            Gallery
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-emerald-600 mb-8">
                            गैलरी
                        </h2>
                    </motion.div>

                    {/* Enhanced Tab Bar with Animation */}
                    <motion.div
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex flex-wrap gap-2">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-green-50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <tab.icon className="text-lg" />
                                    <span className="font-medium">{tab.label}</span>
                                    <span className="text-sm opacity-80">{tab.hindiLabel}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Image Gallery with Enhanced Cards */}
                        <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-4">
                            <div className="grid grid-cols-1 gap-4">
                                {galleryData[activeTab]?.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="relative group cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setCurrentImageIndex(0);
                                        }}
                                    >
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                                    <p className="text-sm opacity-90 mb-2">{item.hindiTitle}</p>
                                                    <div className="flex items-center gap-2">
                                                        <FaMapMarkerAlt className="text-green-400" />
                                                        <span className="text-sm">{item.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Content Panel */}
                        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-6">
                            {selectedItem ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    {/* Image Carousel */}
                                    <div className="relative aspect-video rounded-lg overflow-hidden">
                                        <img
                                            src={selectedItem.images[currentImageIndex]}
                                            alt={selectedItem.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex gap-2">
                                                        {selectedItem.images.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setCurrentImageIndex(index)}
                                                                className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                                                    ? 'bg-white scale-125'
                                                                    : 'bg-white/50'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={prevImage}
                                                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                                        >
                                                            <FaChevronLeft className="text-white" />
                                                        </button>
                                                        <button
                                                            onClick={nextImage}
                                                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                                        >
                                                            <FaChevronRight className="text-white" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
                                                <p className="text-lg text-green-600">{selectedItem.hindiTitle}</p>
                                            </div>
                                            <button
                                                onClick={() => setIsLiked(!isLiked)}
                                                className={`p-2 rounded-full transition-colors ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                    }`}
                                            >
                                                <FaHeart className="text-xl" />
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-green-50/50 rounded-lg p-4">
                                                <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                                                    <FaInfoCircle className="text-green-600" />
                                                    Description
                                                </h4>
                                                <p className="text-gray-700">{selectedItem.description}</p>
                                                <p className="text-green-600 mt-2">{selectedItem.hindiDescription}</p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-green-50/50 rounded-lg p-4">
                                                    <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                                                        <FaMapMarkerAlt className="text-green-600" />
                                                        Location
                                                    </h4>
                                                    <p className="text-gray-700">{selectedItem.location}</p>
                                                    <p className="text-green-600">{selectedItem.hindiLocation}</p>
                                                </div>

                                                {selectedItem.yearEstablished && (
                                                    <div className="bg-green-50/50 rounded-lg p-4">
                                                        <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                                                            <FaCalendarAlt className="text-green-600" />
                                                            Established
                                                        </h4>
                                                        <p className="text-gray-700">{selectedItem.yearEstablished}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {selectedItem.significance && (
                                                <div className="bg-green-50/50 rounded-lg p-4">
                                                    <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2 mb-2">
                                                        <FaStar className="text-green-600" />
                                                        Significance
                                                    </h4>
                                                    <p className="text-gray-700">{selectedItem.significance}</p>
                                                    <p className="text-green-600 mt-2">{selectedItem.hindiSignificance}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3 mt-6">
                                            <button
                                                onClick={() => setShowShareModal(true)}
                                                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <FaShare />
                                                <span>Share</span>
                                            </button>
                                            <button className="flex-1 px-4 py-2 bg-white border border-green-200 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                                                <FaDownload />
                                                <span>Download</span>
                                            </button>
                                            <button className="flex-1 px-4 py-2 bg-white border border-green-200 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                                                <FaPrint />
                                                <span>Print</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-500">
                                    Select an item to view details
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Share Modal */}
            <AnimatePresence>
                {showShareModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
                        onClick={() => setShowShareModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Share {selectedItem?.title}</h3>
                            <div className="space-y-4">
                                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    Share on Facebook
                                </button>
                                <button className="w-full px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                                    Share on Twitter
                                </button>
                                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                    Share on WhatsApp
                                </button>
                                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                    Copy Link
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
