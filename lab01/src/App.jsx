import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Lab1Page from "./pages/Lab1Page.jsx";
import Lab2Page from "./pages/Lab2Page.jsx";
import Err404 from "./pages/Err404.jsx";
import PeoplePage from "./pages/PeoplePage.jsx";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lab1" element={<Lab1Page />} />
          <Route path="/lab2" element={<Lab2Page />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="*" element={<Err404 />}></Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
