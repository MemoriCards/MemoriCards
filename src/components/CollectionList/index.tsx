import { useContext } from "react";
import { CollectionCardList } from "./CollectionCardList";
import { cardContext } from "../../providers/cardContext";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/userContext";
import { StyledSection, StyledDiv } from "./style";

export const CollectionList = () => {
  const { navigate, setIsModalVisible, firstCardId, setIsTesting } =
    useContext(cardContext);

  return (
    <StyledSection>
      <StyledDiv>
        <button
          type="button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          {" "}
          <i className="fa-solid fa-plus"></i> Criar Card
        </button>
        <button
          type="button"
          onClick={() => {
            if (cards.length > 0) {
              setIsTesting(true);
              navigate(`/test/${firstCardId}`);
            } else {
              toast.error("Crie ao menos um card para iniciar teste");
            }
          }}
        >
          <i className="fa-sharp fa-regular fa-circle-play"></i> Iniciar teste
        </button>
      </StyledDiv>

      <CollectionCardList />
    </StyledSection>
  );
};
