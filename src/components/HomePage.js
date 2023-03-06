import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer'

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