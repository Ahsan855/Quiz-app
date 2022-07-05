import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo.svg";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="w-3/4 mx-auto">
      <div class="navbar border-b-2">
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
                <li>
                  <button
                    onClick={logout}
                    className="my-2 mr-5   text-secondary font-semibold"
                  >
                    Logout
                  </button>
                </li>
              )}

              {!user && (
                <>
                  <li>
                    <NavLink
                      className="my-2 mr-5   text-secondary font-semibold  "
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="my-2 mr-5   text-secondary font-semibold "
                      to="/signup"
                    >
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
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
              <li>
                <button onClick={logout} className="my-2 mr-5  font-semibold">
                  Logout
                </button>
              </li>
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
