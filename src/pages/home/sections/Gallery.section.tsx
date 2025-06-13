import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes, } from 'react-icons/fa';
import { useState } from 'react';
import { galleryItems } from '../../../data/HomeData'

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
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 sm:p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${activeFilter === category.id
                                        ? 'bg-emerald-600 text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)] border border-emerald-500/20'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent hover:border-emerald-200/50'
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
                <div className="relative h-[400px] sm:h-[600px] md:h-[700px] lg:h-[800px] bg-white/80 backdrop-blur-sm rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                    <div className="h-full overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-3 md:gap-4 p-1.5 sm:p-3 md:p-4">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer border border-gray-100 hover:border-emerald-500/50 ${index < 6 ? 'ring-1 sm:ring-2 ring-emerald-50' : ''}`}
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
                                                <div className="absolute top-1.5 sm:top-3 md:top-4 right-1.5 sm:right-3 md:right-4 p-1 sm:p-1.5 md:p-2 bg-white/20 rounded-full backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-white/30">
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
                                className="w-full h-[80vh] object-contain rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-gray-100"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                                <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                                <p className="text-lg text-emerald-200">{selectedImage.titleHindi}</p>
                            </div>
                            <button
                                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.1)] border border-white/30"
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
