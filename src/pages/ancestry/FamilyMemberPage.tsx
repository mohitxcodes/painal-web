import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaUsers, FaSearch, FaChevronDown, FaChevronRight, FaInfoCircle, FaUserFriends, FaTimes, FaUser, FaCalendarAlt, FaBriefcase, FaChild } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';
import { IVillageMember } from '../../interface/IVillageMember';

const AncestryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPerson, setSelectedPerson] = useState<IVillageMember | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<Set<number>>(new Set([1]));
    const [familyData, setFamilyData] = useState<IVillageMember[]>([]);
    const [familyTitle, setFamilyTitle] = useState({ english: '', hindi: '' });
    const nodeRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    useEffect(() => {
        // Get family data from localStorage
        const storedFamilyData = localStorage.getItem('selectedFamilyData');
        const storedFamilyTitle = localStorage.getItem('selectedFamilyTitle');

        if (storedFamilyData) {
            setFamilyData(JSON.parse(storedFamilyData));
        }

        if (storedFamilyTitle) {
            setFamilyTitle(JSON.parse(storedFamilyTitle));
        }
    }, []);

    // Enhanced search with multiple criteria
    const filteredFamilyData = familyData.filter(member => {
        return !searchTerm || member.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Get children for a member
    const getChildren = (member: IVillageMember) => {
        return familyData.filter(m => member.children.includes(m.id));
    };

    // Get parent for a member
    const getParent = (member: IVillageMember) => {
        return familyData.find(m => m.id === member.parentId);
    };

    // Get siblings for a member
    const getSiblings = (member: IVillageMember) => {
        if (!member.parentId) return [];
        const parent = getParent(member);
        if (!parent) return [];
        return familyData.filter(m => m.parentId === member.parentId && m.id !== member.id);
    };

    // Add scroll lock effect
    useEffect(() => {
        if (selectedPerson) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPerson]);

    // Avatar component with fallback
    const Avatar = ({ src, alt, size = "md", className = "" }: { src?: string, alt: string, size?: "sm" | "md" | "lg", className?: string }) => {
        const sizeClasses = {
            sm: "size-12",
            md: "size-16",
            lg: "size-24"
        };

        const [imgError, setImgError] = useState(false);

        return (
            <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-green-200/50 shadow-sm ${className}`}>
                {!imgError && src ? (
                    <img
                        src={src}
                        alt={alt}
                        className="size-full object-cover"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="size-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                        <FaUser className={`text-green-600 ${size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"}`} />
                    </div>
                )}
            </div>
        );
    };

    const renderSearchResult = (member: IVillageMember) => {
        const children = getChildren(member);
        const parent = getParent(member);
        const siblings = getSiblings(member);

        return (
            <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50 hover:border-green-300/50 transition-all duration-300 w-full"
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Family of {member.name}
                    </h3>
                </div>

                <div className="flex flex-col items-center">
                    {/* Main Member Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-br from-white to-green-50/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200/50 hover:border-green-300/50 relative w-[280px]"
                        whileHover={{ y: -2, scale: 1.02 }}
                        onClick={() => setSelectedPerson(member)}
                    >
                        <div className="flex flex-col items-center text-center">
                            <Avatar src={member.profilePhoto} alt={member.name} size="lg" className="mb-3" />
                            <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                                {member.name}
                            </h3>
                            <p className="text-sm text-green-600 line-clamp-1 mt-1">{member.hindiName}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                    Born: {member.birthYear}
                                </span>
                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                    {member.occupation}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Parent Section */}
                    {parent && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-8 w-full"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <FaUsers className="text-green-600" />
                                Parent
                            </h3>
                            <div className="flex justify-center">
                                <motion.div
                                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                                    whileHover={{ y: -2 }}
                                    onClick={() => setSelectedPerson(parent)}
                                >
                                    <div className="flex items-center gap-4">
                                        <Avatar src={parent.profilePhoto} alt={parent.name} size="md" />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-gray-800 truncate">{parent.name}</h4>
                                            <p className="text-sm text-green-600 truncate">{parent.hindiName}</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                                    Born: {parent.birthYear}
                                                </span>
                                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                                    {parent.occupation}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* Siblings Section */}
                    {siblings.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="mt-8 w-full"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <FaUsers className="text-green-600" />
                                Siblings
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {siblings.map((sibling) => (
                                    <motion.div
                                        key={sibling.id}
                                        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                                        whileHover={{ y: -2 }}
                                        onClick={() => setSelectedPerson(sibling)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar src={sibling.profilePhoto} alt={sibling.name} size="md" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-gray-800 truncate">{sibling.name}</h4>
                                                <p className="text-sm text-green-600 truncate">{sibling.hindiName}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                                        Born: {sibling.birthYear}
                                                    </span>
                                                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                                        {sibling.occupation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Children Section */}
                    {children.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8 w-full"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <FaUsers className="text-green-600" />
                                Children
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {children.map((child) => (
                                    <motion.div
                                        key={child.id}
                                        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                                        whileHover={{ y: -2 }}
                                        onClick={() => setSelectedPerson(child)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Avatar src={child.profilePhoto} alt={child.name} size="md" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-medium text-gray-800 truncate">{child.name}</h4>
                                                <p className="text-sm text-green-600 truncate">{child.hindiName}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                                                        Born: {child.birthYear}
                                                    </span>
                                                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                                        {child.occupation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        );
    };

    const renderFamilyMember = (member: IVillageMember, level: number = 0) => {
        const hasChildren = member.children.length > 0;
        const isExpanded = expandedNodes.has(member.id);
        const isMatched = searchTerm && member.name.toLowerCase().includes(searchTerm.toLowerCase());

        return (
            <div
                key={member.id}
                ref={(el) => {
                    nodeRefs.current[member.id] = el;
                }}
                className="relative group"
            >
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`group/familycard bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${isMatched
                            ? 'border-emerald-500 shadow-xl scale-105'
                            : 'border-emerald-100 hover:border-emerald-300'
                            } relative w-[230px] flex flex-col items-center mt-6`}
                        whileHover={{ y: -2, scale: 1.03 }}
                        onClick={() => setSelectedPerson(member)}
                    >
                        {/* Generation Indicator */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-sm font-semibold tracking-wide z-10">
                            Gen {level + 1}
                        </div>
                        <div className="flex flex-col items-center text-center w-full pb-2">
                            <div className="mb-2">
                                <Avatar src={member.profilePhoto} alt={member.name} size="md" className="ring-2 ring-emerald-100 group-hover/familycard:ring-emerald-400 transition-all duration-200" />
                            </div>
                            <div className="w-full">
                                <h3 className={`text-lg font-bold ${isMatched ? 'text-emerald-700' : 'text-gray-900'} truncate`}>{member.name}</h3>
                                <span className="block text-xs text-emerald-600 font-medium mt-0.5 truncate">({member.hindiName})</span>
                                <div className="mt-2 flex items-center justify-center gap-1.5">
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium border border-emerald-100">
                                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" /></svg>
                                        {member.birthYear}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Quick Info Tooltip */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover/familycard:opacity-100 transition-opacity">
                            <FaInfoCircle className="text-emerald-400" />
                        </div>
                    </motion.div>

                    {hasChildren && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleNode(member.id);
                            }}
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-md rounded-full p-2 z-10 transition-all duration-200 flex items-center justify-center"
                            title={isExpanded ? "Collapse" : "Expand"}
                        >
                            {isExpanded ? (
                                <FaChevronDown className="text-emerald-600 text-lg" />
                            ) : (
                                <FaChevronRight className="text-emerald-600 text-lg" />
                            )}
                        </button>
                    )}
                </div>

                {hasChildren && isExpanded && (
                    <div className="mt-8 relative">
                        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-green-200 -translate-y-8"></div>
                        <div className="flex flex-wrap justify-center gap-8">
                            {getChildren(member).map(child => renderFamilyMember(child, level + 1))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const toggleNode = (id: number) => {
        setExpandedNodes(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden py-10">
            <AnimatedBackground />
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Modern Integrated Header */}
                    <div className="relative mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            {/* Left Section - Family Info */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2">
                                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                                {familyTitle.english || 'Family Tree'}
                                            </h1>
                                            <span className="text-sm text-emerald-600 font-medium mt-0.5">
                                                {familyTitle.hindi || 'वंशवृक्ष'}
                                            </span>
                                        </div>
                                        <div className="h-8 w-px bg-gradient-to-b from-emerald-200 to-emerald-100/50"></div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/80 rounded-lg">
                                                <FaUsers className="text-emerald-600" />
                                                <span className="text-base font-semibold text-gray-900">{familyData.length}</span>
                                                <span className="text-sm text-emerald-600">सदस्य</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Search */}
                            <div className="relative flex-1 max-w-md">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search family members..."
                                        className="w-full px-4 py-2.5 pl-11 pr-28 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 bg-white/80 backdrop-blur-sm text-sm transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <div className="absolute inset-0 rounded-xl border border-emerald-100/50 pointer-events-none"></div>
                                    <FaSearch className="absolute left-4 top-3 text-emerald-600" />
                                    {searchTerm && (
                                        <div className="absolute right-3 top-2 text-xs font-medium bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">
                                            {filteredFamilyData.length} results
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-100/50 to-transparent"></div>
                    </div>

                    {/* Search Results */}
                    {searchTerm && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {filteredFamilyData.length > 0 ? (
                                filteredFamilyData.map(member => renderSearchResult(member))
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-600">No results found for "{searchTerm}"</p>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Full Family Tree Visualization */}
                    {!searchTerm && (
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-emerald-100/50">
                            <div className="overflow-x-auto pb-4">
                                <div className="min-w-max px-4">
                                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                                        {familyData.filter(member => !member.parentId).map(member => renderFamilyMember(member))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Drawer for Selected Person */}
                    <AnimatePresence>
                        {selectedPerson && (
                            <>
                                {/* Blurred Background Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
                                    onClick={() => setSelectedPerson(null)}
                                />

                                {/* Drawer */}
                                <motion.div
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '100%' }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-2xl z-[10000] max-h-[90vh] overflow-hidden"
                                >
                                    {/* Handle Bar */}
                                    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex flex-col items-center rounded-t-3xl">
                                        <div className="w-12 h-1.5 bg-gray-300 rounded-full mb-2"></div>
                                        <div className="w-full flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-gray-800">Family Details</h2>
                                            <button
                                                onClick={() => setSelectedPerson(null)}
                                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                            >
                                                <FaTimes className="text-gray-500" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-3 sm:p-4 md:p-6">
                                        {/* Main Member Info */}
                                        <div className="flex flex-col items-center mb-4 sm:mb-6 relative px-2">
                                            <div className="relative w-full flex flex-col items-center">
                                                <Avatar
                                                    src={selectedPerson.profilePhoto}
                                                    alt={selectedPerson.name}
                                                    size="lg"
                                                    className="mb-3 sm:mb-4"
                                                />
                                                <div className="text-center">
                                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 truncate max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                                                        {selectedPerson.name}
                                                    </h3>
                                                    <p className="text-sm sm:text-base text-green-600 truncate max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                                                        {selectedPerson.hindiName}
                                                    </p>
                                                    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-emerald-50 text-emerald-700 text-xs sm:text-sm rounded-full font-medium border border-emerald-100 shadow-sm mt-2 sm:mt-0 sm:absolute sm:top-2 sm:right-0">
                                                        <FaCalendarAlt className="text-emerald-500 text-[10px] sm:text-xs" />
                                                        Born: {selectedPerson.birthYear}
                                                        <span className="text-[10px] sm:text-xs text-emerald-600 ml-1">(जन्म)</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Family Relationships */}
                                        <div className="space-y-4 sm:space-y-6 overflow-y-auto max-h-[calc(100vh-280px)] pr-2">
                                            {/* Parents Section */}
                                            {getParent(selectedPerson) && (
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 sticky top-0 bg-white/80 backdrop-blur-sm py-2 z-10">
                                                        <FaUser className="text-emerald-600 text-sm sm:text-base" />
                                                        Parents
                                                        <span className="text-xs sm:text-sm text-emerald-600 font-normal">(माता-पिता)</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                                                        {getParent(selectedPerson) && (
                                                            <motion.div
                                                                className="bg-white rounded-xl p-2 sm:p-3 shadow-sm border border-emerald-100/50 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                                                                whileHover={{ y: -2 }}
                                                                onClick={() => {
                                                                    const parent = getParent(selectedPerson);
                                                                    if (parent) setSelectedPerson(parent);
                                                                }}
                                                            >
                                                                <div className="flex items-center gap-2 sm:gap-3">
                                                                    <Avatar
                                                                        src={getParent(selectedPerson)?.profilePhoto}
                                                                        alt={getParent(selectedPerson)?.name || 'Parent'}
                                                                        size="md"
                                                                        className="ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300 shrink-0"
                                                                    />
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                                                                            <div className="min-w-0">
                                                                                <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
                                                                                    {getParent(selectedPerson)?.name}
                                                                                </p>
                                                                                <p className="text-[10px] sm:text-xs text-emerald-600 truncate">
                                                                                    {getParent(selectedPerson)?.hindiName}
                                                                                </p>
                                                                            </div>
                                                                            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs rounded-full font-medium shrink-0 self-start sm:self-auto">
                                                                                <FaCalendarAlt className="text-emerald-500 text-[8px] sm:text-[10px]" />
                                                                                {getParent(selectedPerson)?.birthYear}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Siblings Section */}
                                            {getSiblings(selectedPerson).length > 0 && (
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 sticky top-0 bg-white/80 backdrop-blur-sm py-2 z-10">
                                                        <FaUserFriends className="text-emerald-600 text-sm sm:text-base" />
                                                        Siblings
                                                        <span className="text-xs sm:text-sm text-emerald-600 font-normal">(भाई-बहन)</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                                                        {getSiblings(selectedPerson).map(sibling => (
                                                            <motion.div
                                                                key={sibling.id}
                                                                className="bg-white rounded-xl p-2 sm:p-3 shadow-sm border border-emerald-100/50 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                                                                whileHover={{ y: -2 }}
                                                                onClick={() => setSelectedPerson(sibling)}
                                                            >
                                                                <div className="flex items-center gap-2 sm:gap-3">
                                                                    <Avatar
                                                                        src={sibling.profilePhoto}
                                                                        alt={sibling.name}
                                                                        size="md"
                                                                        className="ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300 shrink-0"
                                                                    />
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                                                                            <div className="min-w-0">
                                                                                <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{sibling.name}</p>
                                                                                <p className="text-[10px] sm:text-xs text-emerald-600 truncate">{sibling.hindiName}</p>
                                                                            </div>
                                                                            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs rounded-full font-medium shrink-0 self-start sm:self-auto">
                                                                                <FaCalendarAlt className="text-emerald-500 text-[8px] sm:text-[10px]" />
                                                                                {sibling.birthYear}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Children Section */}
                                            {selectedPerson.children.length > 0 && (
                                                <div>
                                                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 sticky top-0 bg-white/80 backdrop-blur-sm py-2 z-10">
                                                        <FaChild className="text-emerald-600 text-sm sm:text-base" />
                                                        Children
                                                        <span className="text-xs sm:text-sm text-emerald-600 font-normal">(बच्चे)</span>
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                                                        {getChildren(selectedPerson).map(child => (
                                                            <motion.div
                                                                key={child.id}
                                                                className="bg-white rounded-xl p-2 sm:p-3 shadow-sm border border-emerald-100/50 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                                                                whileHover={{ y: -2 }}
                                                                onClick={() => setSelectedPerson(child)}
                                                            >
                                                                <div className="flex items-center gap-2 sm:gap-3">
                                                                    <Avatar
                                                                        src={child.profilePhoto}
                                                                        alt={child.name}
                                                                        size="md"
                                                                        className="ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300 shrink-0"
                                                                    />
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                                                                            <div className="min-w-0">
                                                                                <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{child.name}</p>
                                                                                <p className="text-[10px] sm:text-xs text-emerald-600 truncate">{child.hindiName}</p>
                                                                            </div>
                                                                            <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs rounded-full font-medium shrink-0 self-start sm:self-auto">
                                                                                <FaCalendarAlt className="text-emerald-500 text-[8px] sm:text-[10px]" />
                                                                                {child.birthYear}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default AncestryPage;