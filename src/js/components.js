"use strict";
import images from './../assets/*.png'
import { getTechnologiesList, getWorkplaceHighlights } from "./utils";

export function getProjectsCards (path) {
    let [projectsListing, project] = [``]
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
            ${getTechnologiesList(path[0].technologies)}
        <p>
            <i class="fas fa-briefcase"></i><span class="role"> ${path[0].role}</span><br>
            <span><i class="fas fa-map-marker-alt"></i> ${path[0].location}</span>
        </p>
        <p class="description">
            ${path[0].description}
            ${getWorkplaceHighlights(path[0].highlights)}
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
        ${getTechnologiesList(path[project].technologies)}
        <p>
            <i class="fas fa-briefcase"></i><span class="role"> ${path[project].role}</span><br>
            <span><i class="fas fa-map-marker-alt"></i> ${path[project].location}</span>
        </p>
        <p class="description">
            ${path[project].description}
            ${getWorkplaceHighlights(path[project].highlights)}
        </p>
        </div>
    `;
    }
    return spotlight + projectsListing;
}

export function getTestimonialCards() {
    const testimonialCard = 
    `
    
    `
    const testimonialsArray = [
        {
            key: 1,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: `2018`
        },
        {
            key: 2,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: `2018`
        },
        {
            key: 3,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: 2018
        },
        {
            key: 4,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: 2018
        },
        {
            key: 5,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: 2018
        },
        {
            key: 6,
            avatarUrl: `https://thispersondoesnotexist.com/image`,
            fullName: `Whatever`,
            role: `Journalist`,
            testimonial: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
            year: 2018
        }
    ];

    const testimonialsData = testimonialsArray
        .map(obj => {
            const testimonialsObj = {};
            testimonialsObj[obj.key] = obj.value;
            return `
<div class="reviewer">
<div class="reviewerInfo">
<img class="Avatar" src="${obj.avatarUrl}"</img>
  <div class="fullName"><i class="fas fa-user-tie"></i> ${obj.fullName}</div>
  <div class="Role"><i class="fas fa-briefcase"></i> ${obj.role}</div>
</div>
  <div class="Text"><i class="fas fa-quote-left"></i> ${obj.testimonial} <i class="fas fa-quote-right"></i></div>

  <div class="year">${obj.year}</div>
</div>
`;
        })
        .join("");
    console.log(testimonialsData);
    document.getElementsByTagName("testimonials")[0].innerHTML = `
<div class="testimonialsModule">
${testimonialsData}
</div>
`;
}