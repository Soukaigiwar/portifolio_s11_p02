import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"

export function TextButton({ children, ...rest }) {
    return (
        <Container type="button" {...rest}>
            <FiArrowLeft /><p>Voltar</p>
        </Container>
    )
}