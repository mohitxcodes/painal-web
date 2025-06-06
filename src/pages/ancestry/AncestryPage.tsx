import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaUsers, FaSearch, FaChevronDown, FaChevronRight, FaInfoCircle, FaHome, FaUserFriends, FaMapMarkerAlt, FaFilter, FaTimes, FaHeart, FaShare, FaDownload, FaPrint, FaUser, FaCalendarAlt, FaBriefcase, FaChild } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';
import { familyData } from '../../data/VillageMemberData';
import { IVillageMember } from '../../interface/IVillageMember';


// Updated family data with more complex relationships


const AncestryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPerson, setSelectedPerson] = useState<IVillageMember | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<Set<number>>(new Set([1]));
    const [connections, setConnections] = useState<{ from: number; to: number }[]>([]);
    const [showHelp, setShowHelp] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        generation: 'all',
        occupation: 'all',
        birthYearRange: [1940, 2022]
    });
    const nodeRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    // Enhanced search with multiple criteria
    const filteredFamilyData = familyData.filter(member => {
        const matchesSearch = !searchTerm ||
            member.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesGeneration = filters.generation === 'all' ||
            (filters.generation === '1' && !member.parentId) ||
            (filters.generation === '2' && member.parentId && !familyData.find(p => p.id === member.parentId)?.parentId) ||
            (filters.generation === '3' && member.parentId && familyData.find(p => p.id === member.parentId)?.parentId);

        const matchesOccupation = filters.occupation === 'all' ||
            member.occupation?.toLowerCase() === filters.occupation.toLowerCase();


        return matchesSearch && matchesGeneration && matchesOccupation;
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
                    <div className="flex space-x-2">
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                            <FaHeart />
                        </button>
                        <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                            <FaShare />
                        </button>
                    </div>
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
                        className={`bg-gradient-to-br from-white to-green-50/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${isMatched
                            ? 'border-emerald-500 shadow-xl scale-105'
                            : 'border-green-200/50 hover:border-green-300/50'
                            } relative w-[220px]`}
                        whileHover={{ y: -2, scale: 1.02 }}
                        onClick={() => setSelectedPerson(member)}
                    >
                        {/* Generation Indicator */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                            Gen {level + 1}
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <Avatar src={member.profilePhoto} alt={member.name} size="md" className="mb-3" />
                            <h3 className={`text-base font-semibold ${isMatched ? 'text-emerald-700' : 'text-gray-800'} line-clamp-1`}>
                                {member.name}
                            </h3>
                            <p className="text-sm text-green-600 line-clamp-1 mt-1">{member.hindiName}</p>
                            <p className="text-xs text-gray-500 mt-2 bg-gray-50 px-2 py-1 rounded-full">Born: {member.birthYear}</p>
                        </div>

                        {/* Quick Info Tooltip */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaInfoCircle className="text-green-500" />
                        </div>
                    </motion.div>

                    {hasChildren && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleNode(member.id);
                            }}
                            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md hover:bg-green-50 transition-colors z-10 border border-green-100"
                            title={isExpanded ? "Collapse" : "Expand"}
                        >
                            {isExpanded ? (
                                <FaChevronDown className="text-green-600" />
                            ) : (
                                <FaChevronRight className="text-green-600" />
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

    useEffect(() => {
        // Calculate connections between nodes
        const newConnections: { from: number; to: number }[] = [];
        familyData.forEach(member => {
            if (member.parentId) {
                newConnections.push({ from: member.parentId, to: member.id });
            }
        });
        setConnections(newConnections);
    }, []);

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
                    {/* Enhanced Header with Navigation */}
                    <div className="text-center relative">
                        <div className="absolute top-0 right-0 flex space-x-2">
                            <button
                                onClick={() => setShowHelp(!showHelp)}
                                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                                title="Help"
                            >
                                <FaInfoCircle className="text-emerald-600 text-xl" />
                            </button>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                                title="Filters"
                            >
                                <FaFilter className="text-emerald-600 text-xl" />
                            </button>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                            Village Family Tree
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-emerald-600 mb-8">
                            गांव का वंशवृक्ष
                        </h2>

                        {/* Enhanced Quick Navigation */}
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
                                href="/gallery"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                whileHover={{ y: -2 }}
                            >
                                <FaUserFriends className="text-emerald-600" />
                                <span>Gallery</span>
                            </motion.a>
                            <motion.a
                                href="/map"
                                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                whileHover={{ y: -2 }}
                            >
                                <FaMapMarkerAlt className="text-emerald-600" />
                                <span>Map</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Enhanced Search and Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search by name, occupation, or Hindi name..."
                                className="w-full px-4 py-3 pl-10 rounded-xl border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm bg-white/90 backdrop-blur-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <FaSearch className="absolute left-3 top-3.5 text-emerald-600" />
                            {searchTerm && (
                                <div className="absolute right-3 top-3.5 text-sm text-emerald-600 font-medium">
                                    {filteredFamilyData.length} results
                                </div>
                            )}
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => window.print()}
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                title="Print Family Tree"
                            >
                                <FaPrint className="text-emerald-600" />
                            </button>
                            <button
                                onClick={() => {/* Add download functionality */ }}
                                className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50"
                                title="Download Family Tree"
                            >
                                <FaDownload className="text-emerald-600" />
                            </button>
                        </div>
                    </div>

                    {/* Filters Panel */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-emerald-600">Filters</h3>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
                                    >
                                        <FaTimes className="text-emerald-600" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Generation</label>
                                        <select
                                            className="w-full px-3 py-2 rounded-lg border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            value={filters.generation}
                                            onChange={(e) => setFilters({ ...filters, generation: e.target.value })}
                                        >
                                            <option value="all">All Generations</option>
                                            <option value="1">First Generation</option>
                                            <option value="2">Second Generation</option>
                                            <option value="3">Third Generation</option>
                                            <option value="4">Fourth Generation</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                                        <select
                                            className="w-full px-3 py-2 rounded-lg border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            value={filters.occupation}
                                            onChange={(e) => setFilters({ ...filters, occupation: e.target.value })}
                                        >
                                            <option value="all">All Occupations</option>
                                            <option value="farmer">Farmer</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="engineer">Engineer</option>
                                            <option value="student">Student</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Birth Year Range</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="number"
                                                className="w-full px-3 py-2 rounded-lg border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                value={filters.birthYearRange[0]}
                                                onChange={(e) => setFilters({
                                                    ...filters,
                                                    birthYearRange: [parseInt(e.target.value), filters.birthYearRange[1]]
                                                })}
                                                min="1940"
                                                max="2022"
                                            />
                                            <span className="text-gray-500">to</span>
                                            <input
                                                type="number"
                                                className="w-full px-3 py-2 rounded-lg border border-green-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                value={filters.birthYearRange[1]}
                                                onChange={(e) => setFilters({
                                                    ...filters,
                                                    birthYearRange: [filters.birthYearRange[0], parseInt(e.target.value)]
                                                })}
                                                min="1940"
                                                max="2022"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

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
                        <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50">
                            <div className="overflow-x-auto pb-4">
                                <div className="min-w-max px-4">
                                    {familyData.filter(member => !member.parentId).map(member => renderFamilyMember(member))}
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
                                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
                                    onClick={() => setSelectedPerson(null)}
                                />

                                {/* Drawer */}
                                <motion.div
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '100%' }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    className="fixed inset-x-0 bottom-0 max-h-[85vh] bg-white shadow-xl z-[999] overflow-y-auto rounded-t-3xl"
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

                                    <div className="p-4 sm:p-6">
                                        {/* Main Member Info */}
                                        <div className="flex flex-col items-center mb-6">
                                            <Avatar src={selectedPerson.profilePhoto} alt={selectedPerson.name} size="lg" className="mb-4" />
                                            <h3 className="text-xl font-bold text-gray-800">{selectedPerson.name}</h3>
                                            <p className="text-base text-green-600">{selectedPerson.hindiName}</p>
                                        </div>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FaCalendarAlt className="text-green-600 text-sm" />
                                                    <h4 className="font-medium text-gray-800 text-sm">Birth Year</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm">{selectedPerson.birthYear}</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FaBriefcase className="text-green-600 text-sm" />
                                                    <h4 className="font-medium text-gray-800 text-sm">Occupation</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm">{selectedPerson.occupation}</p>
                                                <p className="text-xs text-green-600">{selectedPerson.occupationHindi}</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FaUserFriends className="text-green-600 text-sm" />
                                                    <h4 className="font-medium text-gray-800 text-sm">Spouse</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm">{selectedPerson.spouse}</p>
                                                <p className="text-xs text-green-600">{selectedPerson.spouseHindiName}</p>
                                            </div>

                                            <div className="bg-gray-50 rounded-xl p-3">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <FaChild className="text-green-600 text-sm" />
                                                    <h4 className="font-medium text-gray-800 text-sm">Children</h4>
                                                </div>
                                                <p className="text-gray-600 text-sm">{selectedPerson.children.length} children</p>
                                            </div>
                                        </div>

                                        {/* Children Section */}
                                        {selectedPerson.children.length > 0 && (
                                            <div className="mb-6">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                    <FaUsers className="text-green-600" />
                                                    Children
                                                </h3>
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                                    {getChildren(selectedPerson).map((child) => (
                                                        <motion.div
                                                            key={child.id}
                                                            className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                                                            whileHover={{ y: -2 }}
                                                            onClick={() => setSelectedPerson(child)}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Avatar src={child.profilePhoto} alt={child.name} size="sm" />
                                                                <div>
                                                                    <h4 className="font-medium text-gray-800 text-sm">{child.name}</h4>
                                                                    <p className="text-xs text-green-600">{child.hindiName}</p>
                                                                    <p className="text-xs text-gray-500 mt-0.5">Born: {child.birthYear}</p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap justify-center gap-3">
                                            <button className="px-3 py-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1.5 text-sm">
                                                <FaHeart className="text-sm" />
                                                <span>Favorite</span>
                                            </button>
                                            <button className="px-3 py-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1.5 text-sm">
                                                <FaShare className="text-sm" />
                                                <span>Share</span>
                                            </button>
                                            <button className="px-3 py-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1.5 text-sm">
                                                <FaDownload className="text-sm" />
                                                <span>Download</span>
                                            </button>
                                            <button className="px-3 py-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-1.5 text-sm">
                                                <FaPrint className="text-sm" />
                                                <span>Print</span>
                                            </button>
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