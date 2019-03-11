"use strict";
import "./scss/index";
import { timespan, Render } from "./js/utils";
import { projectsCards } from "./js/components";

timespan("3/19/1997", "age");
timespan("1/4/2016", "experienceAge");
document.getElementById("copyrightDate").innerText = new Date().getFullYear();
console.log('lol')

fetch(
  "https://gist.githubusercontent.com/Jasius/20d325502a0c55b1f6000fc855b09274/raw/data.json"
)
  .then(response => response.json())
  .then(data => {
    console.info(data);
    Render.byId(projectsCards(data.projects), "projectsView");
  });
