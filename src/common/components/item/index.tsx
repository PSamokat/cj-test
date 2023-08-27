import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Delete, Folder, MovieCreationOutlined,
} from '@mui/icons-material';
import ChevronIcon from 'src/common/assets/chevron.svg';
import { ItemType } from 'src/common/types/item';
import { RootState } from 'src/store';

import AddMenu from '../add-menu';
import { ModalContext } from '../file-manager';

import {
    ActionButtons,
    Button,
    Container,
    Dropdown,
    Info,
    ItemName,
    Nested,
    SelectMarker,
} from './styled';

interface ItemProps {
    selfId?: string;
    name?: string;
    type?: ItemType;
    selectedId?: string;
    onSelect?: (id: string) => void;
}

const Item: React.FC<ItemProps> = ({
    selfId,
    type,
    name,
    onSelect,
    selectedId,
}) => {
    const [isOpenNestedSequence, setIsOpenNestedSequence] = useState<boolean>(false);
    const nestedFiles = useSelector((state: RootState) =>
        state.fileManager.items.filter((item) => item.parentId === selfId));
    const isSelected = !selectedId.localeCompare(selfId);
    const modalContext = useContext(ModalContext);

    return (
        <React.Fragment>
            <Container isSelected={ isSelected } onClick={ () => onSelect(selfId) }>
                <Info>
                    <SelectMarker isSelected={ isSelected } />
                    { type === ItemType.FOLDER ? (
                        <React.Fragment>
                            <Folder sx={ { color: '#CECECE', fontSize: 14 } } />
                            <Dropdown
                                onClick={ () => setIsOpenNestedSequence((prevIsOpen) => !prevIsOpen) }
                                isOpen={ isOpenNestedSequence }
                            >
                                <img src={ ChevronIcon } alt="dropdown" />
                            </Dropdown>
                        </React.Fragment>
                    ) : (
                        <MovieCreationOutlined sx={ { color: '#CECECE', fontSize: 14 } } />
                    ) }
                    <ItemName>{ name }</ItemName>
                </Info>
                <ActionButtons isSelected={ isSelected }>
                    { type === ItemType.FOLDER && (
                        <AddMenu />
                    ) }
                    <Button onClick={ () => modalContext.setIsDeleteItemModalVisible(true) }>
                        <Delete sx={ { color: '#CECECE', fontSize: 14 } } />
                    </Button>
                </ActionButtons>
            </Container>
            { isOpenNestedSequence && (
                <Nested>
                    { nestedFiles.map((item) => (
                        <Item
                            selfId={ item.id }
                            name={ item.name }
                            type={ item.type }
                            selectedId={ selectedId }
                            onSelect={ onSelect }
                        />
                    )) }
                </Nested>
            ) }
        </React.Fragment>
    );
};

export default Item;
