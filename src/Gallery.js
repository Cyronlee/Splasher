import React, { useState, useEffect } from "react";
import "./Gallery.css";
import "./util";
import { loadImgUrl, loadInterval } from "./util";

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
          <img src={loadImgUrl()} alt="0"></img>
        </div>
      ) : (
        <div>
          <img src={localStorage.getItem(index)} alt={index}></img>
        </div>
      )}
    </>
  );
}

function preloadImg(index) {
  const imgUrl = loadImgUrl();
  console.log("Loading img " + imgUrl);
  fetch(imgUrl)
    .then((response) => {
      return response.blob();
    })
    .then((myBlob) => {
      localStorage.setItem(index, URL.createObjectURL(myBlob));
    })
    .catch(() => {
      localStorage.setItem(index, imgUrl);
    });
}

export default Gallery;
