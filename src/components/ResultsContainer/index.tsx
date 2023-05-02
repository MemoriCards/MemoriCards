import { useContext } from "react"
import { Link } from "react-router-dom"
import { cardContext } from "../../providers/cardContext"

export const ResultsContainer = () => {

    const {corrects, incorrects, unanswered} = useContext(cardContext);

    return (
        <div>
            <div>
                <p>Acertos</p>
                <span>{corrects}</span>
                <p>Não respondida</p>
                <span>{incorrects}</span>
                <p>Erradas</p>
                <span>{unanswered}</span>
            </div>
            <Link to={"/test/:id"}>Tentar Novamente</Link>
        </div>
    )
}