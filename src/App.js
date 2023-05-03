import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavbarEn from "./Components/English/NavbarEn/NavbarEn";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeEn from "./Components/English/HomeEn/HomeEn";
import HomeAr from "./Components/Arabi/HomeAr/HomeAr";
import { useEffect, useState } from "react";
import NavbarAr from "./Components/Arabi/NavbarAr/NavbarAr";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("تتروان");

  useEffect(() => {
    if (location.pathname === "/") {
      setLanguage("FA");
    } else if (location.pathname === "/en") {
      setLanguage("EN");
    } else {
      setLanguage("AR");
    }
  }, [language, location.pathname]);

  useEffect(() => {
    document.title = title;
  }, [title]);
  // const publicPath = "/";
  // const routeCodes = {
  //   Fa: publicPath,
  //   En: `${publicPath}en`,
  //   Ar: `${publicPath}ar`,
  // };

  return (
    <div className="App">
      {language === "FA" && (
        <Navbar
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      )}
      {language === "EN" && (
        <NavbarEn
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      )}
      {language === "AR" && (
        <NavbarAr
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      )}
      <Routes>
        <Route path="/" element={<Home openMenu={openMenu} />} />
        <Route path="/en" element={<HomeEn openMenu={openMenu} />} />
        <Route path="/ar" element={<HomeAr openMenu={openMenu} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
