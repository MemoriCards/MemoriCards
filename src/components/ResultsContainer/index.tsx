import { Link } from "react-router-dom"

export const ResultsContainer = () => {


    return (
        <div>
            <div>
                <p>Acertos</p>
                <span>0</span>
                <p>Não respondida</p>
                <span>0</span>
                <p>Erradas</p>
                <span>0</span>
            </div>
            <Link to={"/test/:id"}>Tentar Novamente</Link>
        </div>
    )
}