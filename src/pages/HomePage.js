import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer'
import Cards from '../components/Cards'

function HomePage() {
    return (
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <Body />
            <Cards />
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default HomePage;