import styled from "styled-components"

export const Container = styled.div`
    display: inline-flex;

    background-color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_800};

    color: ${({ theme }) => theme.COLORS.WHITE_800};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.GRAY_900}` : "none"};

    border-radius: 1rem;
    padding: 1.6rem;

    
    
    

    > button {
        border: none;
        background: none;
    }
    
    .button-delete {
        display: flex;
        align-items: center;
        
        color: ${({ theme }) => theme.COLORS.PINK};
        cursor: pointer;
        
        > svg {
            font-size: 2rem;
        }
    }
    
    .button-add {
        display: flex;
        align-items: center;
        
        color: ${({ theme }) => theme.COLORS.PINK}; 
        cursor: pointer;
        
        > svg {
            font-size: 2rem;
        }
    }
    
    > input {
        color: ${({ theme }) => theme.COLORS.WHITE_800};
        background: transparent;
        border: none;
        font-size: 1.6rem;
        cursor: ${({ isNew }) => isNew ? "text" : "default"};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_900};
        }

        &:focus {
            outline: none;
        }

        
    }
`
