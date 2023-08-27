import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AddBox, Folder, MovieCreationOutlined } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear';

import { RootState } from '../../../store';
import ChevronIcon from '../../assets/chevron.svg';
import { ItemType } from '../../types/item';
import { ModalContext } from '../file-manager';

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
    const modalContext = useContext(ModalContext);
    const files = useSelector((state: RootState) => state.fileManager.items);
    const rootFolder = useMemo(
        () => files.find((item) => item.id === modalContext.itemId),
        [modalContext.itemId],
    );

    return (
        <ModalWindow>
            <ModalDialog>
                <Header>
                    <Path>
                        <RootPath>
                            <Folder sx={ { color: '#CECECE', fontSize: 14 } } />
                            <RootFolderName>{ rootFolder?.name }</RootFolderName>
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
                        placeholder={ `Enter ${modalContext?.addItemModalContext?.addItemType} name` }
                        autoFocus={ true }
                    />
                </ItemName>
                <Footer>
                    <ConfirmButton>
                        <AddBox sx={ { color: '#333333' } } />
                        Add { modalContext?.addItemModalContext?.addItemType }
                    </ConfirmButton>
                </Footer>
            </ModalDialog>
        </ModalWindow>
    );
};

export default AddItemModal;
