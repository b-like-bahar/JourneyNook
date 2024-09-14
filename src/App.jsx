import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:id" element={<CityDetailPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
