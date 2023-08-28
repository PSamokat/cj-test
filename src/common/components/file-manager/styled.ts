import { styled } from '@mui/system';

export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 8px;
`;

export const AddFolderButton = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 34px;
    border-radius: 3px;
    transition: all 0.1s ease-in-out;
    div {
        font-size: 14px;
        color: #cecece;
    }
    &:hover {
        background-color: #343434;
        &:active {
            transform: scale(0.98);
            box-shadow: inset 0 8px 40px 0 rgba(0, 0, 0, 0.3);
        }
    }
`;
