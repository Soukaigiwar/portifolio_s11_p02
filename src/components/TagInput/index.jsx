import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./styles"

export function TagInput({ isNew, title, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input
                type="text"
                title={title}
                readOnly={!isNew}
                
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
            
            
        </Container>
    )
}