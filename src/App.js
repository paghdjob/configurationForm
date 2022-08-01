import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Loading = lazy(() => import("./component/loading"));
const AppRouting = lazy(() => import("./routing/index"));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<AppRouting />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
