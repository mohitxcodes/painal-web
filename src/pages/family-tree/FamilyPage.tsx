import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUsers, FaSearch, FaHome, FaUserFriends, FaHeart, FaShare, FaChild, FaUser, FaUserPlus, } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground.tsx';
import { useNavigate } from 'react-router-dom';
import { families } from '../../data/FamilyMemberData.ts'


const FamilyTree = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Filter families based on search term
    const filteredFamilies = families.filter(family => {
        if (!searchTerm) return true;
        const familyNameMatch = family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            family.head.toLowerCase().includes(searchTerm.toLowerCase());
        const familyMemberMatch = family.familyMembers.some(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return familyNameMatch || familyMemberMatch;
    });

    const handleFamilyClick = (family: typeof families[0]) => {
        localStorage.setItem('selectedFamilyData', JSON.stringify(family.familyMembers));
        localStorage.setItem('selectedFamilyTitle', JSON.stringify({
            english: family.name,
        }));
        if (searchTerm) {
            localStorage.setItem('ancestrySearchTerm', searchTerm);
        }
        navigate('/ancestry');
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
                    {/* Header Section with Stats */}
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
                                    Village Families
                                    <span className="block text-xs sm:text-sm md:text-base lg:text-lg text-emerald-600 mt-1 sm:mt-2">गांव के परिवार</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-xs sm:text-sm md:text-base text-gray-600"
                                >
                                    Discover and connect with families in Painal village.
                                    <span className="block text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-0.5">
                                        पैनाल गांव के परिवारों से जुड़ें और उन्हें जानें।
                                    </span>
                                </motion.p>
                            </div>

                            {/* Right Column - Stats and Search */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {/* Stats Display - Modern Design */}
                                <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8">
                                    {[
                                        { icon: FaUsers, label: "Total Families", value: families.length, color: "emerald", hindiLabel: "कुल परिवार" },
                                        { icon: FaUserFriends, label: "Total Members", value: families.reduce((acc, family) => acc + family.familyMembers.length, 0), color: "emerald", hindiLabel: "कुल सदस्य" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                            className="flex-1 relative group"
                                        >
                                            <div className="flex items-center gap-2.5 sm:gap-3">
                                                <div className={`hidden md:block p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-${stat.color}-50/90 to-${stat.color}-50/50 backdrop-blur-sm shadow-[0_2px_6px_rgba(16,185,129,0.1)] group-hover:shadow-[0_3px_8px_rgba(16,185,129,0.15)] transition-all duration-300 border border-${stat.color}-100/50 flex-shrink-0`}>
                                                    <stat.icon className={`text-base sm:text-lg text-${stat.color}-600`} />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-col">
                                                        <div className="flex items-baseline space-x-1.5">
                                                            <p className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.value}</p>
                                                            <div className="h-px flex-1 bg-gradient-to-r from-emerald-200/30 via-emerald-300/20 to-transparent group-hover:from-emerald-300/30 group-hover:via-emerald-400/20 transition-all duration-300"></div>
                                                        </div>
                                                        <div className="flex items-center space-x-1.5 mt-0.5">
                                                            <p className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight tracking-wide">{stat.label}</p>
                                                            <span className="text-[8px] sm:text-[10px] text-emerald-600/80">•</span>
                                                            <p className="text-[8px] sm:text-[10px] text-emerald-600 leading-tight tracking-wide">{stat.hindiLabel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/5 group-hover:via-emerald-50/0 group-hover:to-emerald-50/0 transition-all duration-300 pointer-events-none"></div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Search Bar */}
                                <div className="relative w-full mt-2 md:mt-0">
                                    <input
                                        type="text"
                                        placeholder="Search families or family members..."
                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 pl-9 sm:pl-10 rounded-lg sm:rounded-xl border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] bg-white text-xs sm:text-sm md:text-base transition-all duration-300 hover:border-emerald-200/80"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <FaSearch className="absolute left-3 top-2.5 sm:top-3 md:top-3.5 text-emerald-600 text-sm sm:text-base md:text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Family Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {filteredFamilies.map((family) => (
                            <motion.div
                                key={family.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -2 }}
                                className="bg-white rounded-lg p-3 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-pointer border border-gray-200/80 hover:border-emerald-200/80 group"
                                onClick={() => handleFamilyClick(family)}
                            >
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    {/* Family Avatar */}
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-gray-200/80 flex-shrink-0 shadow-[0_2px_4px_rgba(0,0,0,0.03)] group-hover:border-emerald-200/80 transition-all duration-300">
                                        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-50/50 flex items-center justify-center">
                                            <FaUsers className="text-base sm:text-lg md:text-xl text-emerald-600" />
                                        </div>
                                    </div>

                                    {/* Family Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="min-w-0">
                                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate group-hover:text-emerald-700 transition-colors duration-300">
                                                    {family.name}
                                                </h3>
                                                <div className="flex items-center gap-1.5 mt-0.5">
                                                    <FaUsers className="text-emerald-600 flex-shrink-0 text-xs sm:text-sm md:text-base" />
                                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 truncate">{family.head}</p>
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-emerald-600 truncate">({family.headHindi})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Show matching family members if there's a search term */}
                                {searchTerm && family.familyMembers.some(member =>
                                    member.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ) && (
                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                                <h3 className="text-xs sm:text-sm font-medium text-emerald-700 px-2 py-0.5 bg-emerald-50 rounded-md whitespace-nowrap border border-emerald-100/80">
                                                    Matching Members
                                                </h3>
                                                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 via-gray-200 to-transparent"></div>
                                            </div>
                                            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent hover:scrollbar-thumb-emerald-600">
                                                {family.familyMembers
                                                    .filter(member =>
                                                        member.name.toLowerCase().includes(searchTerm.toLowerCase())
                                                    )
                                                    .map(member => (
                                                        <div key={member.id} className="bg-gray-50/50 rounded-md p-2 sm:p-2.5 border border-gray-100/50 hover:border-emerald-100/50 transition-all duration-300">
                                                            <div className="flex items-center gap-2.5">
                                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden border border-gray-200/80 flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                                                                    <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-50/50 flex items-center justify-center">
                                                                        <FaUser className="text-sm sm:text-base text-emerald-600" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex items-center gap-1.5">
                                                                        <p className="text-sm sm:text-base text-gray-800 truncate">{member.name}</p>
                                                                        <span className="text-xs sm:text-sm text-emerald-600 truncate">({member.hindiName})</span>
                                                                    </div>
                                                                    {member.parentId && (
                                                                        <div className="flex items-center gap-1.5 mt-1">
                                                                            <span className="text-xs sm:text-sm text-gray-500">Father: {family.familyMembers.find(p => p.id === member.parentId)?.name || 'Unknown'}</span>
                                                                            <span className="text-[10px] sm:text-xs text-emerald-600">({family.familyMembers.find(p => p.id === member.parentId)?.hindiName || 'Unknown'})</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )}
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredFamilies.length === 0 && (
                        <div className="text-center py-6 sm:py-8 md:py-10 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/80">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-200/80">
                                <FaSearch className="text-lg sm:text-xl md:text-2xl text-gray-400" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-gray-600">No families or family members found matching your search.</p>
                            <p className="text-[10px] sm:text-xs md:text-sm text-emerald-600 mt-1">कोई परिवार या परिवार के सदस्य नहीं मिले।</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

// Add custom scrollbar styles
const styles = `
.scrollbar-thin::-webkit-scrollbar {
    width: 4px;
}
@media (min-width: 640px) {
    .scrollbar-thin::-webkit-scrollbar {
        width: 6px;
    }
}
.scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
    background: #059669;
}
`;

// Add styles to document head
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default FamilyTree;