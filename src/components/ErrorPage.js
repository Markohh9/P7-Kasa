import Navbar from './Navbar';
import BodyError from './BodyError';
import Footer from './Footer'

function ErrorPage() {
    return (
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <BodyError />
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default ErrorPage;