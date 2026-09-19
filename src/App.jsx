import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./components/ui/mainscreen.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
