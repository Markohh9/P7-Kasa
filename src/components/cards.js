import { useState, useEffect } from "react";
import { fetchAppartements } from "../Api/Api";
import BodyImage from '../assets/img/Body.png';

function cards() {
    {

        const [appartements, setAppartements] = useState([]);
    
    useEffect(() => {
        async function getAppartements() {
        const data = await fetchAppartements();
        setAppartements(data);
        }
        getAppartements();
    }, []);
    
    return (
        <div>
        <div className='bodyBanner' style={{backgroundImage: `url(${BodyImage})`}}>
            <p className='BannerImgTxt'> Chez vous, partout et ailleurs </p>
        </div>
        
        <div className='bodyContainer'>
            {appartements.map((appartement) => (
            <div key={appartement.id} className='column1'>
                <div className='containerCards'>
                <img src={appartement.cover} alt={appartement.title} />
                <p className='cardsTitle'>{appartement.title}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };
}

export default function cards()