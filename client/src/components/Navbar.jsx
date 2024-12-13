import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = ({ userName }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const getInitial = () => {
    return userName ? userName.charAt(0).toUpperCase() : "";
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">PAY&PARK</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {userName ? (
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center bg-orange-600 text-white text-lg font-bold rounded-full">
                  {getInitial()}
                </div>
                <span className="text-white">{userName}</span>
              </div>
            ) : (
              <>
                <Link to="/register" className="py-2 px-3 border rounded-md">
                  Sign In
                </Link>
                <Link
                  to="/loger"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                >
                  Create an account
                </Link>
              </>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            {userName ? (
              <div className="flex flex-col items-center mt-6">
                <div className="h-10 w-10 flex items-center justify-center bg-orange-600 text-white text-lg font-bold rounded-full">
                  {getInitial()}
                </div>
                <span className="text-white mt-2">{userName}</span>
              </div>
            ) : (
              <div className="flex space-x-6 mt-6">
                <Link to="/sign-in" className="py-2 px-3 border rounded-md">
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                >
                  Create an account
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
