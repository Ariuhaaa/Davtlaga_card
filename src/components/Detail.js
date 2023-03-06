import React from "react";
import Data from "./Data";

export default function Detail() {
  return (
    <div className="container">
      <div className="bg-dark w-50 mt-5 container">
        {Data.map((e) => {
          if (e.id == e.title) {
            return <h2>{e.title}</h2>;
          }
          // if (e.id == e.title)
          return (
            <div>
              {/* <img className="img" src={e.img} alt="" /> */}
              {/* <h2 style={{ color: "white" }}>{e.title}</h2>
              <p style={{ color: "white" }}>Mobile: 987654567</p>
              <p style={{ color: "white" }}>POSTS: 15</p>
              <p style={{ color: "white" }}>LIKES: 49</p> */}
            </div>
          );
        })}
      </div>
      <h2>Posts</h2>
      <div className="d-flex">
        <button className="btn btn-primary">Assending By date</button>
        <button className="btn btn-primary">Decending By date</button>
        <button className="btn btn-primary">Assending By Like</button>
        <button className="btn btn-primary">Decending By Like</button>
      </div>
    </div>
  );
}
