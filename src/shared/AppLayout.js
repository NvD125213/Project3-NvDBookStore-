import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
import Footer from "../component/footer";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
