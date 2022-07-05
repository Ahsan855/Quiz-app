import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo.svg";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="w-3/4 mx-auto">
      <div className="navbar border-b-2 border-purple-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/quiz">Quiz</NavLink>
                </li>
              )}

              <li>
                <NavLink to="/contact">Contact Me</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <button
                      onClick={logout}
                      className="my-2 mr-5   text-secondary font-semibold"
                    >
                      Logout
                    </button>
                  </li>
                  <img
                    className="w-14 h-14 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />

                  <li className="my-2 ml-2 mr-5 mt-5 text-secondary font-semibold">
                    {user?.displayName}
                  </li>
                </>
              )}

              {!user && (
                <>
                  <li>
                    <NavLink className="my-2 mr-5 font-semibold  " to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="my-2 mr-5 font-semibold " to="/signup">
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <button onClick={logout} className="my-2 mr-5 font-semibold">
                    Logout
                  </button>
                </li>
                <img
                  className="w-14 h-14 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <li className="my-2 ml-2 mr-5 mt-5 text-secondary font-semibold">
                  {user?.displayName}
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Signup</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
