import logo from '../assets/img/logo.png'

function Navbar () {

    //state

    //comportement

    // display
    return ( 
        <div className='navdiv'>
            <nav>
                <img src={logo} alt="Kasa Logo" className='LogoNav'/>
                <div className='Navtxt'>
                    <a href="/index.html" className='AccueilLink'>ACCUEIL</a>
                    <a href="/APropos.html" className='ProposLink'>A PROPOS</a>
                </div>
            </nav>
            
        </div>
    )
}



export default Navbar ;