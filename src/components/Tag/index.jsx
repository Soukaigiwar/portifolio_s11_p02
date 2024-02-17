import { Container } from "./styles"

export function Tag({ title, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                {title}
            </div>
        </Container>
    )
}