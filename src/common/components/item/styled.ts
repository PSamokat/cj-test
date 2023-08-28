import styled from '@emotion/styled/macro';

interface SelectMarkerProps {
    isSelected?: boolean;
}
interface ContainerProps {
    isSelected?: boolean;
}
interface DropdownProps {
    isOpen?: boolean;
    isVisible?: boolean;
}
interface ActionButtonsProps {
    isSelected?: boolean;
}
export const Info = styled('div')`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 0;
    margin-right: 10px;
`;

export const Button = styled('button')`
    display: flex;
    align-items: center;
`;

export const SelectMarker = styled('div')<SelectMarkerProps>`
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
    width: 3px;
    height: 20px;
    margin-right: 7px;
    background-color: #ffb800;
    border-radius: 3px;
`;
export const Dropdown = styled('div')<DropdownProps>`
    display: flex;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    align-items: center;
    padding: 4px;
    cursor: pointer;
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : 0)});
    transition: transform 0.1s ease-in-out;
`;

export const Nested = styled('div')`
    margin-left: 20px;
`;

export const ItemName = styled('div')`
    font-size: 16px;
    font-weight: 400;
    color: #cecece;
`;

export const ActionButtons = styled('div')<ActionButtonsProps>`
    position: relative;
    visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 8px 0;
`;

export const Container = styled('div')<ContainerProps>`
    display: flex;
    justify-content: space-between;
    min-width: fit-content;
    height: 34px;
    padding-right: 20px;
    margin: 2px 0;
    border-radius: 3px;
    background-color: ${({ isSelected }) => (isSelected ? '#343434' : 'none')};
    &:hover {
    background-color: #343434;
      ${ActionButtons} {
      visibility: visible;
    }
},
`;
