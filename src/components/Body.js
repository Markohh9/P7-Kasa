import BodyImage from '../assets/img/Body.png';
import { useState, useEffect } from "react";
import { fetchAppartements } from "./Api";

function Body() {
    return (
        <div>
            <div className='bodyBanner' style={{backgroundImage: `url(${BodyImage})`}}>
                <p className='BannerImgTxt'> Chez vous, partout et ailleurs </p>
            </div>
            <div className='bodyContainer'>

                <div className='column1'>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                </div>

                <div className='column2'>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                </div>

                <div className='column2'>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                <div className='containerCards'>
                    <p className='cardsTitle'>Titre de la location</p>
                </div>
                </div>

            </div>
        </div>
        )
    }

export default Body;



/* const [appartements, setAppartements] = useState([]);

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
); */