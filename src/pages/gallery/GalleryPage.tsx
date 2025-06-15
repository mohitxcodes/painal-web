import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLandmark, FaSchool, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaSearchMinus, FaSearchPlus, FaChevronLeft, FaChevronRight, FaTimes, FaImages } from 'react-icons/fa';
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
};

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
];

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState('temples');
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleItemClick = (item: GalleryItem) => {
        setSelectedItem(item);
        setCurrentImageIndex(0);
        if (isMobile) {
            setIsDrawerOpen(true);
        }
    };

    const handleZoom = (direction: 'in' | 'out') => {
        if (direction === 'in' && zoomLevel < 3) {
            setZoomLevel(prev => prev + 0.25);
        } else if (direction === 'out' && zoomLevel > 0.5) {
            setZoomLevel(prev => prev - 0.25);
        }
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedItem) return;
        const totalImages = selectedItem.images.length;
        if (direction === 'prev') {
            setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
        } else {
            setCurrentImageIndex((prev) => (prev + 1) % totalImages);
        }
        setZoomLevel(1);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
        setTimeout(() => {
            setSelectedItem(null);
        }, 300);
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-8 md:py-24 bg-white">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/20 via-white to-emerald-50/10 z-0"></div>
            <div className="absolute inset-0 opacity-3 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>
            <AnimatedBackground />
            <div className="absolute inset-0 bg-noise opacity-[0.015] mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    {/* Enhanced Header Section */}
                    <div className="text-center space-y-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block"
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                                Village Gallery
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl text-emerald-600 mt-1">
                                गांव की गैलरी
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-sm text-gray-600 max-w-xl mx-auto"
                        >
                            Explore the beautiful landmarks and important places of Painal village.
                            <span className="block text-emerald-600 mt-0.5">
                                पैनाल गांव के सुंदर स्थलों और महत्वपूर्ण स्थानों का अन्वेषण करें।
                            </span>
                        </motion.p>
                    </div>

                    {/* Modern Tab Bar */}
                    <div className="bg-white rounded-xl p-1 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-200/80 max-w-2xl mx-auto">
                        <div className="flex  justify-center gap-1">
                            {tabs.map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-emerald-600 text-white shadow-sm'
                                        : 'text-gray-600 hover:bg-emerald-50'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <tab.icon className="text-lg" />
                                    <span className="font-medium text-sm">{tab.label}</span>
                                    <span className="text-xs opacity-80">{tab.hindiLabel}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                        {/* Image Gallery */}
                        <div className="lg:col-span-8 bg-white rounded-xl p-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-200/80">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {galleryData[activeTab]?.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -2 }}
                                        className="relative group cursor-pointer"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                                    <h3 className="text-base font-semibold">{item.title}</h3>
                                                    <p className="text-sm opacity-90">{item.hindiTitle}</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                                <FaImages className="text-xs" />
                                                <span>{item.images.length}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Content Panel - Only visible on desktop */}
                        {!isMobile && (
                            <div className="lg:col-span-4 bg-white rounded-xl p-3 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-200/80">
                                <AnimatePresence mode="wait">
                                    {selectedItem ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="space-y-4"
                                        >
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{selectedItem.title}</h3>
                                                <p className="text-base text-emerald-600">{selectedItem.hindiTitle}</p>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <FaMapMarkerAlt className="text-emerald-600" />
                                                    <div>
                                                        <p className="text-sm">{selectedItem.location}</p>
                                                        <p className="text-xs text-emerald-600">{selectedItem.hindiLocation}</p>
                                                    </div>
                                                </div>

                                                {selectedItem.yearEstablished && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <FaCalendarAlt className="text-emerald-600" />
                                                        <p className="text-sm">Established: {selectedItem.yearEstablished}</p>
                                                    </div>
                                                )}

                                                {selectedItem.significance && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <FaStar className="text-emerald-600" />
                                                        <div>
                                                            <p className="text-sm">{selectedItem.significance}</p>
                                                            <p className="text-xs text-emerald-600">{selectedItem.hindiSignificance}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="pt-3 border-t border-gray-100">
                                                    <h4 className="text-sm font-medium text-gray-500 mb-1.5">Description</h4>
                                                    <p className="text-sm text-gray-700">{selectedItem.description}</p>
                                                    <p className="text-sm text-emerald-600 mt-1">{selectedItem.hindiDescription}</p>
                                                </div>
                                            </div>

                                            {/* Image Gallery */}
                                            <div className="grid grid-cols-3 gap-1.5">
                                                {selectedItem.images.map((image, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="relative aspect-square cursor-pointer group"
                                                        whileHover={{ scale: 1.05 }}
                                                        onClick={() => {
                                                            setSelectedImage(image);
                                                            setCurrentImageIndex(index);
                                                        }}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={`${selectedItem.title} - Image ${index + 1}`}
                                                            className="w-full h-full object-cover rounded-lg shadow-sm"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                                            <FaImages className="text-white text-lg" />
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center h-full text-gray-500"
                                        >
                                            Select a place to view details
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Mobile Bottom Drawer */}
            <AnimatePresence>
                {isMobile && isDrawerOpen && selectedItem && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDrawer}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)] border-t border-gray-200/80"
                        >
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-1 bg-gray-200 rounded-full" />
                                    <button
                                        onClick={closeDrawer}
                                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                                    >
                                        <FaTimes className="text-lg" />
                                    </button>
                                </div>
                                <div className="space-y-4 max-h-[80vh] overflow-y-auto">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">{selectedItem.title}</h3>
                                        <p className="text-base text-emerald-600">{selectedItem.hindiTitle}</p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <FaMapMarkerAlt className="text-emerald-600" />
                                            <div>
                                                <p className="text-sm">{selectedItem.location}</p>
                                                <p className="text-xs text-emerald-600">{selectedItem.hindiLocation}</p>
                                            </div>
                                        </div>

                                        {selectedItem.yearEstablished && (
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <FaCalendarAlt className="text-emerald-600" />
                                                <p className="text-sm">Established: {selectedItem.yearEstablished}</p>
                                            </div>
                                        )}

                                        {selectedItem.significance && (
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <FaStar className="text-emerald-600" />
                                                <div>
                                                    <p className="text-sm">{selectedItem.significance}</p>
                                                    <p className="text-xs text-emerald-600">{selectedItem.hindiSignificance}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="pt-3 border-t border-gray-100">
                                            <h4 className="text-sm font-medium text-gray-500 mb-1.5">Description</h4>
                                            <p className="text-sm text-gray-700">{selectedItem.description}</p>
                                            <p className="text-sm text-emerald-600 mt-1">{selectedItem.hindiDescription}</p>
                                        </div>
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-3 gap-1.5">
                                        {selectedItem.images.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative aspect-square cursor-pointer group"
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => {
                                                    setSelectedImage(image);
                                                    setCurrentImageIndex(index);
                                                }}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${selectedItem.title} - Image ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                                    <FaImages className="text-white text-lg" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Full Image View Modal */}
            <AnimatePresence>
                {selectedImage && selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    >
                        <div className="relative w-full max-w-5xl">
                            <div className="absolute -top-12 right-0 flex items-center gap-3">
                                <div className="flex items-center gap-1.5 bg-white/10 rounded-lg p-1">
                                    <button
                                        onClick={() => handleZoom('out')}
                                        className="p-1.5 text-white hover:text-emerald-400 transition-colors duration-300 disabled:opacity-50"
                                        disabled={zoomLevel <= 0.5}
                                    >
                                        <FaSearchMinus className="text-base" />
                                    </button>
                                    <span className="text-white text-sm">{Math.round(zoomLevel * 100)}%</span>
                                    <button
                                        onClick={() => handleZoom('in')}
                                        className="p-1.5 text-white hover:text-emerald-400 transition-colors duration-300 disabled:opacity-50"
                                        disabled={zoomLevel >= 3}
                                    >
                                        <FaSearchPlus className="text-base" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedImage(null);
                                        setZoomLevel(1);
                                    }}
                                    className="p-1.5 text-white hover:text-emerald-400 transition-colors duration-300"
                                >
                                    <FaTimes className="text-base" />
                                </button>
                            </div>
                            <div className="relative overflow-auto max-h-[80vh]">
                                <div
                                    className="transition-transform duration-300"
                                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                                >
                                    <img
                                        src={selectedImage}
                                        alt="Gallery Image"
                                        className="w-full h-auto rounded-lg shadow-2xl"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300"
                            >
                                <FaChevronLeft className="text-lg" />
                            </button>
                            <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300"
                            >
                                <FaChevronRight className="text-lg" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
                                {currentImageIndex + 1} / {selectedItem.images.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
