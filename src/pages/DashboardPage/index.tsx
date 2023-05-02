<<<<<<< HEAD
import { DashboardContainer } from "../../components/DashboardContainer"
import { SearchBar } from "../../components/SearchBar"

export const DashboardPage = () => {
    return (
        <div>
            <SearchBar />
            <DashboardContainer />
        </div>
=======
import { CollectionList } from "../../components/CollectionList"
import { CollectionName } from "../../components/CollectionName"

export const DashboardPage = () => {
    return (
        <>
        <main>
            <CollectionName />
            <CollectionList />
        </main>
        </>
>>>>>>> 853a67bcd823343cb86e7e4c199354df87508718
    )
}