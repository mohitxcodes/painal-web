import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaCamera, FaImages, FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const GallerySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; titleHindi: string } | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const galleryItems = [
        {
            id: 1,
            title: "Village Temple",
            titleHindi: "गाँव का मंदिर",
            description: "Ancient temple showcasing local architecture",
            descriptionHindi: "स्थानीय वास्तुकला का प्रदर्शन करने वाला प्राचीन मंदिर",
            imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000"
        },
        {
            id: 2,
            title: "Community Center",
            titleHindi: "सामुदायिक केंद्र",
            description: "Modern facility for village gatherings",
            descriptionHindi: "गाँव की सभाओं के लिए आधुनिक सुविधा",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 3,
            title: "Local Market",
            titleHindi: "स्थानीय बाजार",
            description: "Vibrant marketplace with local produce",
            descriptionHindi: "स्थानीय उत्पादों के साथ जीवंत बाजार",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 4,
            title: "Village School",
            titleHindi: "गाँव का स्कूल",
            description: "Education center for young minds",
            descriptionHindi: "युवा मन के लिए शिक्षा केंद्र",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 5,
            title: "Village Park",
            titleHindi: "गाँव का पार्क",
            description: "Peaceful green space for recreation",
            descriptionHindi: "मनोरंजन के लिए शांत हरित स्थान",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        },
        {
            id: 6,
            title: "Cultural Center",
            titleHindi: "सांस्कृतिक केंद्र",
            description: "Hub of cultural activities and events",
            descriptionHindi: "सांस्कृतिक गतिविधियों और कार्यक्रमों का केंद्र",
            imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
        }
    ];

    // Create three columns with different items
    const column1 = [...galleryItems.slice(0, 2), ...galleryItems.slice(0, 2)];
    const column2 = [...galleryItems.slice(2, 4), ...galleryItems.slice(2, 4)];
    const column3 = [...galleryItems.slice(4, 6), ...galleryItems.slice(4, 6)];

    const handleImageClick = (item: typeof galleryItems[0]) => {
        setSelectedImage({ url: item.imageUrl, title: item.title, titleHindi: item.titleHindi });
        setIsZoomed(true);
    };

    const handleCloseZoom = () => {
        setIsZoomed(false);
        setTimeout(() => setSelectedImage(null), 300);
    };

    return (
        <section className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full text-sm text-emerald-700 font-medium border border-emerald-200 mb-4"
                    >
                        <FaCamera className="text-emerald-600" />
                        <span>Photo Gallery</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
                    >
                        Village Gallery
                        <span className="block text-lg sm:text-xl text-emerald-600 mt-2">गाँव की गैलरी</span>
                    </motion.h2>
                </div>

                {/* Gallery Grid with Infinite Scroll */}
                <div className="relative h-[600px] md:h-[800px] overflow-hidden">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

                    {/* Gallery Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                        {/* Column 1 - Moving Up */}
                        <motion.div
                            className="space-y-6 h-full overflow-hidden"
                            animate={{
                                y: [0, -400],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {column1.map((item, index) => (
                                <motion.div
                                    key={`col1-${index}`}
                                    className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-[280px] cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => handleImageClick(item)}
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                                {item.title}
                                                <span className="block text-sm text-emerald-200">{item.titleHindi}</span>
                                            </h3>
                                            <div className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                                <FaExpand className="text-white text-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Column 2 - Moving Down */}
                        <motion.div
                            className="space-y-6 h-full overflow-hidden"
                            animate={{
                                y: [-400, 0],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {column2.map((item, index) => (
                                <motion.div
                                    key={`col2-${index}`}
                                    className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-[280px] cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => handleImageClick(item)}
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                                {item.title}
                                                <span className="block text-sm text-emerald-200">{item.titleHindi}</span>
                                            </h3>
                                            <div className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                                <FaExpand className="text-white text-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Column 3 - Moving Up */}
                        <motion.div
                            className="space-y-6 h-full overflow-hidden"
                            animate={{
                                y: [0, -400],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {column3.map((item, index) => (
                                <motion.div
                                    key={`col3-${index}`}
                                    className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all h-[280px] cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => handleImageClick(item)}
                                >
                                    <div className="absolute inset-0">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                                                {item.title}
                                                <span className="block text-sm text-emerald-200">{item.titleHindi}</span>
                                            </h3>
                                            <div className="absolute top-4 right-4 p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                                <FaExpand className="text-white text-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <motion.button
                        className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all text-lg shadow-sm hover:shadow-md flex items-center justify-center mx-auto space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaImages className="text-emerald-100" />
                        <span>View All Photos</span>
                        <span className="text-emerald-100">(सभी तस्वीरें देखें)</span>
                    </motion.button>
                </motion.div>
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

export default GallerySection;
