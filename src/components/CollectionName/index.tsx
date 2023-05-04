import { useContext } from "react";
import { toast } from "react-hot-toast";
import { cardContext } from "../../providers/cardContext";
import { StyledForm, StyledDiv } from "./style";

export const CollectionName = () => {
  const { inputValue, setInputValue, collectionTitle, setCollectionTitle } =
    useContext(cardContext);

  return (
    <>
      {inputValue ? (
        <StyledDiv>
          <span>{collectionTitle}</span>
          <button onClick={() => setInputValue(false)}>
            <i className="fa-solid fa-pen"></i>
          </button>
        </StyledDiv>
      ) : (
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            if (collectionTitle != "") {
              setCollectionTitle(collectionTitle);
              setInputValue(true);
            } else {
              toast.error("Defina um nome válido");
            }
          }}
        >
          <input
            type="text"
            value={collectionTitle}
            onChange={(e) => setCollectionTitle(e.target.value)}
            placeholder="De um nome para sua coleção de cartões..."
          />
          <button type="submit">OK</button>
        </StyledForm>
      )}
    </>
  );
};
