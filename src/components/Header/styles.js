import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 12.3rem;
    
    height: 11.6rem;
    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    
    > h1 a {
        display: flex;
        align-items: center;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 6.4rem;
    }

    > Input {
        display: flex;
        align-items: center;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > a img {
        width: 5.6rem;
        height: 5.6rem;
        margin-left: .9rem;
        border-radius: 50%;
        border: solid 1px; 
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 6.4rem;
        line-height: 2.4rem;

        a {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE_900};
            white-space: nowrap;
        }
    }
`

export const LogOut = styled.button`
    margin-left: 6.4rem;

    border: none;

    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    cursor: pointer;
`