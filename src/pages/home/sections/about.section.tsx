import { motion } from 'framer-motion';
import { FaUsers, FaHome, FaMapMarkerAlt, FaSchool, FaLandmark, FaRoad, FaTrain, FaPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { AnimatedBackground } from '../../../components/common/AnimatedBackground';
const AboutSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Village Life',
            description: 'Traditional village homes and peaceful surroundings'
        },
        {
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Agriculture',
            description: 'Rich agricultural fields and farming traditions'
        },
        {
            url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000',
            title: 'Community',
            description: 'Vibrant community gatherings and cultural events'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

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

    const nearbyPlaces = [
        {
            category: 'Cities',
            hindiCategory: 'शहर',
            icon: FaLandmark,
            places: [
                { name: 'Maner', hindiName: 'मनेर', distance: '12 KM' },
                { name: 'Patna', hindiName: 'पटना', distance: '22 KM' },
                { name: 'Dighwara', hindiName: 'दिघवारा', distance: '22 KM' },
                { name: 'Masaurhi', hindiName: 'मसौढ़ी', distance: '28 KM' },
            ]
        },
        {
            category: 'Tourist Places',
            hindiCategory: 'पर्यटन स्थल',
            icon: FaLandmark,
            places: [
                { name: 'Golghar', hindiName: 'गोलघर', distance: '22 KM' },
                { name: 'Takht Sri Patna Sahib', hindiName: 'तख्त श्री पटना साहिब', distance: '24 KM' },
                { name: 'Agam Kuan', hindiName: 'अगम कुआं', distance: '27 KM' },
                { name: 'Vaishali', hindiName: 'वैशाली', distance: '55 KM' },
            ]
        },
    ];

    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 via-blue-50 to-indigo-100 z-0"></div>

            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            <AnimatedBackground />

            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-0"></div>

            <div className="w-full px-4 container mx-auto sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-center">
                        About Painal Village
                    </h2>
                    <h3 className="text-xl md:text-2xl text-green-600 mb-8 text-center">
                        पैनल गांव के बारे में
                    </h3>

                    {/* Image Carousel */}
                    <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-xl">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: currentImageIndex === index ? 1 : 0,
                                    scale: currentImageIndex === index ? 1 : 1.1
                                }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                                        <p className="text-lg">{image.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 right-4 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                                        }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Location Info */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-600" />
                            Location & Overview
                        </h3>
                        <h4 className="text-lg text-green-600 mb-4 flex items-center gap-2">
                            स्थान और अवलोकन
                        </h4>
                        <p className="text-gray-600 mb-4">
                            Painal is a vibrant village located in Bihta Block of Patna District, Bihar.
                            Situated 21 KM west of Patna and 9 KM from Bihta, it's a significant part of
                            the Patna Division. The village is positioned at the border of Patna and
                            Bhojpur districts, with an elevation of 62 meters above sea level.
                        </p>
                        <p className="text-green-600 mb-4">
                            पैनल बिहार के पटना जिले के बिहटा ब्लॉक में स्थित एक जीवंत गांव है।
                            पटना से 21 किमी पश्चिम और बिहटा से 9 किमी की दूरी पर स्थित, यह पटना डिवीजन का एक महत्वपूर्ण हिस्सा है।
                            गांव पटना और भोजपुर जिलों की सीमा पर स्थित है, समुद्र तल से 62 मीटर की ऊंचाई पर।
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                                <p><span className="font-medium">Pin Code:</span> 800111</p>
                                <p><span className="font-medium">Post Office:</span> Sadisopur</p>
                                <p><span className="font-medium">Languages:</span> Hindi, Magahi, Maithili, Bhojpuri, English, Angika</p>
                            </div>
                            <div>
                                <p><span className="font-medium">Assembly Constituency:</span> Maner</p>
                                <p><span className="font-medium">Lok Sabha Constituency:</span> Pataliputra</p>
                                <p><span className="font-medium">Time Zone:</span> IST (UTC+5:30)</p>
                            </div>
                        </div>
                    </div>

                    {/* Demographics */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FaUsers className="text-green-600" />
                            Demographics
                        </h3>
                        <h4 className="text-lg text-green-600 mb-4 flex items-center gap-2">
                            जनसांख्यिकी
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <stat.icon className={`text-xl text-${stat.color}-600`} />
                                    </div>
                                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                                    <p className="text-xs text-green-600 mt-1">{stat.hindiLabel}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Nearby Places */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {nearbyPlaces.map((category, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <category.icon className="text-green-600" />
                                    {category.category}
                                </h3>
                                <h4 className="text-lg text-green-600 mb-4">
                                    {category.hindiCategory}
                                </h4>
                                <div className="space-y-3">
                                    {category.places.map((place, placeIndex) => (
                                        <div key={placeIndex} className="flex justify-between items-center text-gray-600">
                                            <div className="flex flex-col">
                                                <span>{place.name}</span>
                                                <span className="text-sm text-green-600">{place.hindiName}</span>
                                            </div>
                                            <span className="text-green-600 font-medium">{place.distance}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transportation */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FaRoad className="text-green-600" />
                            Transportation
                        </h3>
                        <h4 className="text-lg text-green-600 mb-4">
                            परिवहन
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                                    <FaTrain className="text-green-600" />
                                    Railway Stations
                                    <span className="text-sm text-green-600">रेलवे स्टेशन</span>
                                </h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Sadisopur Railway Station (3.9 KM)</li>
                                    <li>Neora Railway Station (4.4 KM)</li>
                                    <li>Bihta Railway Station (8 KM)</li>
                                    <li>Danapur Railway Station (10 KM)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                                    <FaPlane className="text-green-600" />
                                    Airports
                                    <span className="text-sm text-green-600">हवाई अड्डे</span>
                                </h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Patna Airport (16 KM)</li>
                                    <li>Gaya Airport (102 KM)</li>
                                    <li>Gorakhpur Airport (223 KM)</li>
                                    <li>Varanasi Airport (236 KM)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
