import './App.scss';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import CityDetailPage from "./pages/CityDetailPage/CityDetailPage.jsx";
import ItineraryPage from "./pages/ItineraryPage/ItineraryPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityId" element={<CityDetailPage />} />
          <Route path="/city/:cityId/attractions/:attractionId" element={<CityDetailPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
