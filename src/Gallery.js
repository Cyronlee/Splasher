import React, { useState, useEffect } from "react";
import "./Gallery.css";
import "./util";
import { loadImgUrl, preloadImg, loadInterval, loadAnimation } from "./util";

function Gallery(props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(`Picture will show in ${loadInterval()}s`);
    const interval = setInterval(() => {
      setIndex((pre) => pre + 1);
    }, loadInterval() * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    preloadImg(index + 1);
  }, [index]);

  return (
    <>
      {index === 0 ? (
        <div>
          <img
            className={"animate__animated " + loadAnimation()}
            src={localStorage.getItem(0)}
            alt="first"
          ></img>
        </div>
      ) : (
        <div>
          <img src={localStorage.getItem(index - 1)} alt="prev"></img>
          <img
            key={index}
            className={"animate__animated " + loadAnimation()}
            src={localStorage.getItem(index)}
            alt="next"
          ></img>
        </div>
      )}
    </>
  );
}

export default Gallery;
