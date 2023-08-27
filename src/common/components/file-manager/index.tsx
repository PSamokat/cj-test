import React, { createContext, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteItemModal from 'src/common/components/delete-modal';
import Item from 'src/common/components/item';
import { RootState } from 'src/store';

import { ItemType } from '../../types/item';
import AddItemModal from '../add-modal';

import { Container } from './styled';

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
    const [selectedId, setSelectedId] = useState<string>('');
    const [addItemModalContext, setAddItemModalContext] = useState<AddItemModalContextType>({});
    const [isDeleteItemModalVisible, setIsDeleteItemModalVisible] = useState<boolean>(false);

    const handleItemSelect = useCallback((id: string) => {
        setSelectedId(id);
    }, []);

    const files = useSelector((state: RootState) =>
        state.fileManager.items.filter((item) => !item.parentId));

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
                { files.map((file) => (
                    <Item
                        key={ file.id }
                        type={ file.type }
                        name={ file.name }
                        selfId={ file.id }
                        selectedId={ selectedId }
                        onSelect={ handleItemSelect }
                    />
                )) }
                { isDeleteItemModalVisible && <DeleteItemModal /> }
                { addItemModalContext.isAddModalVisible && <AddItemModal /> }
            </ModalContext.Provider>
        </Container>
    );
};

export default FileManager;
