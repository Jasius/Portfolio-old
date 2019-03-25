"use strict";
export class Render {
  static byId (content, node) {
    return (document.getElementById(node).innerHTML = content);
  }
  static byTag (content, node) {
    return (document.getElementById(node).innerHTML = content);
  }
}

export function getTechnologiesList (path) {
  let technologiesListing = ``;
  for (let usedTechnology in path) {
    technologiesListing += `<li class="${path[usedTechnology].toLowerCase()}">${path[usedTechnology]}</li>`;
  }
  return `<ul class="tools">${technologiesListing}</ul>`;
}

export function getWorkplaceHighlights (path) {
  let highlightsListing = ``;
  for (let workplaceHighlight in path) {
    highlightsListing += `<li>${path[workplaceHighlight]}</li>`;
  }
  return `<ul>${highlightsListing}</ul>`;
}

export function getTimespan (date, node) {
  const
    div = document.getElementById(node),
    today = new Date(),
    givenDate = new Date(date),
    month = today.getMonth() - givenDate.getMonth();
  let timespan = today.getFullYear() - givenDate.getFullYear();
  if (month < 0 || (month === 0 && today.getDate() < givenDate.getDate())) {
    return (div.innerText = timespan - 1);
  }
  return (div.innerText = timespan);
}

export function toggleElementVisibility (div) {
  const element = document.getElementById(div);
  switch (element.style.display) {
    case 'block': element.style.display = 'none'; break;
    default: element.style.display = 'block';
  }
}
