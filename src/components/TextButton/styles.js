import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(Link)`
    width: 100%;

    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    
`
