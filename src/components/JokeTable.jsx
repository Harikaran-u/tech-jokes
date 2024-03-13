import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JokeTable = () => {
  const navigate = useNavigate();
  const isValidUser = localStorage.getItem("isValidUser");
  useEffect(() => {
    if (!isValidUser) {
      navigate("/login", { replace: true });
    }
  });

  return <div>JokeTable-welcome</div>;
};

export default JokeTable;
