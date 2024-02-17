import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    
    grid-template-rows: 11.6rem 1fr;

    > main {
        margin: 4rem auto;
        padding: 0 12.3rem;
        overflow-y: auto;
        height: calc(100% - 4rem);
        width: 100%;

        &::-webkit-scrollbar {
            width: 2.4rem;
        }
        
        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            height: 4rem;
            border: .8rem solid;
            border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
        }
    }    
`

export const Form = styled.form`
    width: 100%;
    
    > h2 {
        margin-top: 2.4rem;
    }
    
    .input_area {
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        margin: 4rem auto 4rem;
        
        
    }

    > h3 {
        margin: 2.4rem auto;
        color: ${({ theme }) => theme.COLORS.GRAY_800};
    }

    .tags_area {
        display: flex;
        flex-wrap: wrap;
        padding: 1.6rem;
        margin-bottom: 4rem;
        gap: 24px;
        border-radius: .8rem;
        background-color: #0D0C0F;
    }

        > button {
            width: 100%;
            height: 4.8rem;
            padding: 3.2rem auto;
            margin-top: 2.4rem;
            border-radius: .8rem;
            font-size: 1.6rem;
            line-height: 2.1rem;
            font-weight: 800;
            
            display: flex;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    
`
