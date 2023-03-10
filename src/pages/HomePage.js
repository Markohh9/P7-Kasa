import Navbar from '../components/Navbar';
import Body from '../components/Body';
import Footer from '../components/Footer'

function HomePage() {
    return (
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <Body />
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default HomePage;