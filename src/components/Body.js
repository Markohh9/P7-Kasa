import BodyImage from '../assets/img/Body.png'

function Body () {



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