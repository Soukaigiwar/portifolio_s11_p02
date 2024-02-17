import styled from "styled-components"

export const Container = styled.div`
    > textarea {
        width: 100%;
        height: 27.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.GRAY_600};
        border: none;
        resize: none;

        margin-bottom: 8px;
        border-radius: 1rem;
        padding: 1.9rem 1.6rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        &:focus {
            outline: none;
        }

        &::-webkit-scrollbar {
            width: 2.4rem;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb
        {
            height: 4rem;
            border: .8rem solid;
            border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`