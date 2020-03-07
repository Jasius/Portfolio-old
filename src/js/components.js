'use strict'
import getProjectImage from './../assets/*.png'
import getColleaguePicture from './../assets/colleagues/*.(jpg|png)'
import { getTechnologiesList, getWorkplaceHighlights } from './utils'

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
        <img src="${getProjectImage[path[0].imageUrl]}" alt="${path[0].name} project screenshot" loading="lazy" class="img-responsive">
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
    `
    for (project = 1; project < path.length; project++) {
        projectsListing += `
        <div class="project">
        <h2>${path[project].name}</h2>
        <div class="date">
            <p>${path[project].year}</p>
        </div>
        <img src="${getProjectImage[path[project].imageUrl]}" alt="${path[project].name} project screenshot" loading="lazy" class="img-responsive"/>
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
    `
    }
    return spotlight + projectsListing
}

export function getTestimonialCards () {
    const testimonialsArray = [
        // {
        //     avatarUrl: getColleaguePicture[],
        //     fullName: 'Danielius A.',
        //     role: 'Implementation Engineer',
        //     testimonial: 'Thank you for being super fast and responsive!',
        //     year: '2018'
        // },
        {
            avatarUrl: getColleaguePicture['elvyraS'].png,
            fullName: 'Elvyra S.',
            role: 'Certification Specialist',
            testimonial: 'Thanks for sharing your superpowers! :))',
            year: '2018'
        },
        {
            avatarUrl: getColleaguePicture['tomasS'].jpg,
            fullName: 'Tomas S.',
            role: 'Implementation Manager',
            testimonial: 'Thank you for your help on building QA Automation tool.',
            year: 2018
        },
        {
            avatarUrl: getColleaguePicture['gintareS'].jpg,
            fullName: 'Gintare S.',
            role: 'Integration Tester',
            testimonial: 'Thanks for everyday cooperation and all the work with dashboards that make our life more colourful!',
            year: 2018
        },
        {
            avatarUrl: getColleaguePicture['dovileM'].png,
            fullName: 'Dovile M.',
            role: 'QA Analyst',
            testimonial: 'Thank you Mindaugas for your help! You\'re are so smart! GitHub was easy only because you helped :).',
            year: 2018
        },
        {
            avatarUrl: getColleaguePicture['marthaY'].jpg,
            fullName: 'Martha Y.',
            role: 'Senior Engagement Manager',
            testimonial: 'I think your formal title should be QA Master, QA Wizard.',
            year: 2018
        },
        {
            avatarUrl: getColleaguePicture['karolisN'].png,
            fullName: 'Karolis N.',
            role: 'Delivery Ops Lead',
            testimonial: 'Thanks for all the improvements, amazing work on internal tool and constant technical help!',
            year: 2018
        }
    ]

    const testimonialsData = testimonialsArray
        .map(obj => {
            const testimonialsObj = {}
            testimonialsObj[obj.key] = obj.value
            return `
<div class="reviewer">
<div class="reviewerInfo">
<img class="avatar" loading="lazy" src="${obj.avatarUrl}"/>
  <div class="fullName"><i class="fas fa-user-tie"></i> ${obj.fullName}</div>
  <div class="role"><i class="fas fa-briefcase"></i> ${obj.role}</div>
</div>
  <i class="text"><i class="fas fa-quote-left"></i> ${obj.testimonial} <i class="fas fa-quote-right"></i></i>
</div>
`}).join('')
    document.getElementsByTagName('testimonials')[0].innerHTML = `
    <div class="section-name">
        <h1 class="boxy"><a class="anchor" id="testimonials">Testimonials</a></h1>
    </div>
<div class="testimonialsModule">
${testimonialsData}
</div>
`
}
