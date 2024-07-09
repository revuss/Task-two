import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    menuBtnChange();
  };

  const menuBtnChange = () => {
    const btn = document.getElementById('btn');
    if (btn) {
      if (isOpen) {
        btn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo-details">
        <div className="logo_name text-primary">Demo App</div>
        <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <i className="bx bx-home-alt"></i>
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/analytics">
            <i className="bx bxs-bar-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </Link>
          <span className="tooltip">Analytics</span>
        </li>
        <li className="profile" onClick={() => console.log('Logout')}>
          <div className="profile-details">
            <i className="bx bx-export"></i>
            <div className="name_job">
              <div className="name">Logout</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};


export default Navbar