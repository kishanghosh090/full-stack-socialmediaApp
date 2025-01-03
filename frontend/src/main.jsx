import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, BrowserRouter, Routes } from "react-router-dom";

import Layout from "./Layout.jsx";
import { Route } from "react-router-dom";
import ProfilePage from "./Components/ProfilePage/ProfilePage.jsx";

import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import ViewChat from "./Components/ViewChat/ViewChat.jsx";
import Friends from "./Components/Friends/Friends.jsx";
import ViewPost from "./Components/ViewPost/ViewPost.jsx";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";
import Settings from "./Components/Settigs/Settings.jsx";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword.jsx";
import UploadProfilePic from "./Components/Register/UploadProfilePic.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        {/* login and register routes */}
        <Route path="/">
          <Route path="Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/uploadProfilePic" element={<UploadProfilePic />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="" index element={<ProfilePage />} />
          <Route path="/ViewChat" element={<ViewChat />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/ViewPost" element={<ViewPost />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>

        <Route path="/">
          <Route path="CreatePost" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
