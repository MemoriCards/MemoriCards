import { DashboardContainer } from "../../components/DashboardContainer"
import { SearchBar } from "../../components/SearchBar"

export const DashboardPage = () => {
    return (
        <div>
            <SearchBar />
            <DashboardContainer />
        </div>
    )
}