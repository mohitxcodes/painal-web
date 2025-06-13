import { motion, } from 'framer-motion';
import { useState } from 'react';
import { FaLandmark, FaSchool, FaInfoCircle } from 'react-icons/fa';
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
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                            Gallery
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-emerald-600 mb-8">
                            गैलरी
                        </h2>
                    </div>

                    {/* Modern Tab Bar */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-2">
                        <div className="flex flex-wrap gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-green-50'
                                        }`}
                                >
                                    <tab.icon className="text-lg" />
                                    <span className="font-medium">{tab.label}</span>
                                    <span className="text-sm opacity-80">{tab.hindiLabel}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                        {/* Image Gallery */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-4">
                            <div className="grid grid-cols-1 gap-4">
                                {galleryData[activeTab]?.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="relative group cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                            className="w-full h-48 object-cover rounded-lg shadow-sm"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                                <h3 className="font-semibold">{item.title}</h3>
                                                <p className="text-sm opacity-90">{item.hindiTitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Content Panel */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-green-200/50 p-6">
                            {selectedItem ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
                                        <p className="text-lg text-green-600">{selectedItem.hindiTitle}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                                                <FaInfoCircle className="text-green-600" />
                                                Description
                                            </h4>
                                            <p className="text-gray-700 mt-1">{selectedItem.description}</p>
                                            <p className="text-green-600 mt-1">{selectedItem.hindiDescription}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-gray-500">Location</h4>
                                            <p className="text-gray-700">{selectedItem.location}</p>
                                            <p className="text-green-600">{selectedItem.hindiLocation}</p>
                                        </div>

                                        {selectedItem.yearEstablished && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">Year Established</h4>
                                                <p className="text-gray-700">{selectedItem.yearEstablished}</p>
                                            </div>
                                        )}

                                        {selectedItem.significance && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">Significance</h4>
                                                <p className="text-gray-700">{selectedItem.significance}</p>
                                                <p className="text-green-600">{selectedItem.hindiSignificance}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        {selectedItem.images.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative aspect-square"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${selectedItem.title} - Image ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-lg shadow-sm"
                                                />
                                            </motion.div>
                                        ))}
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
        </div>
    );
};

export default GalleryPage;
