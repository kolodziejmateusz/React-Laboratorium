import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Lab1Page from "./pages/Lab1Page.jsx";
import Lab2Page from "./pages/Lab2Page.jsx";
import Err404 from "./pages/Err404.jsx";
// import PeoplePage from "./pages/PeoplePage.jsx";

function App() {
  const menuItems = [
    { id: 1, label: "Home", url: "", element: <HomePage /> },
    { id: 2, label: "Laboratorium 1", url: "lab1", element: <Lab1Page /> },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "lab2/1",
      urlPattern: "/lab2/:id",
      element: <Lab2Page />,
    },
    { id: 4, label: "Laboratorium 3", url: "lab3", element: <HomePage /> },
    { id: 5, label: "Err404", url: "*", element: <Err404 /> },
  ];

  return (
    <>
      <RootLayout menuItems={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern || `/${item.url}`}
              element={item.element}
            />
          ))}
          <Route path="/lab2" element={<Lab2Page />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
