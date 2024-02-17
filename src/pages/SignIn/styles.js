import styled from "styled-components"
import backgroundImg from "../../assets/img/background.png"

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-areas: 
            "form bg-image "
            "foot foot ";
    grid-template-rows: 1fr 6rem;
    grid-template-columns: auto 1fr;
    align-items: stretch;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-area: form;

    margin-left: 13.4rem;
    margin-right: 16rem;

    justify-content: center;
    align-items: flex-start;

    > h1 {
        font-size: 4.8rem;
        line-height: 6.3rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }

    > div {
        > div {
            display:flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        
        > h2 {
            margin: 4.8rem 0;
            font-size: 2.4rem;
            line-height: 6.3rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE_900};
        }
    }

    #button {
        margin-top: 2.4rem;
    }
    
    > a {
        margin: 4.2rem auto; 
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    grid-area: bg-image;
`

export const Foot = styled.footer`
    grid-area: foot;
`
