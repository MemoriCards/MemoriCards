import { useContext } from "react";
import { CollectionCardList } from "./CollectionCardList";
import { cardContext } from "../../providers/cardContext";
import toast from "react-hot-toast";
import { EditCardModal } from "../Modal/EditModal";
import { StyledDiv, StyledSection } from "./style";

export const CollectionList = () => {
  const {
    navigate,
    setIsModalVisible,
    firstCardId,
    setIsTesting,
    cards,
    isEditModalVisible,
  } = useContext(cardContext);

  return (
    <StyledSection>
      {isEditModalVisible ? <EditCardModal /> : null}
      <StyledDiv>
        <button
          type="button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          <i className="fa-solid fa-plus"></i>
          Criar Card
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
          <i className="fa-sharp fa-regular fa-circle-play"></i>Iniciar teste
        </button>
      </StyledDiv>

      <CollectionCardList />
    </StyledSection>
  );
};
