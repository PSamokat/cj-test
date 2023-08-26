export type Item = {
    id: string;
    parentId: string | null;
    name: string;
    type: ItemType;
};

export enum ItemType {
    FOLDER = 'folder',
    FILE = 'file'
}
