interface ICardItemProps {
    ask: string;
    answer?: string;
}

export const CardItem = ({ ask, answer }: ICardItemProps) => {
    return (
        <div>
            <button>
                <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
            <h3>{ask}</h3>
            <button>
                <i className="fa-solid fa-arrow-pointer"></i>
            </button>
        </div>
    )
}