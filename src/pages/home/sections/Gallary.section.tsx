import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHeart, FaShare, FaDownload, FaCamera, FaSearch, FaTimes, FaSpinner } from 'react-icons/fa';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const galleryImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Village Life',
            hindiTitle: 'ग्रामीण जीवन',
            description: 'Traditional village homes and peaceful surroundings',
            hindiDescription: 'पारंपरिक ग्रामीण घर और शांत वातावरण',
            aspectRatio: 'aspect-[4/5]',
            category: 'Lifestyle',
            featured: true,
            likes: 245,
            views: 1200,
            location: 'Painal Village',
            hindiLocation: 'पैनल गांव',
            date: '2024',
            tags: ['village', 'traditional', 'architecture']
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Agriculture',
            hindiTitle: 'कृषि',
            description: 'Rich agricultural fields and farming traditions',
            hindiDescription: 'समृद्ध कृषि क्षेत्र और खेती की परंपराएं',
            aspectRatio: 'aspect-[4/5]',
            category: 'Agriculture',
            featured: false,
            likes: 189,
            views: 950,
            location: 'Painal Fields',
            hindiLocation: 'पैनल खेत',
            date: '2024',
            tags: ['farming', 'agriculture', 'fields']
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Community',
            hindiTitle: 'समुदाय',
            description: 'Vibrant community gatherings and cultural events',
            hindiDescription: 'जीवंत सामुदायिक सभाएं और सांस्कृतिक कार्यक्रम',
            aspectRatio: 'aspect-square',
            category: 'Community',
            featured: true,
            likes: 312,
            views: 1500,
            location: 'Village Center',
            hindiLocation: 'गांव का केंद्र',
            date: '2024',
            tags: ['community', 'gathering', 'culture']
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Festivals',
            hindiTitle: 'त्योहार',
            description: 'Colorful celebrations and cultural heritage',
            hindiDescription: 'रंगीन उत्सव और सांस्कृतिक विरासत',
            aspectRatio: 'aspect-[4/5]',
            category: 'Culture',
            featured: false,
            likes: 278,
            views: 1300,
            location: 'Main Square',
            hindiLocation: 'मुख्य चौक',
            date: '2024',
            tags: ['festival', 'celebration', 'tradition']
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Nature',
            hindiTitle: 'प्रकृति',
            description: 'Beautiful landscapes and natural beauty',
            hindiDescription: 'सुंदर परिदृश्य और प्राकृतिक सौंदर्य',
            aspectRatio: 'aspect-[3/2]',
            category: 'Nature',
            featured: true,
            likes: 423,
            views: 1800,
            location: 'Village Outskirts',
            hindiLocation: 'गांव की सीमा',
            date: '2024',
            tags: ['nature', 'landscape', 'beauty']
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Village Market',
            hindiTitle: 'ग्रामीण बाजार',
            description: 'Local market and daily commerce',
            hindiDescription: 'स्थानीय बाजार और दैनिक व्यापार',
            aspectRatio: 'aspect-[5/4]',
            category: 'Lifestyle',
            featured: false,
            likes: 156,
            views: 890,
            location: 'Market Square',
            hindiLocation: 'बाजार चौक',
            date: '2024',
            tags: ['market', 'commerce', 'local']
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Traditional Crafts',
            hindiTitle: 'पारंपरिक शिल्प',
            description: 'Artisans and their crafts',
            hindiDescription: 'कारीगर और उनके शिल्प',
            aspectRatio: 'aspect-[2/3]',
            category: 'Culture',
            featured: true,
            likes: 289,
            views: 1400,
            location: 'Crafts Center',
            hindiLocation: 'शिल्प केंद्र',
            date: '2024',
            tags: ['crafts', 'artisans', 'tradition']
        },
        {
            id: 9,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Village School',
            hindiTitle: 'ग्रामीण विद्यालय',
            description: 'Education and learning',
            hindiDescription: 'शिक्षा और सीखना',
            aspectRatio: 'aspect-[3/4]',
            category: 'Education',
            featured: false,
            likes: 167,
            views: 920,
            location: 'School Campus',
            hindiLocation: 'विद्यालय परिसर',
            date: '2024',
            tags: ['education', 'school', 'learning']
        },
        {
            id: 10,
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Seasonal Harvest',
            hindiTitle: 'मौसमी फसल',
            description: 'Bountiful harvest season celebrations',
            hindiDescription: 'समृद्ध फसल के मौसम का उत्सव',
            aspectRatio: 'aspect-[4/5]',
            category: 'Agriculture',
            featured: true,
            likes: 345,
            views: 1600,
            location: 'Harvest Fields',
            hindiLocation: 'फसल के खेत',
            date: '2024',
            tags: ['harvest', 'seasonal', 'agriculture']
        },
    ];

    const categories = [
        { name: 'All', icon: '🏠', hindiName: 'सभी' },
        { name: 'Lifestyle', icon: '👨‍👩‍👧‍👦', hindiName: 'जीवन शैली' },
        { name: 'Agriculture', icon: '🌾', hindiName: 'कृषि' },
        { name: 'Community', icon: '🤝', hindiName: 'समुदाय' },
        { name: 'Culture', icon: '🎭', hindiName: 'संस्कृति' },
        { name: 'Nature', icon: '🌿', hindiName: 'प्रकृति' },
        { name: 'Education', icon: '📚', hindiName: 'शिक्षा' }
    ];

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    useEffect(() => {
        // Simulate loading images
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = (id: number) => {
        setSelectedImage(id);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Gallery</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <section className="relative min-h-screen w-full overflow-hidden py-16">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-100 z-0"></div>

            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Village Gallery
                        <span className="block text-2xl md:text-3xl text-green-600 mt-2">ग्रामीण गैलरी</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Explore the beauty and charm of Painal village through our curated collection of photographs
                        <span className="block text-base text-green-600 mt-2">
                            पैनल गांव की सुंदरता और आकर्षण को हमारे चित्रों के संग्रह के माध्यम से देखें
                        </span>
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-6 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-sm
                                    flex items-center space-x-2
                                    ${activeCategory === category.name
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white/80 text-gray-700 hover:bg-green-50 hover:text-green-700'}`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.name}</span>
                                <span className="text-sm">{category.hindiName}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <FaSpinner className="w-8 h-8 text-green-600 animate-spin" />
                    </div>
                )}

                {/* Gallery Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative group break-inside-avoid rounded-2xl overflow-hidden shadow-lg
                                    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                                onClick={() => handleImageClick(image.id)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                <div className={`${image.aspectRatio} w-full`}>
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700
                                        transform transition-transform duration-300 group-hover:scale-105">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Featured Badge */}
                                {image.featured && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="px-4 py-1.5 bg-green-500/90 backdrop-blur-sm rounded-full text-sm font-medium text-white
                                            transform transition-transform duration-300 group-hover:scale-105">
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-0">
                                            {image.title}
                                            <span className="block text-lg text-green-200">{image.hindiTitle}</span>
                                        </h3>
                                        <p className="text-base opacity-90 mb-2 transform transition-transform duration-300 group-hover:translate-y-0">
                                            {image.description}
                                        </p>
                                        <p className="text-sm opacity-80 mb-4 transform transition-transform duration-300 group-hover:translate-y-0 text-green-200">
                                            {image.hindiDescription}
                                        </p>

                                        {/* Location */}
                                        <div className="flex items-center space-x-2 mb-4 text-sm">
                                            <span className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                {image.location}
                                                <span className="ml-2 text-green-200">{image.hindiLocation}</span>
                                            </span>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center space-x-4 mb-4 text-sm">
                                            <span className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                <FaHeart className="mr-1 text-red-400" /> {image.likes}
                                            </span>
                                            <span className="flex items-center bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                <FaCamera className="mr-1 text-blue-400" /> {image.views}
                                            </span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center space-x-3">
                                            <button className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors transform hover:scale-110">
                                                <FaHeart className="text-white text-lg" />
                                            </button>
                                            <button className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors transform hover:scale-110">
                                                <FaShare className="text-white text-lg" />
                                            </button>
                                            <button className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors transform hover:scale-110">
                                                <FaDownload className="text-white text-lg" />
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Quick View Button */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <button className="p-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white transition-colors transform hover:scale-110">
                                        <FaSearch className="text-xl" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            onClick={handleCloseModal}
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="relative max-w-5xl w-full"
                                onClick={e => e.stopPropagation()}
                            >
                                <div className="relative">
                                    <img
                                        src={galleryImages.find(img => img.id === selectedImage)?.url}
                                        alt="Selected"
                                        className="w-full h-auto rounded-lg"
                                    />

                                    {/* Image Details */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <h3 className="text-2xl font-bold mb-2">
                                            {galleryImages.find(img => img.id === selectedImage)?.title}
                                        </h3>
                                        <p className="text-base opacity-90">
                                            {galleryImages.find(img => img.id === selectedImage)?.description}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <button
                                            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                            onClick={() => {/* Handle download */ }}
                                        >
                                            <FaDownload className="text-white text-lg" />
                                        </button>
                                        <button
                                            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                            onClick={() => {/* Handle share */ }}
                                        >
                                            <FaShare className="text-white text-lg" />
                                        </button>
                                        <button
                                            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                            onClick={handleCloseModal}
                                        >
                                            <FaTimes className="text-white text-lg" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;
