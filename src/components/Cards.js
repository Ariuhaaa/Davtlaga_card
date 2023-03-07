import React from "react";
import Data from "./Data";
import { NavLink } from "react-router-dom";
export default function Cards() {
  return (
    <div className="container">
      <div className="row mt-5 gap-5 justify-content-between">
        {Data.map((e) => {
          return (
            <div className="col-3 card border">
              <div className="card-body">
                <div>
                  <img className="card-img-top" src={e.img} alt="" />
                </div>
                <div className="align-items-center">
                  <h4>{e.title}</h4>
                  <NavLink to={`/detail/${e.id}`}>
                    <button>{e.button}</button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
