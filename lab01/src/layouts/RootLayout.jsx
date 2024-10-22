import { NavBarMenu } from "../components/NavBarMenu";
import { Footer } from "../components/Footer";

function RootLayout({ children, menuItems }) {
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
