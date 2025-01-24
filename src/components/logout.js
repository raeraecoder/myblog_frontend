import React, { useEffect } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const nav = useNavigate();

  useEffect(() => {
     axiosInstance.post("user/logout/blacklist/",{
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    console.log("success")
    axiosInstance.defaults.headers["Authorization"] = null;
    nav('/signIn');
  });
  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
