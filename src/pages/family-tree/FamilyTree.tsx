import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUsers, FaSearch, FaHome, FaUserFriends, FaHeart, FaShare, FaChild, FaUser, FaUserPlus } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';
import { useNavigate } from 'react-router-dom';
import { families } from '../../data/FamilyMemberData.ts'

const FamilyTree = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Helper function to find a family member by ID
    const findFamilyMember = (family: typeof families[0], memberId: number) => {
        return family.familyMembers.find(member => member.id === memberId);
    };

    // Filter families based on search term
    const filteredFamilies = families.filter(family => {
        // If no search term, show all families
        if (!searchTerm) return true;

        // Check if family name or head matches
        const familyNameMatch = family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            family.head.toLowerCase().includes(searchTerm.toLowerCase());

        // Check if any family member's name matches
        const familyMemberMatch = family.familyMembers.some(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return familyNameMatch || familyMemberMatch;
    });

    const handleFamilyClick = (family: typeof families[0]) => {
        // Store family data in localStorage
        localStorage.setItem('selectedFamilyData', JSON.stringify(family.familyMembers));
        localStorage.setItem('selectedFamilyTitle', JSON.stringify({
            english: family.name,
        }));

        // Store the current search term if it exists
        if (searchTerm) {
            localStorage.setItem('ancestrySearchTerm', searchTerm);
        }

        // Navigate to ancestry page
        navigate('/ancestry');
    };

    // Render family member details
    const renderFamilyMemberDetails = (family: typeof families[0], member: any) => {
        const father = member.parentId ? findFamilyMember(family, member.parentId) : null;
        const children = member.children ? member.children.map((childId: number) => findFamilyMember(family, childId)) : [];

        return (
            <div className="mt-2 p-4 bg-white/80 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                    {/* Profile Section */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center border-2 border-emerald-100">
                            <FaUser className="text-2xl text-emerald-600" />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex-1 min-w-0 w-full">
                        {/* Name and Basic Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-semibold text-gray-800 truncate">{member.name}</h4>
                                <p className="text-sm text-emerald-600 truncate">{member.hindiName}</p>
                            </div>
                            {member.birthYear && member.birthYear !== "Unavailable" && (
                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm whitespace-nowrap">
                                    Born: {member.birthYear}
                                </span>
                            )}
                        </div>

                        {/* Occupation */}
                        {member.occupation && member.occupation !== "Unavailable" && (
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm whitespace-nowrap">
                                    {member.occupation}
                                </span>
                                {member.occupationHindi && (
                                    <span className="text-sm text-gray-500 truncate">({member.occupationHindi})</span>
                                )}
                            </div>
                        )}

                        {/* Family Relationships */}
                        <div className="mt-3 space-y-2">
                            {/* Father's Information */}
                            {father && (
                                <div className="flex items-start gap-2 p-2 bg-emerald-50/50 rounded-lg">
                                    <FaUserPlus className="text-emerald-600 flex-shrink-0 mt-1" />
                                    <div className="min-w-0">
                                        <span className="text-sm text-gray-600">Father: </span>
                                        <span className="text-sm font-medium text-emerald-700 truncate">{father.name}</span>
                                        <span className="text-sm text-emerald-600 truncate"> ({father.hindiName})</span>
                                    </div>
                                </div>
                            )}

                            {/* Children's Information */}
                            {children.length > 0 && (
                                <div className="p-2 bg-emerald-50/50 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaChild className="text-emerald-600 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700">Children:</span>
                                    </div>
                                    <div className="ml-6">
                                        <div className="flex flex-wrap gap-2">
                                            {children.map((child: any) => (
                                                <div
                                                    key={child.id}
                                                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/80 rounded-lg border border-emerald-100/50 hover:border-emerald-200/50 transition-colors"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-emerald-700 leading-tight">{child.name}</span>
                                                        <span className="text-xs text-emerald-600 leading-tight">{child.hindiName}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
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
                                placeholder="Search families or family members..."
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
                                <div className="flex flex-col gap-4">
                                    {/* Family Header */}
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
                                                <div className="min-w-0">
                                                    <h3 className="text-lg font-semibold text-gray-800 truncate">{family.name}</h3>
                                                    <p className="text-sm text-green-600 truncate">{family.hindiName}</p>
                                                </div>
                                                <div className="flex space-x-2 flex-shrink-0">
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

                                            <div className="mt-2 flex flex-wrap items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <FaUsers className="text-green-600 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600 truncate">{family.head}</span>
                                                    <span className="text-xs text-green-600 truncate">({family.headHindi})</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <FaChild className="text-green-600 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{family.children} Children</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Show matching family members if there's a search term */}
                                    {searchTerm && family.familyMembers.some(member =>
                                        member.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    ) && (
                                            <div className="mt-2 space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                                                    <h3 className="text-sm font-semibold text-emerald-700 px-3 py-1 bg-emerald-50 rounded-full whitespace-nowrap">
                                                        Matching Members
                                                    </h3>
                                                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-200 via-emerald-200 to-transparent"></div>
                                                </div>
                                                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                                    {family.familyMembers
                                                        .filter(member =>
                                                            member.name.toLowerCase().includes(searchTerm.toLowerCase())
                                                        )
                                                        .map(member => (
                                                            <div key={member.id}>
                                                                {renderFamilyMemberDetails(family, member)}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredFamilies.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No families or family members found matching your search.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

// Add this CSS to your global styles or component


export default FamilyTree;