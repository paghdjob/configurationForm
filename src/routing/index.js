import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../page/home"));
const About = lazy(() => import("../page/about"));
const Contact = lazy(() => import("../page/contact"));
const Header = lazy(() => import("../page/header"));
const Login = lazy(() => import("../page/login"));
const Signup = lazy(() => import("../page/signup"));
const ForgotPwd = lazy(() => import("../page/forgotPwd"));
const Profile = lazy(() => import("../page/profile"));
const Loading = lazy(() => import("../component/loading"));


function AppRouting() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpwd" element={<ForgotPwd />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default AppRouting;
