import styled from 'styled-components'

export const Container = styled.div`
    grid-template-areas: footer;
    grid-template-rows:
        11.6rem
        1fr;

    width: 100%;
    height: 98vh;

    > main {
        margin: 4rem auto;
        padding: 0 12.3rem;
        overflow-y: auto;
        width: 100%;
        height: calc(100% - 18rem - 4rem);

        .title {
            display: flex;
            align-items: center;
            margin: 2.4rem 0;
            gap: 1.9rem;
            height: 4.7rem;

            * {
                margin-right: 1rem;
            }
            
            h2 {
                font-size: 3.6rem;
                line-height: 4.7rem;
                font-weight: 500;
            }

            svg {
                width: 2rem;
                height: 2rem;
            }
        }

        .author_and_date {
            display: flex;
            align-items: center;
            margin: 2.4rem 0 4rem;
            gap: .8rem;

            span {
                display: flex;
                align-items: center;
                gap: .8rem;

                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.PINK};
            }
            }

            img {
                width: 1.6rem;
                border-radius: 50%;
                border: solid 1px; 
                border-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            }

            h3 {
                font-family: 'roboto', sans-serif;
                font-weight: normal;
                font-size: 1.6rem;
                line-height: 1.8rem;
            }
        }

        .tag_area {
            span {
                margin-bottom: 4rem;

                > div { 
                    font-size: 1.2rem;
                    line-height: 1.4rem;
                    padding: .8rem 1.6rem;
                    margin-right: .8rem;
                    border-radius: .8rem;
                }
            }
        }

        p {
            font-family: 'Roboto Slab';
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.1rem;
            text-align: justify;
        }


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
    display: inline-flex;
    gap: 4rem;
    width: 100%;
    margin-top: 4rem;

    > :nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.DARK_BUTTON};
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`
