// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Header from "./components/header/header";
// import Landing from "./pages/landing";
// import About from "./pages/about";
// import ESG from "./pages/esg";
// import AllResources from "./components/cases/all-resources/all-resources";
// import Resource from "./components/cases/[slug]/resource/resource";
// import Contact from "./pages/contact";
// import Footer from "./components/footer/footer";
// import PracticeArea from "./pages/practice-area";
// import AboutDfa from "./pages/about-dfa";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" exact element={<Landing />} />
//         <Route path="/about"  element={<AboutDfa/>} />
//         <Route path="/about-dfa-solicitors" element={<About/>} />
//         <Route path="/esg"  element={<ESG />} />
//         <Route path="/esg/all-resources"  element={<AllResources />} />
//         <Route path="/esg/all-resources/12345/resource"  element={<Resource />} />
//         <Route path="/contact"  element={<Contact />} />
//         <Route path="/practice-area"  element={<PracticeArea />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing";
import About from "./pages/about";
import AllResources from "./components/cases/all-resources/all-resources";
import Resource from "./components/cases/[slug]/resource/resource";
import Contact from "./pages/contact";
import Footer from "./components/footer/footer";
import PracticeArea from "./pages/practice-area";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
       <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/about"  element={<About />} />
        <Route path="/esg/all-resources"  element={<AllResources />} />
        <Route path="/esg/all-resources/:postId/resource"  element={<Resource />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/practice-area"  element={<PracticeArea />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
