import styled from '@emotion/styled/macro';

interface MenuProps {
    isOpen: boolean;
}

export const Menu = styled('div')<MenuProps>`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    min-width: fit-content;
    border-radius: 3px;
    background: #2c2c2c;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    transform: translate(-59%, 75%);
`;

export const Label = styled('div')`
    font-size: 16px;
    font-weight: 400;
    color: #cecece;
`;

export const MenuButton = styled('button')`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: max-content;
    padding: 10px 12px;
    border-radius: 3px;
    &:hover {
        background-color: #343434;
    }
`;

export const AddButton = styled('button')`
    display: flex;
    align-items: center;
`;
