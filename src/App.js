import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Error from "./components/Error"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ReadDash from "./components/ReadDash";
import Write from "./components/Write";
import UserDashboard from "./components/UserDashboard";
import BlogState from "./context/blog/BlogState";
import AuthState from "./context/auth/AuthState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import UserState from "./context/user/UserState";
import DynamicPage from "./components/DynamicPage";
import Privacy from "./components/Privacy";
import TnC from "./components/TnC";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {

  return (
    <>
      <BlogState>
        <UserState>
          <AuthState>
            <Router>
              <Nav />

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/read" element={<ReadDash />} />
                <Route path="/story" element={<DynamicPage />} />

                <Route exact path="/privacy" element={<Privacy />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/terms" element={<TnC />} />
                <Route exact path="/about" element={<About />} />


                <Route
                  exact path="/write"
                  element={
                    <PrivateRoute>
                      <Write />
                    </PrivateRoute>
                  } />

                <Route
                  exact path="/profile"
                  element={
                    <PrivateRoute2>
                      <UserDashboard />
                    </PrivateRoute2>
                  } />

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Error />} />
              </Routes>


            </Router>
          </AuthState>
        </UserState>
      </BlogState>


    </>
  )
}

export default App;
