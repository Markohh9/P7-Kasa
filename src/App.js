import './sass/index.scss'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import Propos from './pages/Propos';
import AppartementPage from './pages/AppartementPage';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<Propos />} />
        <Route path='/appartement/*' element={<ErrorPage />} />
        <Route path='/appartement/id' element={<AppartementPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;