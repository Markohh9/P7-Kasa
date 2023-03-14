import { useState, useEffect } from "react";
import { fetchAppartements } from "../Api/Api";

function Cards() {
    
    const [appartements, setAppartements] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await fetchAppartements();
            console.log(data);
            setAppartements(data);
        }
        getData();
    }, []);

    return (
        <div className="bodyContainer">
            {appartements.map((appartement) => (
            <div key={appartement.id}>
                <h3 className="cardsTitle">{appartement.title}</h3>
                <img className="containerCards" src={appartement.cover} alt={appartement.title} />
            </div>
        ))}
        </div>
    );
}

export default Cards;
