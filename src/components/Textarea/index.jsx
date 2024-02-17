import { Container } from "./styles"

export function Textarea({ value, ...rest }) {
    return (
        <Container >
            <textarea {...rest} value={value} />
        </Container>
    )
}