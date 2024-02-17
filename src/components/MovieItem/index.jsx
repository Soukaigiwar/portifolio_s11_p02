import { Tag } from "../Tag";
import { Stars } from "../Stars";
import { Container } from "./styles";


export function MovieItem({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            <span><Stars rating={data.rating} /></span>
            <p title={data.description}>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => (
                            <Tag key={tag.id} title={tag.name} />
                        ))
                    }
                </footer>
            }
        </Container>
    );
};
