import styled from 'styled-components'

export const Container = styled.div`
    grid-template-rows:
        11.6rem
        1fr;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    width: 100%;
    
    > section {
        margin: auto 12.3rem;

        > #toolbar {
            width: 100%;
            margin: 3.7rem auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2 { 
                display: flex;
                font-size: 3.2rem;
                font-weight: 400;
                white-space: nowrap;
            }
        }
    }

    > main {
        height: calc(100vh - 300px);
        margin: auto 12.3rem;
        overflow-y: auto;

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
            border-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            border-radius: 9999px;
            background-color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const Search = styled.div`
    width: 100%;
`;