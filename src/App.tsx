import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "./layout/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const MapView = lazy(() => import("./pages/MapView"));
const AnalyticsView = lazy(() => import("./pages/AnalyticsView"));

const App = () => {
  const loadingUI = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
    </div>
  );
  return (
    <Suspense fallback={loadingUI()}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<MapView />} />
          <Route path="analytics" element={<AnalyticsView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
