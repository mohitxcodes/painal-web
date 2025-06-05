export interface IVillageMember {
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
    profilePhoto?: string;
}