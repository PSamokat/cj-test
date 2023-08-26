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
    min-height: 100vh;
    background-color: #232323;
    width: ${({ width }) => `${width}px`};
    overflow: hidden;
`;

export const Content = styled('div')`
    flex-grow: 1;
    min-width: 300px;
`;

export const Resizer = styled('div')`
    width: 4px;
    height: 20px;
    align-self: center;
    cursor: ew-resize;
    background: #4f4f4f;
    transform: translateX(-2px);
`;
