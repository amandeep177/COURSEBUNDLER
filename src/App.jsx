import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/";
import Header from "./components/Layout/Header";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgetPassword from "./components/Auth/Forgetpassword";
import ResetPassword from "./components/Auth/Resetpassword";
import Contact from "./components/Contact/Contact,";

import Request from "./components/Contact/Request";
import About from "./components/About";
import Subscribe from "./components/Payments/Subscribe";
import NotFound from "./components/Layout/NotFound";
import PaymentFailed from "./components/Payments/PaymentFailed";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import CoursePage from "./components/CoursePage";
function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/Courses" element={<Courses />} />
        <Route  path="/Course/:id" element={<CoursePage/>} />
        
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/request" element={<Request />} />
        <Route  path="/about" element={<About />} />

       
        
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/forgetpassword" element={<ForgetPassword />} />
        <Route  path="/resetpassword/:token" element={<ResetPassword />} />
        <Route  path="/subscribe" element={<Subscribe />} />
        <Route  path="/*" element={<NotFound />} />
        <Route  path="/paymentfailed" element={<PaymentFailed/>} />
        <Route  path="/paymentsuccess" element={<PaymentSuccess/>} />
        

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
