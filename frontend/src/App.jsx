import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Frontend/Home";
import About from "./components/Frontend/About";
import "./assets/css/style.scss";
import Services from "./components/Frontend/Services";
import Projects from "./components/Frontend/Projects";
import ContactUs from "./components/Frontend/ContactUs";
import Login from "./components/backend/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/backend/dashboard";
import RequireAuth from "./components/common/RequireAuth";
import { default as ShowServices } from "./components/backend/services/Show";
import { default as CreateService } from "./components/backend/services/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />

          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services"
            element={
              <RequireAuth>
                <ShowServices />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/services/create"
            element={
              <RequireAuth>
                <CreateService />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
