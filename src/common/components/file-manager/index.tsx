import React, {
    createContext, useCallback, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { AddBox } from '@mui/icons-material';
import AddItemModal from 'src/common/components/add-modal';
import DeleteItemModal from 'src/common/components/delete-modal';
import Item from 'src/common/components/item';
import { ItemType } from 'src/common/types/item';
import { compareItemsFn } from 'src/common/utils/items-helpers';
import { RootState } from 'src/store';

import { AddFolderButton, Container } from './styled';

interface AddItemModalContextType {
    isAddModalVisible?: boolean;
    addItemType?: ItemType;
}

interface ModalContextType {
    setAddItemModalContext?: React.Dispatch<React.SetStateAction<AddItemModalContextType>>;
    setIsDeleteItemModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    addItemModalContext?: AddItemModalContextType;
    itemId?: string;
}
export const ModalContext = createContext<ModalContextType>({});

const FileManager: React.FC = () => {
    const files = useSelector((state: RootState) => state.fileManager.items);
    const rootFiles = useMemo(
        () => files
            .filter((item) => !item.parentId)
            .sort(compareItemsFn),
        [files.length],
    );
    const [selectedId, setSelectedId] = useState<string | null>('');
    const [addItemModalContext, setAddItemModalContext] = useState<AddItemModalContextType>({});
    const [isDeleteItemModalVisible, setIsDeleteItemModalVisible] = useState<boolean>(false);

    const handleItemSelect = useCallback((id: string) => {
        setSelectedId(id);
    }, []);

    const handleOnAddFolder = () => {
        setSelectedId('');
        setAddItemModalContext({
            isAddModalVisible: true,
            addItemType: ItemType.FOLDER,
        });
    };

    return (
        <Container>
            <ModalContext.Provider
                value={ {
                    setAddItemModalContext,
                    setIsDeleteItemModalVisible,
                    addItemModalContext,
                    itemId: selectedId,
                } }
            >
                <AddFolderButton onClick={ handleOnAddFolder }>
                    <AddBox sx={ { color: '#CECECE', fontSize: 14 } } />
                    <div>Add Folder</div>
                </AddFolderButton>
                { rootFiles.map((file) => (
                    <Item
                        key={ file.id }
                        type={ file.type }
                        name={ file.name }
                        selfId={ file.id }
                        selectedId={ selectedId }
                        onSelect={ handleItemSelect }
                    />
                )) }
                <DeleteItemModal isVisible={ isDeleteItemModalVisible } />
                <AddItemModal isVisible={ addItemModalContext.isAddModalVisible } />
            </ModalContext.Provider>
        </Container>
    );
};

export default FileManager;
