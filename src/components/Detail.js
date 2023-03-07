import React from "react";
import Data from "./Data";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="bg-dark w-50 mt-5 container">
        {Data.map((e) => {
          if (e.id == id) {
            return (
              <div className="d-flex flex-column align-items-center m-5 justify-content-center">
                <h2>{e.title}</h2>;
                <img className="img" src={e.img} alt="" />
                <h2 style={{ color: "white" }}>{e.title}</h2>
                <p style={{ color: "white" }}>Mobile: 987654567</p>
                <p style={{ color: "white" }}>POSTS: 15</p>
                <p style={{ color: "white" }}>LIKES: 49</p>
              </div>
            );
          }
        })}
      </div>
      <h2>Posts</h2>
      <div className="d-flex">
        <button className="btn btn-primary rounded-start">
          Assending By date
        </button>
        <button className="btn btn-primary">Decending By date</button>
        <button className="btn btn-primary">Assending By Like</button>
        <button className="btn btn-primary rounded-end">
          Decending By Like
        </button>
      </div>
    </div>
  );
}
