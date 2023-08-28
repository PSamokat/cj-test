import { Item, ItemType } from 'src/common/types/item';

type FindItemPathFnType = (
    files: Item[],
    itemId: string
) => {
    path: string;
    type: ItemType;
};

type RemoveItemAndChildrenFnType = (id: string, items: Item[]) => Item[];

export const findItemPath: FindItemPathFnType = (files, itemId) => {
    const deleteItem = files.find((item) => item.id === itemId);

    if (!deleteItem) {
        return null;
    }

    const idToItemMap: { [id: string]: Item } = {};

    files.forEach((item) => {
        idToItemMap[item.id] = item;
    });

    const path: string[] = [deleteItem.name];

    let currentId: string | null = deleteItem.parentId;

    while (currentId !== null) {
        const parentItem = idToItemMap[currentId];

        if (parentItem) {
            path.unshift(parentItem.name);
            currentId = parentItem.parentId;
        } else {
            break;
        }
    }

    return {
        path: `PROJECT/${path.join('/')}`,
        type: deleteItem.type,
    };
};

export const deleteItemAndChildren: RemoveItemAndChildrenFnType = (id, items) => {
    const idToItemMap: { [id: string]: Item } = {};

    items.forEach((item) => {
        idToItemMap[item.id] = item;
    });

    const stack: string[] = [id];
    const newItems: Item[] = [...items];

    while (stack.length > 0) {
        const currentId = stack.pop();

        if (currentId) {
            const currentItem = idToItemMap[currentId];

            if (currentItem) {
                newItems.splice(
                    newItems.findIndex((item) => item.id === currentId),
                    1,
                );
                items
                    .filter((item) => item.parentId === currentId)
                    .forEach((childItem) => {
                        stack.push(childItem.id);
                    });
            }
        }
    }

    return newItems;
};

export const compareItemsFn: (a: Item, b: Item) => number = (a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    if (a.type === ItemType.FOLDER) return -1;
    if (b.type === ItemType.FOLDER) return 1;

    return 0;
};
