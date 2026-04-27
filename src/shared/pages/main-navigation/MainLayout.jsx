import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HeroPage from "../authentication/HeroPage";
import Profile from "../authentication/Profile";
import Dashboard from "../dashboard/Dashboard";
import Map from "../dashboard/Map";
import Contact from "../dashboard/Contact";
import Home from "../dashboard/Home";
import HamburgerMenu from "../dashboard/HamburgerMenu";
import Achievement from "../dashboard/Achievement";
import Plans from "../dashboard/Plans";
import Testimonials from "../dashboard/Testimonials";
import Developer from "../dashboard/Developer";

const Main_Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Navigate to="/insurance/dashboard/home" />} />

        {/* <Route path="/insurance/dashboard" element={<HeroPage />} /> */}
        {/* <Route path="/insurance/dashboard" element={<Profile />} /> */}
        <Route path="/insurance/dashboard" element={<Dashboard />} />
        <Route path="/insurance/dashboard/map" element={<Map />} />
        <Route path="/insurance/dashboard/contact" element={<Contact />} />
        <Route path="/insurance/dashboard/home" element={<Home />} />
        <Route path="/insurance/dashboard/hamburger-menu" element={<HamburgerMenu />} />
        <Route path="/insurance/dashboard/achievement" element={<Achievement />} />
        <Route path="/insurance/dashboard/plans" element={<Plans />} />
        <Route path="/insurance/dashboard/testimonials" element={<Testimonials />} />
        <Route path="/insurance/dashboard/developer" element={<Developer />} />
      </Routes>
    </Suspense>
  );
};

export default Main_Layout;
