import { useContext } from "react";
import { CollectionCardList } from "./CollectionCardList";
import { cardContext } from "../../providers/cardContext";

export const CollectionList = () => {

  const { navigate, setIsModalVisible, firstCardId, setIsTesting } =
    useContext(cardContext);

  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => {
            setIsModalVisible(true);
          }}
        > <i className="fa-solid fa-plus"></i>
          Criar Card
        </button>
        <button
          type="button"
          onClick={() => {
            setIsTesting(true);
            navigate(`/test/${firstCardId}`);
          }}
        >
          <i className="fa-sharp fa-regular fa-circle-play"></i>Iniciar teste
        </button>
      </div>

      <CollectionCardList />
    </section>
  );
};
