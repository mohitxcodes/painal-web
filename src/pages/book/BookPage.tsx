import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBook, FaSearch, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';

const BookPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPage, setSelectedPage] = useState<number | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Sample book pages data - Replace with your actual book pages
    const bookPages = [
        { id: 1, imageUrl: '/book/img/page1.jpeg', title: 'Page 1', description: 'Introduction to Painal Village' },
        { id: 2, imageUrl: '/assets/book/page2.jpg', title: 'Page 2', description: 'History of Painal' },
        // Add more pages as needed
    ];

    // Filter pages based on search term
    const filteredPages = bookPages.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handlePageClick = (pageId: number) => {
        setSelectedPage(pageId);
        setZoomLevel(1); // Reset zoom when opening a new page
    };

    const closePageView = () => {
        setSelectedPage(null);
        setZoomLevel(1);
    };

    const navigatePage = (direction: 'prev' | 'next') => {
        if (selectedPage === null) return;
        const currentIndex = bookPages.findIndex(page => page.id === selectedPage);
        if (direction === 'prev' && currentIndex > 0) {
            setSelectedPage(bookPages[currentIndex - 1].id);
            setZoomLevel(1);
        } else if (direction === 'next' && currentIndex < bookPages.length - 1) {
            setSelectedPage(bookPages[currentIndex + 1].id);
            setZoomLevel(1);
        }
    };

    const handleZoom = (direction: 'in' | 'out') => {
        if (direction === 'in' && zoomLevel < 3) {
            setZoomLevel(prev => prev + 0.25);
        } else if (direction === 'out' && zoomLevel > 0.5) {
            setZoomLevel(prev => prev - 0.25);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-16 md:py-24 bg-white">
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
                    className="space-y-6 sm:space-y-8"
                >
                    {/* Header Section */}
                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-200/80">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {/* Left Column - Title and Description */}
                            <div className="space-y-3 sm:space-y-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
                                >
                                    Village Book
                                    <span className="block text-xs sm:text-sm md:text-base lg:text-lg text-emerald-600 mt-1 sm:mt-2">गांव की पुस्तक</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-xs sm:text-sm md:text-base text-gray-600"
                                >
                                    Explore the history and stories of Painal village through our book.
                                    <span className="block text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-0.5">
                                        पैनाल गांव के इतिहास और कहानियों को हमारी पुस्तक के माध्यम से जानें।
                                    </span>
                                </motion.p>
                            </div>

                            {/* Right Column - Search */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="relative w-full mt-2 md:mt-0">
                                    <input
                                        type="text"
                                        placeholder="Search book pages..."
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 pl-9 sm:pl-10 rounded-lg sm:rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] bg-white text-xs sm:text-sm md:text-base transition-all duration-300 hover:border-emerald-200/80"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <FaSearch className="absolute left-3 top-2.5 sm:top-3 md:top-3.5 text-emerald-600 text-sm sm:text-base md:text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book Pages Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                        {filteredPages.map((page) => (
                            <motion.div
                                key={page.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -2 }}
                                className="bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer border border-gray-200/80 hover:border-emerald-200/80 group"
                                onClick={() => handlePageClick(page.id)}
                            >
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <img
                                        src={page.imageUrl}
                                        alt={page.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                                            <h3 className="text-sm sm:text-base font-semibold text-white truncate">{page.title}</h3>
                                            <p className="text-xs sm:text-sm text-white/90 truncate mt-0.5">{page.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredPages.length === 0 && (
                        <div className="text-center py-6 sm:py-8 md:py-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/80">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200/80">
                                <FaBook className="text-lg sm:text-xl md:text-2xl text-gray-400" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600">No book pages found matching your search.</p>
                            <p className="text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-1">कोई पुस्तक पृष्ठ नहीं मिला।</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Full Page View Modal */}
            {selectedPage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-5xl">
                        <div className="absolute -top-12 right-0 flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
                                <button
                                    onClick={() => handleZoom('out')}
                                    className="p-2 text-white hover:text-emerald-400 transition-colors duration-300 disabled:opacity-50"
                                    disabled={zoomLevel <= 0.5}
                                >
                                    <FaSearchMinus className="text-lg" />
                                </button>
                                <span className="text-white text-sm">{Math.round(zoomLevel * 100)}%</span>
                                <button
                                    onClick={() => handleZoom('in')}
                                    className="p-2 text-white hover:text-emerald-400 transition-colors duration-300 disabled:opacity-50"
                                    disabled={zoomLevel >= 3}
                                >
                                    <FaSearchPlus className="text-lg" />
                                </button>
                            </div>
                            <button
                                onClick={closePageView}
                                className="text-white hover:text-emerald-400 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                        <div className="relative overflow-auto max-h-[80vh]">
                            <div
                                className="transition-transform duration-300"
                                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                            >
                                <img
                                    src={bookPages.find(page => page.id === selectedPage)?.imageUrl}
                                    alt="Book Page"
                                    className="w-full h-auto rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => navigatePage('prev')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300"
                        >
                            <FaChevronLeft className="text-xl" />
                        </button>
                        <button
                            onClick={() => navigatePage('next')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300"
                        >
                            <FaChevronRight className="text-xl" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookPage;
