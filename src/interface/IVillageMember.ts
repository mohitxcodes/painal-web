export interface IVillageMember {
    id: number;
    name: string;
    hindiName: string;
    fatherName: string;
    fatherNameHindi: string;
    birthYear?: number;
    children: number[];
    parentId?: number;
    spouse?: string;
    spouseHindiName?: string;
    occupation?: string;
    occupationHindi?: string;
    profilePhoto?: string;
}

export interface IFamilies {
    id: number;
    name: string;
    hindiName: string;
    head: string;
    headHindi: string;
    children: number;
    familyMembers: IVillageMember[];

}