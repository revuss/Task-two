
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar/>
      <section className="home-section">
        <div className="text p-10">
          <Outlet /> 
        </div>
      </section>
    </>
  );
};

export default Layout;
