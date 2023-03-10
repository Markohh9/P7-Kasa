import BodyImage from '../assets/img/Body.png';


function Body() {
    return (
        <div>
            <div className='bodyBanner' style={{backgroundImage: `url(${BodyImage})`}}>
                <p className='BannerImgTxt'> Chez vous, partout et ailleurs </p>
            </div>
            <cards />
        </div>
        )
    }

export default Body;
