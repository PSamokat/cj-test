import React, { useRef, useState } from 'react';

import FileManager from './file-manager';
import {
    Application, Container, Content, Resizer, Sidebar,
} from './styled';

function App() {
    const [sidebarWidth, setSidebarWidth] = useState<number>(500);

    const resizingRef = useRef<boolean>(false);

    const handleResizeStart = () => {
        resizingRef.current = true;
    };

    const handleResizeEnd = () => {
        resizingRef.current = false;
    };

    const handleResize: (event: React.MouseEvent) => void = (event) => {
        if (!resizingRef.current) return;

        const newWidth = event.clientX;

        setSidebarWidth(newWidth);
    };

    return (
        <Application>
            <Container onMouseMove={ handleResize } onMouseUp={ handleResizeEnd }>
                <Sidebar width={ sidebarWidth }>
                    <FileManager />
                </Sidebar>
                <Resizer onMouseDown={ handleResizeStart } />
                <Content>{ /* Main content */ }</Content>
            </Container>
        </Application>
    );
}

export default App;
