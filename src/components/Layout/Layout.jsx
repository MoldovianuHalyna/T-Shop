import { Outlet } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
