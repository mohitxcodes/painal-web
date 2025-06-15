import { IFamilies } from '../interface/IVillageMember'
import { mohitFamily, raviFamily } from '../data/FamilyData'


export const families: IFamilies[] = [
    {
        id: 1,
        name: "Mohit's Family",
        hindiName: "मोहित का परिवार",
        head: "Mohit Kumar",
        headHindi: "मोहित कुमार",
        familyMembers: mohitFamily
    },
    {
        id: 2,
        name: "Ravi's Family",
        hindiName: "मोहित का परिवार",
        head: "Ravi Singh",
        headHindi: "रवि सिंह",
        familyMembers: raviFamily,
    },
];