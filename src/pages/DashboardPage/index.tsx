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
    )
}