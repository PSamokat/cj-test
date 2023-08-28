import { styled } from '@mui/system';

interface SidebarProps {
    width: number;
}

export const Application = styled('div')`
    min-height: 100vh;
    background-color: #202020;
`;
export const Container = styled('div')`
    display: flex;
`;

export const Sidebar = styled('div')<SidebarProps>`
    min-width: 300px;
    height: 100vh;
    background-color: #232323;
    width: ${({ width }) => `${width}px`};
    overflow: auto;
    scrollbar-width: thin;
`;

export const Content = styled('div')`
    flex-grow: 1;
    min-width: 300px;
`;

export const Resizer = styled('div')`
    width: 4px;
    height: 100vh;
    align-self: center;
    cursor: ew-resize;
    transform: translateX(-2px);
`;
