import { Container } from "./styles";
import { Stars } from "../Stars";
import { Tag } from "../Tag";



export function Movie({ data, ...rest }) {
    
    return (
        <Container {...rest}>

            <h2>{data.title}</h2>
            <Stars rating={data.rating} />
            <p>{data.description}</p>
            {
                data.tags && data.tags.map(tag => (
                    <Tag key={tag.id} title={tag.name}/>
                ))
            }

        </Container>
    )
}

