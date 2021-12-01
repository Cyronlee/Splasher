function loadImgUrl() {
  const resolution = loadResolution();
  const query = `? + ${loadQuery()}`;
  return "https://source.unsplash.com/" + resolution + query;
}

function preloadImg(index) {
  const imgUrl = loadImgUrl();
  fetch(imgUrl)
    .then((response) => {
      return response.blob();
    })
    .then((myBlob) => {
      const localUrl = URL.createObjectURL(myBlob);
      localStorage.setItem(index, localUrl);
      console.log(`Picture loaded as ${localUrl}`);
    })
    .catch(() => {
      localStorage.setItem(index, imgUrl);
    });
}

function loadFirstPicture() {
  return fetch(loadImgUrl())
    .then((response) => {
      return response.blob();
    })
    .then((myBlob) => {
      const localUrl = URL.createObjectURL(myBlob);
      localStorage.setItem(0, localUrl);
    });
}

function loadInterval() {
  let interval = localStorage.getItem("interval");
  if (interval === null) {
    return 5;
  }
  return interval;
}

function loadResolution() {
  let resolution = localStorage.getItem("resolution");
  if (resolution === null) {
    resolution = "1600x900";
  }
  return resolution;
}

function loadQuery() {
  let query = localStorage.getItem("query");
  if (query === null) {
    query = "";
  }
  return query;
}

function loadAnimation() {
  let animation = localStorage.getItem("animation");
  if (animation === null) {
    animation = "animate__fadeIn";
  }
  return animation;
}

export {
  loadFirstPicture,
  loadImgUrl,
  preloadImg,
  loadInterval,
  loadResolution,
  loadQuery,
  loadAnimation,
};
