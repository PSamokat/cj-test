import { createSelector } from 'reselect';
import { compareItemsFn } from 'src/common/utils/items-helpers';
import { RootState } from 'src/store/index';

const selectItems = (state: RootState) => state.fileManager.items;

export const rootDirsSelector = createSelector(selectItems, (items) =>
    items.filter((item) => !item.parentId));

export function childDirsSelector(id: string) {
    return createSelector(selectItems, (items) =>
        items
            .filter((item) => item.parentId === id)
            .sort(compareItemsFn));
}
