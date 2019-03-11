"use strict";
import images from './../assets/*.png'
import { technologiesList, highlightsList } from "./utils";

export function projectsCards(path) {
  let projectsListing = ``;
  let project;
  const spotlight = `
    <div class="section-name">
        <h1 class="boxy"><a class="anchor" id="projects">Projects</a></h1>
    </div>
    <div class="spotlight">
        <h2>${path[0].name}</h2>
        <div class="date">
          <p>${path[0].year}</p>
        </div>
        <img src="${images[path[0].imageUrl]}" alt="bazaarvoice website" class="img-responsive">
            ${technologiesList(path[0].technologies)}
        <p>
            <i class="fas fa-briefcase"></i><span class="role"> ${path[0].role}</span><br>
            <span><i class="fas fa-map-marker-alt"></i> ${path[0].location}</span>
        </p>
        <p class="description">
            ${path[0].description}
            ${highlightsList(path[0].highlights)}
        </p>
    </div>
    `;
  for (project = 1; project < path.length; project++) {
    projectsListing += `
        <div class="project">
        <h2>${path[project].name}</h2>
        <div class="date">
            <p>${path[project].year}</p>
        </div>
        <img src="${images[path[project].imageUrl]}" alt="Omnisend website" class="img-responsive">
        ${technologiesList(path[project].technologies)}
        <p>
            <i class="fas fa-briefcase"></i><span class="role"> ${
              path[project].role
            }</span><br>
            <span><i class="fas fa-map-marker-alt"></i> ${
              path[project].location
            }</span>
        </p>
        <p class="description">
            ${path[project].description}
            ${highlightsList(path[project].highlights)}
        </p>
        </div>
    `;
  }
  return spotlight + projectsListing;
}
