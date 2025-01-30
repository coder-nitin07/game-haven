import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Merchandise from './pages/Merchandise';
import News from './pages/News';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Games />} />
            <Route path='/merchandise' element={<Merchandise />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App