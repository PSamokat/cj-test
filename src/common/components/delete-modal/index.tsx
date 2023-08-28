import React, { useContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteIcon from 'src/common/assets/bin.svg';
import { ModalContext } from 'src/common/components/file-manager';
import { findItemPath } from 'src/common/utils/items-helpers';
import { RootState } from 'src/store';

import { itemsActions } from '../../../store/slices/file-manager';

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
    const dispatch = useDispatch();
    const files = useSelector((state: RootState) => state.fileManager.items);
    const itemPath = useMemo(() => findItemPath(files, modalContext.itemId), [modalContext.itemId]);

    const handleOnDeleteItem = () => {
        dispatch(itemsActions.deleteItem({ idToRemove: modalContext.itemId }));
        modalContext.setIsDeleteItemModalVisible(false);
    };

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
                    <ConfirmButton onClick={ handleOnDeleteItem }>Yes, delete</ConfirmButton>
                </ActionButtons>
            </ModalDialog>
        </ModalWindow>
    );
};

export default DeleteItemModal;
