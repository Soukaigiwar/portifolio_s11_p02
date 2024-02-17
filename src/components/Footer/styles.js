import styled from "styled-components"

export const Container = styled.footer`
display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem auto 0;
    padding: 0 12.3rem;
    
    height: 4rem;
    
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > p a {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-left: 1rem;
    }
`
