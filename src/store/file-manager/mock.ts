import { Item, ItemType } from '../../common/types/item';

export const mockItems: Item[] = [
    {
        name: 'ASSETS',
        parentId: null,
        type: ItemType.FOLDER,
        id: '1',
    },
    {
        name: 'BARR',
        parentId: null,
        type: ItemType.FOLDER,
        id: '2',
    },
    {
        name: 'LNDG',
        parentId: '1',
        type: ItemType.FOLDER,
        id: '3',
    },
    {
        name: 'BARR_100',
        parentId: '2',
        type: ItemType.FILE,
        id: '4',
    },
    {
        name: 'BARR_105',
        parentId: '2',
        type: ItemType.FILE,
        id: '9',
    },
    {
        name: 'LNDG_0120',
        parentId: '3',
        type: ItemType.FILE,
        id: '5',
    },
    {
        name: 'LNDG_0121',
        parentId: '3',
        type: ItemType.FILE,
        id: '6',
    },
    {
        name: 'LNDG_0123',
        parentId: '3',
        type: ItemType.FILE,
        id: '7',
    },
    {
        name: 'LNDG_0125',
        parentId: '3',
        type: ItemType.FILE,
        id: '8',
    },
];
