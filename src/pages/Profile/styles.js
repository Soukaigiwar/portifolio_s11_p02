import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 14.4rem;
        display: flex;
        align-items: center;
        padding: 0 14.4rem;

        background: ${({ theme }) => theme.COLORS.DARK_PINK };
    }
`
export const Form = styled.form`
    max-width: 34rem;
    margin: 6.4rem auto 0;
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        
        > div:nth-child(3){
            margin-top: 2.4rem;
        }
    }

    > #button {
        margin-top: 2.4rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -15.4rem auto 6.4rem;
    width: 18.6rem;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        width: 4.8rem;
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.PINK };
        border-radius: 50%;
        position: absolute;
        right: 1rem;
        bottom: .4rem;

        input {
            display: none;
        }

        svg {
            position: absolute;
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }
`