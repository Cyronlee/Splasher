function loadImgUrl() {
  return "https://source.unsplash.com/" + loadResolution() + "/?" + loadQuery();
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

export { loadImgUrl, loadInterval, loadResolution, loadQuery };
