import React from "react";
import { Link } from "react-router-dom";
const menuList = [
  {
    label: "Home",
    nav: "/",
  },
  {
    label: "Example",
    nav: "/example",
  },
  {
    label: "Login",
    nav: "/login",
  },
  {
    label: "Sign Up",
    nav: "/signup",
  },
  {
    label: "Forgot Password",
    nav: "/forgotpassword",
  },
  {
    label: "Profile",
    nav: "/profile",
  },
  {
    label: "CMS page",
    nav: "/cms/myinfo",
  },
];

export default function Header() {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {menuList.map((data, index) => {
              return (
                <li key={index}>
                  <Link className="nav-link px-2 link-secondary" to={data.nav}>
                    {data.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
