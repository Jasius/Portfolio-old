"use strict";
// https://sunnysingh.io/blog/readable-code
export class Render {
  static byId(content, node) {
    return (document.getElementById(node).innerHTML = content);
  }
  static byTag(content, node) {
    return (document.getElementById(node).innerHTML = content);
  }
}

export function technologiesList(path) {
  let technologiesListing = ``;
  for (let tool in path) {
    technologiesListing += `<li class="${path[tool].toLowerCase()}">${
      path[tool]
    }</li>`;
  }
  return `<ul class="tools">${technologiesListing}</ul>`;
}

export function highlightsList(path) {
  let highlightsListing = ``;
  for (let tool in path) {
    highlightsListing += `<li>${path[tool]}</li>`;
  }
  return `<ul>${highlightsListing}</ul>`;
}

export function timespan(date, node) {
  const div = document.getElementById(node);
  const today = new Date();
  const givenDate = new Date(date);
  let timespan = today.getFullYear() - givenDate.getFullYear();
  const month = today.getMonth() - givenDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < givenDate.getDate())) {
    return (div.innerText = timespan - 1);
  }
  return (div.innerText = timespan);
}

export function hamburgerMenuExpando() {
  // var tempswitch = document.getElementById("panel");
  let displaySetting = document.getElementById("panel").style.display;
  console.log('works')
  if (displaySetting === "block") {
     displaySetting = "none";
  } else {
    displaySetting = "block";
  }
}
// class or function timespan.append
