import { Link } from "react-router-dom"
import { CardList } from "./Cardlist"

export const DashboardContainer = () => {
    return (
        <div>
            <div>
                <button>
                <i className="fa-solid fa-plus"></i>
                    Criar Card
                </button>
                <Link to={"/test/1"}>
                <i className="fa-sharp fa-regular fa-circle-play"></i>
                    Iniciar Teste
                </Link>
            </div>
            <CardList />
        </div>
    )
}