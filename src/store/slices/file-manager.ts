import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item, ItemType } from 'src/common/types/item';
import { deleteItemAndChildren } from 'src/common/utils/items-helpers';
import { v4 as uuid } from 'uuid';

import { mockItems } from './mock';

interface InitialState {
    items: Item[];
}

interface AddItemPayloadType {
    name: string;
    type: ItemType;
    parentId: string | null;
}

interface DeleteItemPayloadType {
    idToRemove: string;
}

const initialState: InitialState = {
    items: mockItems,
};

const fileManager = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem(state: InitialState, action: PayloadAction<AddItemPayloadType>) {
            state.items.push({
                name: action.payload.name,
                type: action.payload.type,
                parentId: action.payload.parentId,
                id: uuid(),
            });
        },
        deleteItem(state: InitialState, action: PayloadAction<DeleteItemPayloadType>) {
            state.items = deleteItemAndChildren(action.payload.idToRemove, state.items);
        },
    },
});

export const itemsActions = fileManager.actions;

export default fileManager.reducer;
