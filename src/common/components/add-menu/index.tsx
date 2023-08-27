import React, {
    forwardRef, Ref, useContext, useEffect, useRef, useState,
} from 'react';
import { AddBox, Folder, MovieCreationOutlined } from '@mui/icons-material';

import { ItemType } from '../../types/item';
import { ModalContext } from '../file-manager';

import {
    AddButton, Label, Menu, MenuButton,
} from './styled';

interface AddMenuProps {
    isOpen?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

type ExpectedComponent<T> = React.ComponentType<T> | React.ForwardRefExoticComponent<T>;
type ExpectedProps = {
    ref?: Ref<any>;
};

const AddMenu = forwardRef<any, AddMenuProps>(({ isOpen, setIsOpen }, ref) => {
    const modalContext = useContext(ModalContext);
    const handleOnAddFolder = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
        modalContext.setAddItemModalContext({
            isAddModalVisible: true,
            addItemType: ItemType.FOLDER,
        });
    };

    const handleOnAddSequence = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
        modalContext.setAddItemModalContext({
            isAddModalVisible: true,
            addItemType: ItemType.FILE,
        });
    };

    return (
        <React.Fragment>
            <AddButton onClick={ () => setIsOpen((prevIsOpen) => !prevIsOpen) }>
                <AddBox sx={ { color: '#CECECE', fontSize: 14 } } />
            </AddButton>
            { isOpen && (
                <Menu ref={ ref } isOpen={ isOpen }>
                    <MenuButton onClick={ handleOnAddFolder }>
                        <Folder sx={ { color: '#CECECE', fontSize: 14 } } />
                        <Label>Add Folder</Label>
                    </MenuButton>
                    <MenuButton onClick={ handleOnAddSequence }>
                        <MovieCreationOutlined sx={ { color: '#CECECE', fontSize: 14 } } />
                        <Label>Add Sequence</Label>
                    </MenuButton>
                </Menu>
            ) }
        </React.Fragment>
    );
});

function WithClickOutside<Props extends ExpectedProps>(
    OriginalComponent: ExpectedComponent<Props>,
) {
    const Component: React.FC<Props> = (componentProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const componentRef = useRef(null);

        useEffect(() => {
            const handleClickOutside: (event: MouseEvent) => void = (event) => {
                if (!componentRef?.current?.contains(event.target)) {
                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [componentRef]);

        return (
            <OriginalComponent
                ref={ componentRef }
                { ...componentProps }
                isOpen={ isOpen }
                setIsOpen={ setIsOpen }
            />
        );
    };

    return Component;
}

export default WithClickOutside(AddMenu);
