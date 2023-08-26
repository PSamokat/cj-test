import { createSlice } from '@reduxjs/toolkit';
import { Item, ItemType } from 'src/common/types/item';

interface InitialState {
    items: Item[];
}

const initialState: InitialState = {
    items: [{
        name: 'FOLDER1',
        parentId: null,
        type: ItemType.FOLDER,
        id: '1',
    },
    {
        name: 'FOLDER2',
        parentId: null,
        type: ItemType.FOLDER,
        id: '2',
    },
    {
        name: 'FOLDER3',
        parentId: '1',
        type: ItemType.FOLDER,
        id: '3',
    },
    {
        name: 'FILE1',
        parentId: '2',
        type: ItemType.FILE,
        id: '4',
    },
    {
        name: 'FILE2',
        parentId: '3',
        type: ItemType.FILE,
        id: '5',
    }],
};

const fileManager = createSlice({
    name: 'items',
    initialState,
    reducers: {},
});

export const itemsActions = fileManager.actions;

export default fileManager.reducer;
