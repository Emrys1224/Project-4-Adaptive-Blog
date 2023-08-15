import { Outlet } from "react-router-dom";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
