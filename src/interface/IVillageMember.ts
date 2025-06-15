export interface IVillageMember {
    id: number;
    name: string;
    hindiName: string;
    fatherName?: string;
    fatherNameHindi?: string;
    birthYear?: string;
    children: number[];
    parentId?: number;
    profilePhoto?: string;
}

export interface IFamilies {
    id: number;
    name: string;
    hindiName: string;
    head: string;
    headHindi: string;
    familyMembers: IVillageMember[];

}