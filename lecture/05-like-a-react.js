import { createElement as h } from "./lib/EUID.js";

const appElement = h(
    'div', 
    {
        id: 'app',
        'data-type': 'application'
    }, 
    h(
        'h1', 
        {}, 
        '안녕!', 
        h('br'), 
        '리액트.'
    ),
    h(
        'p',
        { 'data-id': 'slogan' },
        '리액트는....'
    ),
);

console.log(appElement.outerHTML);