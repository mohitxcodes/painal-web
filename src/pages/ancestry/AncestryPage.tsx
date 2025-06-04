import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaUsers, FaSearch, FaFilter, FaChevronDown, FaChevronRight, FaInfoCircle, FaHome, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import { AnimatedBackground } from '../../components/common/AnimatedBackground';

interface FamilyMember {
    id: number;
    name: string;
    hindiName: string;
    birthYear: number;
    children: number[];
    parentId?: number;
    spouse: string;
    spouseHindiName: string;
    occupation: string;
    occupationHindi: string;
}

// Updated family data with more complex relationships
const familyData: FamilyMember[] = [
    // First Generation
    {
        id: 1,
        name: "Ram Kumar Singh",
        hindiName: "राम कुमार सिंह",
        birthYear: 1940,
        children: [2, 3, 4, 5],
        spouse: "Lakshmi Devi",
        spouseHindiName: "लक्ष्मी देवी",
        occupation: "Farmer",
        occupationHindi: "किसान"
    },
    // Second Generation
    {
        id: 2,
        name: "Rajesh Singh",
        hindiName: "राजेश सिंह",
        birthYear: 1965,
        parentId: 1,
        children: [6, 7, 8],
        spouse: "Sunita Devi",
        spouseHindiName: "सुनीता देवी",
        occupation: "Teacher",
        occupationHindi: "शिक्षक"
    },
    {
        id: 3,
        name: "Ramesh Singh",
        hindiName: "रमेश सिंह",
        birthYear: 1968,
        parentId: 1,
        children: [9, 10],
        spouse: "Rekha Devi",
        spouseHindiName: "रेखा देवी",
        occupation: "Shop Owner",
        occupationHindi: "दुकानदार"
    },
    {
        id: 4,
        name: "Rakesh Singh",
        hindiName: "राकेश सिंह",
        birthYear: 1970,
        parentId: 1,
        children: [11, 12],
        spouse: "Priya Devi",
        spouseHindiName: "प्रिया देवी",
        occupation: "Government Employee",
        occupationHindi: "सरकारी कर्मचारी"
    },
    {
        id: 5,
        name: "Suresh Singh",
        hindiName: "सुरेश सिंह",
        birthYear: 1972,
        parentId: 1,
        children: [13, 14],
        spouse: "Anita Devi",
        spouseHindiName: "अनिता देवी",
        occupation: "Business Owner",
        occupationHindi: "व्यवसायी"
    },
    // Third Generation
    {
        id: 6,
        name: "Amit Singh",
        hindiName: "अमित सिंह",
        birthYear: 1990,
        parentId: 2,
        children: [15, 16],
        spouse: "Neha Singh",
        spouseHindiName: "नेहा सिंह",
        occupation: "Software Engineer",
        occupationHindi: "सॉफ्टवेयर इंजीनियर"
    },
    {
        id: 7,
        name: "Vikram Singh",
        hindiName: "विक्रम सिंह",
        birthYear: 1992,
        parentId: 2,
        children: [17],
        spouse: "Pooja Singh",
        spouseHindiName: "पूजा सिंह",
        occupation: "Doctor",
        occupationHindi: "डॉक्टर"
    },
    {
        id: 8,
        name: "Rahul Singh",
        hindiName: "राहुल सिंह",
        birthYear: 1994,
        parentId: 2,
        children: [18, 19],
        spouse: "Kavita Singh",
        spouseHindiName: "कविता सिंह",
        occupation: "Teacher",
        occupationHindi: "शिक्षक"
    },
    {
        id: 9,
        name: "Dinesh Singh",
        hindiName: "दिनेश सिंह",
        birthYear: 1991,
        parentId: 3,
        children: [20],
        spouse: "Meena Singh",
        spouseHindiName: "मीना सिंह",
        occupation: "Engineer",
        occupationHindi: "इंजीनियर"
    },
    {
        id: 10,
        name: "Rajesh Kumar Singh",
        hindiName: "राजेश कुमार सिंह",
        birthYear: 1993,
        parentId: 3,
        children: [21, 22],
        spouse: "Lakshmi Singh",
        spouseHindiName: "लक्ष्मी सिंह",
        occupation: "Farmer",
        occupationHindi: "किसान"
    },
    {
        id: 11,
        name: "Sandeep Singh",
        hindiName: "संदीप सिंह",
        birthYear: 1995,
        parentId: 4,
        children: [23],
        spouse: "Ritu Singh",
        spouseHindiName: "रितु सिंह",
        occupation: "Bank Manager",
        occupationHindi: "बैंक मैनेजर"
    },
    {
        id: 12,
        name: "Pankaj Singh",
        hindiName: "पंकज सिंह",
        birthYear: 1997,
        parentId: 4,
        children: [24, 25],
        spouse: "Suman Singh",
        spouseHindiName: "सुमन सिंह",
        occupation: "Police Officer",
        occupationHindi: "पुलिस अधिकारी"
    },
    {
        id: 13,
        name: "Manoj Singh",
        hindiName: "मनोज सिंह",
        birthYear: 1996,
        parentId: 5,
        children: [26],
        spouse: "Deepa Singh",
        spouseHindiName: "दीपा सिंह",
        occupation: "Business Owner",
        occupationHindi: "व्यवसायी"
    },
    {
        id: 14,
        name: "Naveen Singh",
        hindiName: "नवीन सिंह",
        birthYear: 1998,
        parentId: 5,
        children: [27, 28],
        spouse: "Priyanka Singh",
        spouseHindiName: "प्रियंका सिंह",
        occupation: "Doctor",
        occupationHindi: "डॉक्टर"
    },
    // Fourth Generation
    {
        id: 15,
        name: "Arjun Singh",
        hindiName: "अर्जुन सिंह",
        birthYear: 2015,
        parentId: 6,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 16,
        name: "Aditya Singh",
        hindiName: "आदित्य सिंह",
        birthYear: 2017,
        parentId: 6,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 17,
        name: "Vivaan Singh",
        hindiName: "विवान सिंह",
        birthYear: 2016,
        parentId: 7,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 18,
        name: "Rohan Singh",
        hindiName: "रोहन सिंह",
        birthYear: 2018,
        parentId: 8,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 19,
        name: "Ritvik Singh",
        hindiName: "रित्विक सिंह",
        birthYear: 2020,
        parentId: 8,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 20,
        name: "Dev Singh",
        hindiName: "देव सिंह",
        birthYear: 2019,
        parentId: 9,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 21,
        name: "Dhruv Singh",
        hindiName: "ध्रुव सिंह",
        birthYear: 2017,
        parentId: 10,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 22,
        name: "Ethan Singh",
        hindiName: "एथन सिंह",
        birthYear: 2019,
        parentId: 10,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 23,
        name: "Fahad Singh",
        hindiName: "फहाद सिंह",
        birthYear: 2018,
        parentId: 11,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 24,
        name: "Gaurav Singh",
        hindiName: "गौरव सिंह",
        birthYear: 2020,
        parentId: 12,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 25,
        name: "Harsh Singh",
        hindiName: "हर्ष सिंह",
        birthYear: 2022,
        parentId: 12,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 26,
        name: "Ishaan Singh",
        hindiName: "ईशान सिंह",
        birthYear: 2021,
        parentId: 13,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 27,
        name: "Jai Singh",
        hindiName: "जय सिंह",
        birthYear: 2020,
        parentId: 14,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 28,
        name: "Kabir Singh",
        hindiName: "कबीर सिंह",
        birthYear: 2022,
        parentId: 14,
        children: [],
        spouse: "Not Married",
        spouseHindiName: "अविवाहित",
        occupation: "Student",
        occupationHindi: "छात्र"
    },
    {
        id: 29,
        name: "Sandeep Singh",
        hindiName: "राजेश कुमार सिंह",
        birthYear: 1993,
        parentId: 3,
        children: [],
        spouse: "Lakshmi Singh",
        spouseHindiName: "लक्ष्मी सिंह",
        occupation: "Farmer",
        occupationHindi: "किसान"
    },
];

const AncestryPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPerson, setSelectedPerson] = useState<FamilyMember | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<Set<number>>(new Set([1]));
    const [connections, setConnections] = useState<{ from: number; to: number }[]>([]);
    const [showHelp, setShowHelp] = useState(false);
    const nodeRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

    // Simple search by name only
    const filteredFamilyData = familyData.filter(member => {
        if (!searchTerm) return true;
        return member.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Get children for a member
    const getChildren = (member: FamilyMember) => {
        return member.children.map(childId => familyData.find(m => m.id === childId)).filter(Boolean) as FamilyMember[];
    };

    const renderSearchResult = (member: FamilyMember) => {
        const children = getChildren(member);
        const isMatched = searchTerm && member.name.toLowerCase().includes(searchTerm.toLowerCase());

        return (
            <div key={member.id} className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50 hover:border-green-300/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Family of {member.name}
                    </h3>
                </div>

                <div className="flex flex-col items-center">
                    {/* Main Member Card */}
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
                        <div className="flex flex-col items-center text-center">
                            <div className={`p-3 rounded-full ${isMatched ? 'bg-emerald-100' : 'bg-green-50'} mb-3 border border-green-200/50 shadow-sm`}>
                                <FaUsers className={`text-2xl ${isMatched ? 'text-emerald-600' : 'text-green-600'}`} />
                            </div>
                            <h3 className={`text-base font-semibold ${isMatched ? 'text-emerald-700' : 'text-gray-800'} line-clamp-1`}>
                                {member.name}
                            </h3>
                            <p className="text-sm text-green-600 line-clamp-1 mt-1">{member.hindiName}</p>
                            <p className="text-xs text-gray-500 mt-2 bg-gray-50 px-2 py-1 rounded-full">Born: {member.birthYear}</p>
                        </div>
                    </motion.div>

                    {/* Children Section - Always Visible */}
                    {children.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-8 relative"
                        >
                            <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-green-200 to-emerald-200 -translate-y-8"></div>
                            <div className="flex flex-wrap justify-center gap-8">
                                {children.map(child => (
                                    <motion.div
                                        key={child.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative"
                                    >
                                        <div
                                            className="bg-gradient-to-br from-white to-green-50/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-green-200/50 hover:border-green-300/50 relative w-[220px]"
                                            onClick={() => setSelectedPerson(child)}
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div className="p-3 rounded-full bg-green-50 mb-3 border border-green-200/50 shadow-sm">
                                                    <FaUsers className="text-2xl text-green-600" />
                                                </div>
                                                <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                                                    {child.name}
                                                </h3>
                                                <p className="text-sm text-green-600 line-clamp-1 mt-1">{child.hindiName}</p>
                                                <p className="text-xs text-gray-500 mt-2 bg-gray-50 px-2 py-1 rounded-full">Born: {child.birthYear}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        );
    };

    const renderFamilyMember = (member: FamilyMember, level: number = 0) => {
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
                            <div className={`p-3 rounded-full ${isMatched ? 'bg-emerald-100' : 'bg-green-50'} mb-3 border border-green-200/50 shadow-sm`}>
                                <FaUsers className={`text-2xl ${isMatched ? 'text-emerald-600' : 'text-green-600'}`} />
                            </div>
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
        <div className="relative min-h-screen w-full overflow-hidden">
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
                    {/* Header with Navigation */}
                    <div className="text-center relative">
                        <div className="absolute top-0 right-0">
                            <button
                                onClick={() => setShowHelp(!showHelp)}
                                className="p-2 rounded-full hover:bg-white/50 transition-colors"
                                title="Help"
                            >
                                <FaInfoCircle className="text-emerald-600 text-xl" />
                            </button>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                            Village Family Tree
                        </h1>
                        <h2 className="text-xl md:text-2xl text-emerald-600 mb-8">
                            गांव का वंशवृक्ष
                        </h2>

                        {/* Quick Navigation */}
                        <div className="flex justify-center space-x-4 mb-8">
                            <a href="/" className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50">
                                <FaHome className="text-emerald-600" />
                                <span>Home</span>
                            </a>
                            <a href="/gallery" className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50">
                                <FaUserFriends className="text-emerald-600" />
                                <span>Gallery</span>
                            </a>
                            <a href="/map" className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md border border-green-200/50 hover:border-green-300/50">
                                <FaMapMarkerAlt className="text-emerald-600" />
                                <span>Map</span>
                            </a>
                        </div>
                    </div>

                    {/* Help Tooltip */}
                    {showHelp && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-lg mx-auto mb-8 border border-green-200/50"
                        >
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">How to Navigate</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span>Click on any family member to view their details</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span>Use the expand/collapse buttons to show/hide children</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span>Search for specific family members using the search bar</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                    <span>Hover over cards to see additional information</span>
                                </li>
                            </ul>
                        </motion.div>
                    )}

                    {/* Search with Results Display */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search by name..."
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
                    </div>

                    {/* Search Results */}
                    {searchTerm && filteredFamilyData.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {filteredFamilyData.map(member => renderSearchResult(member))}
                        </motion.div>
                    )}

                    {/* Full Family Tree Visualization */}
                    <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200/50">
                        <div className="overflow-x-auto pb-4">
                            <div className="min-w-max px-4">
                                {filteredFamilyData.filter(member => !member.parentId).map(member => renderFamilyMember(member))}
                            </div>
                        </div>
                    </div>

                    {/* Selected Person Details Modal */}
                    {selectedPerson && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                            onClick={() => setSelectedPerson(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-gradient-to-br from-white to-green-50/80 backdrop-blur-sm rounded-xl p-6 max-w-lg w-full shadow-xl border border-green-200/50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        {selectedPerson.name}
                                    </h3>
                                    <button
                                        onClick={() => setSelectedPerson(null)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        ×
                                    </button>
                                </div>
                                <p className="text-xl text-emerald-600 mb-4">{selectedPerson.hindiName}</p>

                                <div className="space-y-4">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200/50">
                                        <h4 className="text-sm font-medium text-emerald-600">Spouse</h4>
                                        <p className="text-gray-800">{selectedPerson.spouse}</p>
                                        <p className="text-emerald-600">{selectedPerson.spouseHindiName}</p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200/50">
                                        <h4 className="text-sm font-medium text-emerald-600">Occupation</h4>
                                        <p className="text-gray-800">{selectedPerson.occupation}</p>
                                        <p className="text-emerald-600">{selectedPerson.occupationHindi}</p>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-200/50">
                                        <h4 className="text-sm font-medium text-emerald-600">Birth Year</h4>
                                        <p className="text-gray-800">{selectedPerson.birthYear}</p>
                                    </div>
                                </div>

                                <button
                                    className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-sm hover:shadow-md"
                                    onClick={() => setSelectedPerson(null)}
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default AncestryPage;