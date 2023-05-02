import { useContext } from "react";
import { CollectionList } from "../../components/CollectionList";
import { CollectionName } from "../../components/CollectionName";
import { cardContext } from "../../providers/cardContext";
import { CreateCardModal } from "../../components/Modal";

export const DashboardPage = () => {
    const { isModalVisible } = useContext(cardContext);
  return (
    <>
      <main>
        <CollectionName />
        <CollectionList />
        {isModalVisible ? <CreateCardModal /> : null}
      </main>
    </>
  );
};
