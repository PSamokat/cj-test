import styled from '@emotion/styled/macro';

interface ModalWindowProps {
    isVisible?: boolean;
}
export const ModalWindow = styled('div')<ModalWindowProps>`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
    z-index: 1;
`;

export const ModalDialog = styled('div')`
    display: flex;
    flex-direction: column;
    width: 28.2%;
    height: 25.7%;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #333;
    background: #232323;
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.3);
`;

export const Header = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Path = styled('div')`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #cecece;
`;

export const RootPath = styled('div')`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 20px;
    border-radius: 5px;
    background: #323232;
`;
export const RootFolderName = styled('div')`
    font-size: 14px;
    font-weight: 500;
    color: #cecece;
`;

export const CloseButton = styled('button')`
    position: relative;
    top: -5px;
    left: 5px;
`;

export const ItemName = styled('div')`
    display: flex;
    padding: 10px;
    gap: 10px;
    margin-top: 10px;
`;

export const Input = styled('input')`
    font-size: 22px;
    font-weight: 400;
    color: #acacac;
`;

export const Footer = styled('div')`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    padding-top: 12px;
    border-top: 1px solid #333333;
`;

export const ConfirmButton = styled('button')`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 3px;
    background-color: #e08855;
    color: #333333;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: #c2744a;
        &:active {
            transform: scale(0.98);
            box-shadow: inset 0 8px 40px 0 rgba(0, 0, 0, 0.3);
        }
    }
`;
