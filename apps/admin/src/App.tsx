import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RequestPage } from "./pages/RequestPage";

// RU: Роутинг: главная (/), форма заявки (/request).
// EN: Routing: home (/), request form (/request).

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
