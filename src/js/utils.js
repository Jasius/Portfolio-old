'use strict'
export class Render {
  static byId(content, node) {
    return (document.getElementById(node).innerHTML = content)
  }
  static byTag(content, node) {
    return (document.getElementById(node).innerHTML = content)
  }
}

export const getTechnologiesList = (path) => {
  return `<ul class="tools">${path.map(usedTechnology => `<li class="${usedTechnology.toLowerCase()}">${usedTechnology}</li>`).join('')}</ul>`
}

export const getWorkplaceHighlights = (path) => {
  return `<ul>${path.map(workplaceHighlight => `<li>${workplaceHighlight}</li>`).join('')}</ul>`
}

export const getTimespan = (date, node) => {
  const
    div = document.getElementById(node),
    today = new Date(),
    givenDate = new Date(date),
    month = today.getMonth() - givenDate.getMonth(),
    timespan = today.getFullYear() - givenDate.getFullYear()
  return (month < 0 || (month === 0 && today.getDate() < givenDate.getDate())) ? (div.innerText = timespan - 1) : (div.innerText = timespan)
}

export const toggleElementVisibility = (div) => {
  const element = document.getElementById(div)
  switch (element.style.display) {
    case 'block':
      element.style.display = 'none';
      break
    default:
      element.style.display = 'block'
  }
}

export const ctaCloseMenu = () => {
  const menuLinks = document.querySelectorAll("#panel > li"),
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let i;
  if (viewportWidth < 720) {
    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => document.getElementById("panel").style.display = 'none');
    }
  }
}