import { NavBarMenu } from "../components/NavBarMenu";
import { Footer } from "../components/Footer";

function RootLayout({ children }) {
  const menuItems = [
    { id: 1, label: "Home", href: "" },
    { id: 2, label: "Laboratorium 1", href: "lab1" },
    { id: 3, label: "Laboratorium 2", href: "lab2" },
    { id: 3, label: "Laboratorium 3", href: "lab3" },
  ];
  return (
    <>
      <div>
        <NavBarMenu items={menuItems} />
        <main style={{ padding: "20px" }}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;

// ffc
