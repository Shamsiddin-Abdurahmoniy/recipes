// react
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <>
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
