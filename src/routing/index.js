import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../page/home"));
const About = lazy(() => import("../page/about"));
const Header = lazy(() => import("../page/header"));
const Loading = lazy(() => import("../component/loading"));
const AnyPage = lazy(() => import("../page/anyPage"));

function AppRouting() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<AnyPage />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default AppRouting;
