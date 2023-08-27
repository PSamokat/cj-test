import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import deleteIcon from 'src/common/assets/bin.svg';
import { ModalContext } from 'src/common/components/file-manager';

import { RootState } from '../../../store';
import { Item } from '../../types/item';

import {
    ActionButtons,
    CancelButton,
    ConfirmButton,
    ItemPath,
    ModalDialog,
    ModalIcon,
    ModalMessage,
    ModalWindow,
} from './styled';

const DeleteItemModal: React.FC = () => {
    const modalContext = useContext(ModalContext);
    const files = useSelector((state: RootState) => state.fileManager.items);
    const itemPath = useMemo(() => {
        const deleteItem = files.find((item) => item.id === modalContext.itemId);

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
    }, [modalContext.itemId]);

    return (
        <ModalWindow>
            <ModalDialog>
                <ModalIcon>
                    <img src={ deleteIcon } alt="delete" />
                </ModalIcon>
                <ItemPath>{ itemPath?.path }</ItemPath>
                <ModalMessage>Are you sure you want to delete this { itemPath?.type }?</ModalMessage>
                <ActionButtons>
                    <CancelButton onClick={ () => modalContext.setIsDeleteItemModalVisible(false) }>
                        No, cancel
                    </CancelButton>
                    <ConfirmButton>Yes, delete</ConfirmButton>
                </ActionButtons>
            </ModalDialog>
        </ModalWindow>
    );
};

export default DeleteItemModal;
