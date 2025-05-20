import { motion } from 'framer-motion';

const AboutSection = () => {
    const stats = [
        { label: 'Total Population', value: '9,618' },
        { label: 'Number of Houses', value: '1,601' },
        { label: 'Female Population', value: '47.0%' },
        { label: 'Literacy Rate', value: '60.3%' },
    ];

    const nearbyPlaces = [
        {
            category: 'Cities', places: [
                { name: 'Maner', distance: '12 KM' },
                { name: 'Patna', distance: '22 KM' },
                { name: 'Dighwara', distance: '22 KM' },
                { name: 'Masaurhi', distance: '28 KM' },
            ]
        },
        {
            category: 'Tourist Places', places: [
                { name: 'Golghar', distance: '22 KM' },
                { name: 'Takht Sri Patna Sahib', distance: '24 KM' },
                { name: 'Agam Kuan', distance: '27 KM' },
                { name: 'Vaishali', distance: '55 KM' },
            ]
        },
    ];

    return (
        <section className="relative min-h-[90vh] w-full bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
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
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Location & Overview</h3>
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
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Demographics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-indigo-50/80 backdrop-blur-sm rounded-lg">
                                    <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nearby Places */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {nearbyPlaces.map((category, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                                <div className="space-y-3">
                                    {category.places.map((place, placeIndex) => (
                                        <div key={placeIndex} className="flex justify-between items-center text-gray-600">
                                            <span>{place.name}</span>
                                            <span className="text-indigo-600 font-medium">{place.distance}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Transportation */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Railway Stations</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>Sadisopur Railway Station (3.9 KM)</li>
                                    <li>Neora Railway Station (4.4 KM)</li>
                                    <li>Bihta Railway Station (8 KM)</li>
                                    <li>Danapur Railway Station (10 KM)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800 mb-2">Airports</h4>
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
