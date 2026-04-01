import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Residential from "./pages/Residential";
import PHP from "./pages/PHP";
import CoOccurring from "./pages/CoOccurring";
import MAT from "./pages/MAT";
import Therapy from "./pages/Therapy";
import Resources from "./pages/Resources";
import InsurancePage from "./pages/Insurance";
import FAQPage from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter basename="/golden-grove-frontend">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/residential" element={<Residential />} />
          <Route path="programs/php" element={<PHP />} />
          <Route path="programs/co-occurring" element={<CoOccurring />} />
          <Route path="programs/mat" element={<MAT />} />
          <Route path="therapy" element={<Therapy />} />
          <Route path="resources" element={<Resources />} />
          <Route path="insurance" element={<InsurancePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
