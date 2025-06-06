import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUsers, FaSearch, FaHome, FaUserFriends, FaHeart, FaShare, FaChild, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';
import { useNavigate } from 'react-router-dom';
import { IVillageMember } from '../../interface/IVillageMember';

const FamilyTree = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Sample family data with dummy family members
    const families = [
        {
            id: 1,
            name: "Mohit's Family",
            hindiName: "मोहित का परिवार",
            head: "Ram Kumar Singh",
            headHindi: "राम कुमार सिंह",
            children: 4,
            birthYear: 1965,
            occupation: "Farmer",
            occupationHindi: "किसान",
            familyMembers: [
                {
                    id: 101,
                    name: "Ram Kumar Singh",
                    hindiName: "राम कुमार सिंह",
                    birthYear: 1965,
                    children: [102, 103, 104, 105],
                    spouse: "Lakshmi Devi",
                    spouseHindiName: "लक्ष्मी देवी",
                    occupation: "Farmer",
                    occupationHindi: "किसान",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 102,
                    name: "Rahul Singh",
                    hindiName: "राहुल सिंह",
                    birthYear: 1990,
                    parentId: 101,
                    children: [],
                    spouse: "Priya Singh",
                    spouseHindiName: "प्रिया सिंह",
                    occupation: "Engineer",
                    occupationHindi: "इंजीनियर",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 103,
                    name: "Rohit Singh",
                    hindiName: "रोहित सिंह",
                    birthYear: 1992,
                    parentId: 101,
                    children: [],
                    spouse: "Neha Singh",
                    spouseHindiName: "नेहा सिंह",
                    occupation: "Doctor",
                    occupationHindi: "डॉक्टर",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 104,
                    name: "Riya Singh",
                    hindiName: "रिया सिंह",
                    birthYear: 1995,
                    parentId: 101,
                    children: [],
                    spouse: "Amit Kumar",
                    spouseHindiName: "अमित कुमार",
                    occupation: "Teacher",
                    occupationHindi: "शिक्षक",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 105,
                    name: "Ritika Singh",
                    hindiName: "रितिका सिंह",
                    birthYear: 1998,
                    parentId: 101,
                    children: [],
                    spouse: "Vikram Singh",
                    spouseHindiName: "विक्रम सिंह",
                    occupation: "Student",
                    occupationHindi: "छात्र",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                }
            ] as IVillageMember[]
        },
        {
            id: 2,
            name: "Ravi's Family",
            hindiName: "मोहित का परिवार",
            head: "Ram Kumar Singh",
            headHindi: "राम कुमार सिंह",
            children: 4,
            birthYear: 1965,
            occupation: "Farmer",
            occupationHindi: "किसान",
            familyMembers: [
                {
                    id: 101,
                    name: "ravi kumar Kumar Singh",
                    hindiName: "राम कुमार सिंह",
                    birthYear: 1965,
                    children: [102, 103, 104, 105],
                    spouse: "Lakshmi Devi",
                    spouseHindiName: "लक्ष्मी देवी",
                    occupation: "Farmer",
                    occupationHindi: "किसान",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 102,
                    name: "Rahul Singh",
                    hindiName: "राहुल सिंह",
                    birthYear: 1990,
                    parentId: 101,
                    children: [],
                    spouse: "Priya Singh",
                    spouseHindiName: "प्रिया सिंह",
                    occupation: "Engineer",
                    occupationHindi: "इंजीनियर",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 103,
                    name: "Rohit Singh",
                    hindiName: "रोहित सिंह",
                    birthYear: 1992,
                    parentId: 101,
                    children: [],
                    spouse: "Neha Singh",
                    spouseHindiName: "नेहा सिंह",
                    occupation: "Doctor",
                    occupationHindi: "डॉक्टर",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 104,
                    name: "Riya Singh",
                    hindiName: "रिया सिंह",
                    birthYear: 1995,
                    parentId: 101,
                    children: [],
                    spouse: "Amit Kumar",
                    spouseHindiName: "अमित कुमार",
                    occupation: "Teacher",
                    occupationHindi: "शिक्षक",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                },
                {
                    id: 105,
                    name: "Ritika Singh",
                    hindiName: "रितिका सिंह",
                    birthYear: 1998,
                    parentId: 101,
                    children: [],
                    spouse: "Vikram Singh",
                    spouseHindiName: "विक्रम सिंह",
                    occupation: "Student",
                    occupationHindi: "छात्र",
                    profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
                }
            ] as IVillageMember[]
        },
    ];

    // Filter families based on search term
    const filteredFamilies = families.filter(family =>
        !searchTerm ||
        family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.head.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFamilyClick = (family: typeof families[0]) => {
        // Store family data in localStorage
        localStorage.setItem('selectedFamilyData', JSON.stringify(family.familyMembers));
        localStorage.setItem('selectedFamilyTitle', JSON.stringify({
            english: family.name,
            hindi: family.hindiName
        }));

        // Navigate to ancestry page
        navigate('/ancestry');
    };

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
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                            Village Families
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-emerald-600 mb-8">
                            गांव के परिवार
                        </h2>

                        {/* Quick Navigation */}
                        <div className="flex justify-center space-x-4 mb-8">
                            <motion.a
                                href="/"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                whileHover={{ y: -2 }}
                            >
                                <FaHome className="text-emerald-600" />
                                <span>Home</span>
                            </motion.a>
                            <motion.a
                                href="/ancestry"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                whileHover={{ y: -2 }}
                            >
                                <FaUserFriends className="text-emerald-600" />
                                <span>Ancestry</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search families..."
                                className="w-full px-4 py-3 pl-10 rounded-xl border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm bg-white/90 backdrop-blur-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-3.5 text-emerald-600" />
                        </div>
                    </div>

                    {/* Family Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredFamilies.map((family) => (
                            <motion.div
                                key={family.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -2 }}
                                className="bg-gradient-to-br from-white to-green-50/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200/50 hover:border-green-300/50"
                                onClick={() => handleFamilyClick(family)}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Family Avatar */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-200/50 flex-shrink-0">
                                        <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                                            <FaUsers className="text-2xl text-green-600" />
                                        </div>
                                    </div>

                                    {/* Family Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">{family.name}</h3>
                                                <p className="text-sm text-green-600">{family.hindiName}</p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button
                                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Add favorite functionality
                                                    }}
                                                >
                                                    <FaHeart />
                                                </button>
                                                <button
                                                    className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        // Add share functionality
                                                    }}
                                                >
                                                    <FaShare />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-2 flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <FaUsers className="text-green-600" />
                                                <span className="text-sm text-gray-600">{family.head}</span>
                                                <span className="text-xs text-green-600">({family.headHindi})</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaChild className="text-green-600" />
                                                <span className="text-sm text-gray-600">{family.children} Children</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredFamilies.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No families found matching your search.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default FamilyTree;