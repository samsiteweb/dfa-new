import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    fontFamily: 'quicksand',
    fontSize: '18px',
    color: '#310C4B'
  }}>
    Loading...
  </div>
);

// Lazy load pages
const Landing = lazy(() => import("./pages/landing"));
const About = lazy(() => import("./pages/about"));
const AllResources = lazy(() => import("./components/cases/all-resources/all-resources"));
const Resource = lazy(() => import("./components/cases/[slug]/resource/resource"));
const Contact = lazy(() => import("./pages/contact"));
const PracticeArea = lazy(() => import("./pages/practice-area"));

const App = () => {
  return (
    <div>
      <ScrollToTop /> 
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/esg/all-resources" element={<AllResources />} />
          <Route path="/esg/all-resources/:postId/resource" element={<Resource />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/practice-area" element={<PracticeArea />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
