import styled from "styled-components"

export const Container = styled.span`
    display: inline-block;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 2.4rem;
        padding: 1.6rem;
        
        border: none;
        border-radius: 1rem;

        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE_800};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`
