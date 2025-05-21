import { motion } from 'framer-motion';
import { FaUsers, FaHome, FaMapMarkerAlt, FaSchool, FaLanguage, FaLandmark, FaRoad, FaTrain, FaPlane } from 'react-icons/fa';

const AboutSection = () => {
    const stats = [
        { icon: FaUsers, label: 'Total Population', value: '9,618', color: 'indigo' },
        { icon: FaHome, label: 'Number of Houses', value: '1,601', color: 'emerald' },
        { icon: FaUsers, label: 'Female Population', value: '47.0%', color: 'rose' },
        { icon: FaSchool, label: 'Literacy Rate', value: '60.3%', color: 'amber' },
        { icon: FaUsers, label: 'Scheduled Tribes', value: '0.2%', color: 'violet' },
        { icon: FaUsers, label: 'Scheduled Caste', value: '15.3%', color: 'blue' },
    ];

    const nearbyPlaces = [
        {
            category: 'Cities',
            icon: FaLandmark,
            places: [
                { name: 'Maner', distance: '12 KM' },
                { name: 'Patna', distance: '22 KM' },
                { name: 'Dighwara', distance: '22 KM' },
                { name: 'Masaurhi', distance: '28 KM' },
            ]
        },
        {
            category: 'Tourist Places',
            icon: FaLandmark,
            places: [
                { name: 'Golghar', distance: '22 KM' },
                { name: 'Takht Sri Patna Sahib', distance: '24 KM' },
                { name: 'Agam Kuan', distance: '27 KM' },
                { name: 'Vaishali', distance: '55 KM' },
            ]
        },
    ];

    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-indigo-100 z-0"></div>

            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern-bg.png')] bg-repeat z-0"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-400 opacity-10 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-400 opacity-15 blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                        About Painal Village
                    </h2>

                    {/* Location Info */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-600" />
                            Location & Overview
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Painal is a vibrant village located in Bihta Block of Patna District, Bihar.
                            Situated 21 KM west of Patna and 9 KM from Bihta, it's a significant part of
                            the Patna Division. The village is positioned at the border of Patna and
                            Bhojpur districts, with an elevation of 62 meters above sea level.
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
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <FaUsers className="text-green-600" />
                            Demographics
                        </h3>
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    <category.icon className="text-green-600" />
                                    {category.category}
                                </h3>
                                <div className="space-y-3">
                                    {category.places.map((place, placeIndex) => (
                                        <div key={placeIndex} className="flex justify-between items-center text-gray-600">
                                            <span>{place.name}</span>
                                            <span className="text-green-600 font-medium">{place.distance}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transportation */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <FaRoad className="text-green-600" />
                            Transportation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                                    <FaTrain className="text-green-600" />
                                    Railway Stations
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
