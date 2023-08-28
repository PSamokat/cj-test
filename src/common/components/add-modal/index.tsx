import React, { useContext, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBox, Folder, MovieCreationOutlined } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';
import ChevronIcon from 'src/common/assets/chevron.svg';
import { ModalContext } from 'src/common/components/file-manager';
import { ItemType } from 'src/common/types/item';
import { RootState } from 'src/store';

import { itemsActions } from '../../../store/slices/file-manager';

import {
    CloseButton,
    ConfirmButton,
    Footer,
    Header,
    Input,
    ItemName,
    ModalDialog,
    ModalWindow,
    Path,
    RootFolderName,
    RootPath,
} from './styled';

const AddItemModal: React.FC = () => {
    const [itemName, setItemName] = useState<string>('');
    const modalContext = useContext(ModalContext);
    const dispatch = useDispatch();
    const files = useSelector((state: RootState) => state.fileManager.items);
    const rootFolder = useMemo(
        () => files.find((item) => item.id === modalContext.itemId),
        [modalContext.itemId],
    );
    const handleOnAddItem = () => {
        modalContext.setAddItemModalContext({ isAddModalVisible: false });
        dispatch(itemsActions.addItem({
            name: itemName,
            type: modalContext.addItemModalContext.addItemType,
            parentId: rootFolder?.id ? rootFolder.id : null,
        }));
    };

    return (
        <ModalWindow>
            <ModalDialog>
                <Header>
                    <Path>
                        <RootPath>
                            <Folder sx={ { color: '#CECECE', fontSize: 14 } } />
                            <RootFolderName>{ rootFolder?.name || 'PROJECT' }</RootFolderName>
                        </RootPath>
                        <img src={ ChevronIcon } alt="dropdown" />
                        New { modalContext?.addItemModalContext?.addItemType }
                    </Path>
                    <CloseButton
                        onClick={ () =>
                            modalContext.setAddItemModalContext({ isAddModalVisible: false }) }
                    >
                        <ClearIcon sx={ { color: '#CECECE' } } />
                    </CloseButton>
                </Header>
                <ItemName>
                    { modalContext?.addItemModalContext?.addItemType === ItemType.FILE ? (
                        <MovieCreationOutlined sx={ { color: '#626262' } } />
                    ) : (
                        <Folder sx={ { color: '#626262' } } />
                    ) }
                    <Input
                        value={ itemName }
                        onChange={ (event) => setItemName(event.target.value) }
                        placeholder={ `Enter ${modalContext?.addItemModalContext?.addItemType} name` }
                        autoFocus={ true }
                    />
                </ItemName>
                <Footer>
                    <ConfirmButton onClick={ handleOnAddItem }>
                        <AddBox sx={ { color: '#333333' } } />
                        Add { modalContext?.addItemModalContext?.addItemType }
                    </ConfirmButton>
                </Footer>
            </ModalDialog>
        </ModalWindow>
    );
};

export default AddItemModal;
