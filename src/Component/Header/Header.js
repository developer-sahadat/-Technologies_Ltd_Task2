import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border-b-2 bg-base-100  py-3">
      <div class="navbar  w-11/12 mx-auto ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <img
            className="w-12"
            src="https://samakal.com/uploads/2020/02/online/photos/Mujib-Yea-samakal-5e3af4db272c0.jpg"
            alt=""
          />
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink to="/" className="mr-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to="/products-services">
                Product & Services
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to="/become-client">
                Become a Client
              </NavLink>
            </li>
            <li>
              <NavLink className="mr-2" to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
