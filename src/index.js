'use strict'
import './assets/*.svg'
import './scss/index'
import { getTimespan, Render, toggleElementVisibility, ctaCloseMenu } from './js/utils'
import { getProjectsCards, getTestimonialCards } from './js/components'
getTestimonialCards(), ctaCloseMenu()
getTimespan('3/19/1997', 'age')
getTimespan('1/4/2016', 'experienceAge')
document.getElementById('toggle-menu').addEventListener('click', event => { toggleElementVisibility('panel') })
document.getElementById('copyrightDate').innerText = new Date().getFullYear()

fetch('https://gist.githubusercontent.com/Jasius/20d325502a0c55b1f6000fc855b09274/raw/data.json')
.then(response => response.json())
.then(data => {
  Render.byId(getProjectsCards(data.projects), 'projectsView') 
})
.catch(function (error) {
  Render.byId('<h1>Failed to load projects information</h1>', 'projectsView')
  console.error(error)
})