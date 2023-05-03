import { StyledForm } from "./style";

export const CollectionName = () => {
    return (
        <StyledForm>
            <input type="text" placeholder="De um nome para sua coleção de cartões..." />
            <button type="submit">OK</button>
        </StyledForm>
    )
}