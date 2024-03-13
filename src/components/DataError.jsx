import React from "react";

const DataError = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="text-danger">404 Not Found</h1>
      <h2 className="text-primary">something went wrong!!!</h2>
      <p className="text-dark">please comback sometime...</p>
    </div>
  );
};

export default DataError;
