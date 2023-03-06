import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="bg-dark">
        <div className="container ">
          <div className="d-flex justify-content-between ">
            <div>
              <h3 style={{ color: "white" }}>JSOM</h3>
            </div>
            <div className="d-flex gap-5 f-end">
              <h3 style={{ color: "white" }}>Authors</h3>
              <h3 style={{ color: "white" }}>MostLikedPost</h3>
              <h3 style={{ color: "white" }}>MostCommentPost</h3>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
