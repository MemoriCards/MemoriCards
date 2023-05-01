import { CardList } from "./Cardlist"

export const DashboardContainer = () => {
    return (
        <div>
            <div>
                <button>
                <i className="fa-solid fa-plus"></i>
                    Criar Card
                </button>
                <button>
                <i className="fa-sharp fa-regular fa-circle-play"></i>
                    Iniciar Teste
                </button>
            </div>
            <CardList />
        </div>
    )
}