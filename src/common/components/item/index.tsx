import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    AddBox, Delete, Folder, MovieCreationOutlined,
} from '@mui/icons-material';
import ChevronIcon from 'src/common/assets/chevron.svg';
import { ItemType } from 'src/common/types/item';
import { RootState } from 'src/store';

import {
    ActionButtons, Container, Dropdown, Info, ItemName, Nested, SelectMarker,
} from './styled';

interface ItemProps {
    selfId?: string;
    name?: string;
    type?: ItemType;
    selectedIdHook: [string, React.Dispatch<React.SetStateAction<string>>];
}

const Item: React.FC<ItemProps> = ({
    selfId,
    type,
    name,
    selectedIdHook: [selectedId, setSelectedId],
}) => {
    const [isOpenNestedSequence, setIsOpenNestedSequence] = useState<boolean>(false);
    const isItemSelect = selectedId === selfId;
    const nestedFiles = useSelector((state: RootState) =>
        state.fileManager.items.filter((item) => item.parentId === selfId));
    const handleOnOpenNestedFiles = () => {
        setIsOpenNestedSequence((prevIsOpen) => !prevIsOpen);
    };
    const handleOnSelectSequence = () => {
        setSelectedId(selfId);
    };

    return (
        <React.Fragment>
            <Container isSelected={ isItemSelect } onClick={ handleOnSelectSequence }>
                <Info>
                    <SelectMarker isSelected={ isItemSelect } />

                    { type === ItemType.FOLDER ? (
                        <React.Fragment>
                            <Folder sx={ { color: '#CECECE', fontSize: 14 } } />
                            <Dropdown
                                onClick={ handleOnOpenNestedFiles }
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
                <ActionButtons isSelected={ isItemSelect }>
                    <AddBox sx={ { color: '#CECECE', fontSize: 14 } } />
                    <Delete sx={ { color: '#CECECE', fontSize: 14 } } />
                </ActionButtons>
            </Container>
            { isOpenNestedSequence && (
                <Nested>
                    { nestedFiles.map((item) => (
                        <Item
                            selfId={ item.id }
                            name={ item.name }
                            type={ item.type }
                            selectedIdHook={ [selectedId, setSelectedId] }
                        />
                    )) }
                </Nested>
            ) }
        </React.Fragment>
    );
};

export default Item;
