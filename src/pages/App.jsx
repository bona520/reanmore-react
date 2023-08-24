import "../App.css";
// import BlurBackground from "./components/blurBackground/blurBackground";
import Footer from "../components/footer/footer";
import NavigationBar from "../components/navigationBar/navigationBar";
import CoursePage from "./coursePage";
import HotPage from "./hotPage";
// import TeachHerePage from "./teachHerePage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import HtmlCssDescPage from "./htmlCssDescPage";
import JaAtoZDescPage from "./jsAtoZDescPage";
import JsRealProjectPage from "./jsRealProjectPage";
import ComingSoonPage from "./comingSoonPage";
import ScrollToTop from "../components/scrollToTop";

function App() {
  return (
    <>
      {/* <BlurBackground /> */}
      <NavigationBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotPage" element={<HotPage />} />
        <Route path="/coursePage" element={<CoursePage />} />
        {/* <Route path="/teachHerePage" element={<TeachHerePage />} /> */}
        <Route path="/htmlCssDescPage" element={<HtmlCssDescPage />} />
        <Route path="/jsAtoZDescPage" element={<JaAtoZDescPage />} />
        <Route path="/jsRealProjectPage" element={<JsRealProjectPage />} />
        <Route path="/comingSoonPage" element={<ComingSoonPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
