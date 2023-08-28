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
    align-items: center;
    width: 28.2%;
    height: 25.7%;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #333;
    background: #232323;
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.3);
`;

export const ModalIcon = styled('div')`
    margin-top: 32px;
`;

export const ItemPath = styled('div')`
    width: 80%;
    text-align: center;
    margin-top: 41px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: #cecece;
`;

export const ModalMessage = styled('div')`
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #cecece;
`;

export const ActionButtons = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    width: 100%;
    margin-top: 41px;
`;

export const CancelButton = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 50%;
    padding: 6px 14px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    background-color: #393939;
    color: #cecece;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: #424242;
        &:active {
            transform: scale(0.98);
            box-shadow: inset 0 8px 40px 0 rgba(0, 0, 0, 0.3);
        }
    }
`;

export const ConfirmButton = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 6px 14px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    background-color: #5e3838;
    color: #db5c5c;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: #6b2f2f;
        &:active {
            transform: scale(0.98);
            box-shadow: inset 0 8px 40px 0 rgba(0, 0, 0, 0.3);
        }
    }
`;
