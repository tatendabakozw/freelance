import React from "react";
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar } from "@material-ui/core";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <AppBar position="fixed" elevation={0}>
      <nav
        className={"bg-white shadow flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex flex-row items-center justify-between lg:w-auto lg:static lg:justify-start">
            <Link to='/' className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold">
              WeLink
            </Link>
            <span className="flex flex-row items-center p-1 border border-gray-300 rounded-sm">
              <input type="text" placeholder="I'm looking for" className="p-1 outline-none border-none" />
              <button className="bg-blue-900 hover:bg-blue-800 border border-blue-900 text-gray-100 font-semibold p-1 rounded-sm">Search Now</button>
            </span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon className="text-gray-800" />
            </button>

          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="flex items-center">
                <Link to='/howitreach'
                  className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold"
                >
                  <p className="text-gray-800 hover:text-gray-600">How It Works?</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/explore'
                  className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold"
                >
                  <p className="text-gray-800 hover:text-gray-600">Explore Sellers</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/login'
                  className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold"
                >
                  <p className="text-gray-800 hover:text-gray-600">Sign In</p>
                </Link>
              </li>
              <li className="flex items-center">
                <Link to='/register'
                  className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold bg-yellow-400 rounded-sm">
                  <p className="text-gray-800 hover:text-gray-600">Join Community</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </AppBar>
  );
}