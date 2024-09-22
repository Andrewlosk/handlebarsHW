// import { countries } from "./list.js";

// import Handlebars from "handlebars"

// import templateSource  from "../src/templates/menu.hbs";




// const countriesContainer = document.querySelector('#countriesContainer')
// const renderedHtml = templateSource({countries})
// countriesContainer.innerHTML = renderedHtml


import { products } from "./list.js";

import Handlebars from "handlebars"

import templateSource  from "../src/templates/menu.hbs";




const productsContainer = document.querySelector('#productsContainer')
const renderedHtml = templateSource({products})
productsContainer.innerHTML = renderedHtml