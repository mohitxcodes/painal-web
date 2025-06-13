import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaExpand, FaTimes, FaFilter } from 'react-icons/fa';
import { useState } from 'react';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; titleHindi: string } | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', name: 'All', hindiName: 'सभी' },
        { id: 'religious', name: 'Religious', hindiName: 'धार्मिक' },
        { id: 'community', name: 'Community', hindiName: 'समुदाय' },
        { id: 'nature', name: 'Nature', hindiName: 'प्रकृति' },
        { id: 'education', name: 'Education', hindiName: 'शिक्षा' }
    ];

    const galleryItems = [
        {
            id: 1,
            title: "Village Temple",
            titleHindi: "गाँव का मंदिर",
            description: "Ancient temple showcasing local architecture",
            descriptionHindi: "स्थानीय वास्तुकला का प्रदर्शन करने वाला प्राचीन मंदिर",
            imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000",
            category: "religious"
        },
        {
            id: 2,
            title: "Community Center",
            titleHindi: "सामुदायिक केंद्र",
            description: "Modern facility for village gatherings",
            descriptionHindi: "गाँव की सभाओं के लिए आधुनिक सुविधा",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 3,
            title: "Local Market",
            titleHindi: "स्थानीय बाजार",
            description: "Vibrant marketplace with local produce",
            descriptionHindi: "स्थानीय उत्पादों के साथ जीवंत बाजार",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 4,
            title: "Village School",
            titleHindi: "गाँव का स्कूल",
            description: "Education center for young minds",
            descriptionHindi: "युवा मन के लिए शिक्षा केंद्र",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "education"
        },
        {
            id: 5,
            title: "Village Park",
            titleHindi: "गाँव का पार्क",
            description: "Peaceful green space for recreation",
            descriptionHindi: "मनोरंजन के लिए शांत हरित स्थान",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "nature"
        },
        {
            id: 6,
            title: "Cultural Center",
            titleHindi: "सांस्कृतिक केंद्र",
            description: "Hub of cultural activities and events",
            descriptionHindi: "सांस्कृतिक गतिविधियों और कार्यक्रमों का केंद्र",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 7,
            title: "Village Pond",
            titleHindi: "गाँव का तालाब",
            description: "Traditional water body for community use",
            descriptionHindi: "समुदाय के उपयोग के लिए पारंपरिक जल निकाय",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "nature"
        },
        {
            id: 8,
            title: "Agriculture Fields",
            titleHindi: "कृषि क्षेत्र",
            description: "Vast fields of crops and farming",
            descriptionHindi: "फसलों और खेती के विशाल खेत",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "nature"
        },
        {
            id: 9,
            title: "Village Road",
            titleHindi: "गाँव की सड़क",
            description: "Main thoroughfare connecting the village",
            descriptionHindi: "गाँव को जोड़ने वाली मुख्य सड़क",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 10,
            title: "Village Well",
            titleHindi: "गाँव का कुआँ",
            description: "Traditional water source",
            descriptionHindi: "पारंपरिक जल स्रोत",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "nature"
        },
        {
            id: 11,
            title: "Village Gate",
            titleHindi: "गाँव का द्वार",
            description: "Historic entrance to the village",
            descriptionHindi: "गाँव का ऐतिहासिक प्रवेश द्वार",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 12,
            title: "Village Square",
            titleHindi: "गाँव का चौक",
            description: "Central gathering place",
            descriptionHindi: "केंद्रीय सभा स्थल",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000",
            category: "community"
        },
        {
            id: 13,
            title: "Village Library",
            titleHindi: "गाँव की पुस्तकालय",
            description: "Knowledge center for villagers",
            descriptionHindi: "ग्रामीणों के लिए ज्ञान केंद्र",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 14,
            title: "Village Clinic",
            titleHindi: "गाँव का क्लिनिक",
            description: "Healthcare facility for the community",
            descriptionHindi: "समुदाय के लिए स्वास्थ्य सुविधा",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 15,
            title: "Village Garden",
            titleHindi: "गाँव का बगीचा",
            description: "Community garden and green space",
            descriptionHindi: "सामुदायिक बगीचा और हरित स्थान",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        }
    ];

    const filteredItems = galleryItems.filter(item => {
        return activeFilter === 'all' || item.category === activeFilter;
    });

    const handleImageClick = (item: typeof galleryItems[0]) => {
        setSelectedImage({ url: item.imageUrl, title: item.title, titleHindi: item.titleHindi });
        setIsZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (
        <section className="relative w-full py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4"
                    >
                        Explore Our Village
                        <span className="block text-sm sm:text-lg md:text-xl text-emerald-600 mt-1 sm:mt-2">हमारे गाँव की गैलरी का अन्वेषण करें</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover the beauty and culture of Painal through our curated collection of photographs.
                        <span className="block text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-0.5 sm:mt-1">
                            पैनाल की सुंदरता और संस्कृति को हमारे गाँव के जीवन, परंपराओं और सामुदायिक स्थानों की तस्वीरों के माध्यम से देखें।
                        </span>
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="max-w-4xl mx-auto mb-4 sm:mb-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-sm">
                        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeFilter === category.id
                                        ? 'bg-emerald-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {category.name}
                                    <span className="text-[10px] sm:text-xs opacity-80 ml-1">({category.hindiName})</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                    <div className="h-full overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-3 md:gap-4 p-1.5 sm:p-3 md:p-4">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${index < 6 ? 'ring-1 sm:ring-2 ring-emerald-500' : ''}`}
                                    onClick={() => handleImageClick(item)}
                                >
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 p-1.5 sm:p-3 md:p-4">
                                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5 sm:mb-1">
                                                    {item.title}
                                                    <span className="block text-[10px] sm:text-xs md:text-sm text-emerald-200">{item.titleHindi}</span>
                                                </h3>
                                                <p className="text-[10px] sm:text-xs md:text-sm text-gray-200 line-clamp-2">{item.description}</p>
                                                <div className="absolute top-1.5 sm:top-3 md:top-4 right-1.5 sm:right-3 md:right-4 p-1 sm:p-1.5 md:p-2 bg-white/20 rounded-full backdrop-blur-sm shadow-lg">
                                                    <FaExpand className="text-white text-sm sm:text-base md:text-lg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* No Results Message */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-8 sm:py-12"
                    >
                        <p className="text-xs sm:text-sm text-gray-600">No images found in this category.</p>
                        <p className="text-[10px] sm:text-xs text-emerald-600">इस श्रेणी में कोई छवि नहीं मिली।</p>
                    </motion.div>
                )}
            </div>

            {/* Image Zoom Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isZoomed ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                        onClick={handleCloseZoom}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: isZoomed ? 1 : 0.9, opacity: isZoomed ? 1 : 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.title}
                                className="w-full h-[80vh] object-contain rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                                <p className="text-lg text-emerald-200">{selectedImage.titleHindi}</p>
                            </div>
                            <button
                                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                                onClick={handleCloseZoom}
                            >
                                <FaTimes className="text-white text-xl" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Update custom scrollbar styles
const styles = `
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}
@media (min-width: 640px) {
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
}
@media (min-width: 1024px) {
    .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
    }
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 4px;
    border: 2px solid white;
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

export default GallerySection;
