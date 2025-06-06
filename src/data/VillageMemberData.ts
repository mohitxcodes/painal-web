import { IVillageMember } from "../interface/IVillageMember";

export const familyData: IVillageMember[] = [
    // First Generation
    {
        id: 1,
        name: "Sri Ganeshya Namh",
        hindiName: "श्री गणेश्य नमः",
        birthYear: 1800,
        children: [2],
        spouse: "Devi",
        spouseHindiName: "देवी",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Second Generation
    {
        id: 2,
        name: "Rampay Thakur",
        hindiName: "रामप्य ठाकुर",
        birthYear: 1825,
        parentId: 1,
        children: [3],
        spouse: "Lakshmi",
        spouseHindiName: "लक्ष्मी",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Third Generation
    {
        id: 3,
        name: "Teka Sahi",
        hindiName: "टेका साहि",
        birthYear: 1850,
        parentId: 2,
        children: [4, 5],
        spouse: "Sita",
        spouseHindiName: "सीता",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Fourth Generation
    {
        id: 4,
        name: "Jeuavdhar Sahi",
        hindiName: "जुअवधर साहि",
        birthYear: 1875,
        parentId: 3,
        children: [6],
        spouse: "Radha",
        spouseHindiName: "राधा",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },
    {
        id: 5,
        name: "Pardhar Sahi",
        hindiName: "पर्द्धर साहि",
        birthYear: 1878,
        parentId: 3,
        children: [],
        spouse: "Ganga",
        spouseHindiName: "गंगा",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Fifth Generation
    {
        id: 6,
        name: "Chaudhary Gapal Singh",
        hindiName: "चौधरी गोपाल सिंह",
        birthYear: 1900,
        parentId: 4,
        children: [7, 8],
        spouse: "Maya",
        spouseHindiName: "माया",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Sixth Generation
    {
        id: 7,
        name: "Annu Singh",
        hindiName: "अन्नू सिंह",
        birthYear: 1925,
        parentId: 6,
        children: [9, 10, 11, 12],
        spouse: "Kamla",
        spouseHindiName: "कमला",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },
    {
        id: 8,
        name: "Ratan Singh",
        hindiName: "रतन सिंह",
        birthYear: 1927,
        parentId: 6,
        children: [],
        spouse: "Sushila",
        spouseHindiName: "सुशीला",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },

    // Seventh Generation
    {
        id: 9,
        name: "Rup Ray",
        hindiName: "रूप राय",
        birthYear: 1950,
        parentId: 7,
        children: [],
        spouse: "Meena",
        spouseHindiName: "मीना",
        occupation: "Teacher",
        occupationHindi: "शिक्षक",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },
    {
        id: 10,
        name: "Lachhi Ray",
        hindiName: "लच्छी राय",
        birthYear: 1952,
        parentId: 7,
        children: [],
        spouse: "Rekha",
        spouseHindiName: "रेखा",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },
    {
        id: 11,
        name: "Bheli Ray",
        hindiName: "भेली राय",
        birthYear: 1955,
        parentId: 7,
        children: [],
        spouse: "Sunita",
        spouseHindiName: "सुनीता",
        occupation: "Farmer",
        occupationHindi: "किसान",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    },
    {
        id: 12,
        name: "Jay Singh Ray",
        hindiName: "जय सिंह राय",
        birthYear: 1958,
        parentId: 7,
        children: [],
        spouse: "Lila",
        spouseHindiName: "लीला",
        occupation: "Engineer",
        occupationHindi: "इंजीनियर",
        profilePhoto: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000"
    }
];