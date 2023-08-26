import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import Item from '../item';

import { Container } from './styled';

const FileManager: React.FC = () => {
    const selectedIdHook = useState<string>('');
    const files = useSelector((state: RootState) =>
        state.fileManager.items.filter((item) => !item.parentId));

    return (
        <Container>
            { files.map((file) => (
                <Item type={ file.type } name={ file.name } selfId={ file.id } selectedIdHook={ selectedIdHook } />
            )) }
        </Container>
    );
};

export default FileManager;
