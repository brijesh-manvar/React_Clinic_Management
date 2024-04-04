import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const LabTest = React.lazy(() => import("pages/LabTest"));
const Patient = React.lazy(() => import("pages/Patient"));
const Precription = React.lazy(() => import("pages/Precription"));
const Receptionist = React.lazy(() => import("pages/Receptionist"));
const Laboratorian = React.lazy(() => import("pages/Laboratorian"));
const DocDetail = React.lazy(() => import("pages/DocDetail"));
const Admin = React.lazy(() => import("pages/Admin"));

const Login = React.lazy(() => import("pages/Login"));
const Register = React.lazy(() => import("pages/Register"));
const HomeTwo = React.lazy(() => import("pages/HomeTwo"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        
          <Route path="/admin" element={<Admin />} />
          <Route path="/docdetail" element={<DocDetail />} />
          <Route path="/laboratorian" element={<Laboratorian />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/precription" element={<Precription />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/labtest" element={<LabTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
