import React, { useContext, useState } from 'react';
import { Delete, Folder, MovieCreationOutlined } from '@mui/icons-material';
import ChevronIcon from 'src/common/assets/chevron.svg';
import AddMenu from 'src/common/components/add-menu';
import { ModalContext } from 'src/common/components/file-manager';
import { useSelectorFactory } from 'src/common/hooks/selector-factory';
import { ItemType } from 'src/common/types/item';
import { childDirsSelector } from 'src/store/file-manager/selectiors';

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
    selfId, type, name, onSelect, selectedId,
}) => {
    const [isOpenNestedSequence, setIsOpenNestedSequence] = useState<boolean>(false);
    const childDirs = useSelectorFactory(() => childDirsSelector(selfId), [selfId]);
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
                                isVisible={ !!childDirs.length }
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
                    { type === ItemType.FOLDER && <AddMenu /> }
                    <Button onClick={ () => modalContext.setIsDeleteItemModalVisible(true) }>
                        <Delete sx={ { color: '#CECECE', fontSize: 14 } } />
                    </Button>
                </ActionButtons>
            </Container>
            { isOpenNestedSequence && (
                <Nested>
                    { childDirs.map((item) => (
                        <Item
                            key={ item.id }
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
