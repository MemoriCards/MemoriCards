import { useContext, useState } from "react"
import { cardContext } from "../../providers/cardContext";

export const CollectionName = () => {

    const {inputValue, setInputValue, collectionTitle, setCollectionTitle} = useContext(cardContext)

    return (
        <>
            {inputValue ?
                <div>
                    <span>{collectionTitle}</span>
                    <button onClick={() => setInputValue(false)}>
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </div>
                :
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setCollectionTitle(collectionTitle);
                    setInputValue(true)
                }}>
                    <input type="text" value={collectionTitle} onChange={(e) => setCollectionTitle(e.target.value)} placeholder="De um nome para sua coleção de cartões..." />
                    <button type="submit">OK</button>
                </form>
            }
        </>
    )
}