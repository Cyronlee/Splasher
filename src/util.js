function loadImgUrl() {
  let resolution = localStorage.getItem("resolution");
  if (resolution === null) {
    resolution = "1600x900";
  }
  return "https://source.unsplash.com/" + resolution;
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

export { loadImgUrl, loadInterval, loadResolution };
