import { RxStarFilled, RxStar } from "react-icons/rx"
import { Container } from "./styles"

export function Stars({ rating }) {

    let stars = []

    for (let i = 0; i < 5; i++) {
        i < rating
            ? stars.push(<RxStarFilled key={i} />)
            : stars.push(<RxStar key={i} />)
    }

    return (
        <Container>
            <span>
                {stars}
            </span>
        </Container>
    )
}