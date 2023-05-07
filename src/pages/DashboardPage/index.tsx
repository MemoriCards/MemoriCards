import { useContext } from "react";
import { CollectionList } from "../../components/CollectionList";
import { CollectionName } from "../../components/CollectionName";
import { cardContext } from "../../providers/cardContext";
import { CreateCardModal } from "../../components/Modal/CreateModal";
import { StyledMain } from "./style";

export const DashboardPage = () => {
  const { isModalVisible } = useContext(cardContext);
  return (
    <>
      <StyledMain>
        <CollectionName />
        <CollectionList />
        {isModalVisible ? <CreateCardModal /> : null}
      </StyledMain>
    </>
  );
};
