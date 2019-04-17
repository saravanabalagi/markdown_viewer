// ==UserScript==
// @name         Markdown Viewer
// @author       Saravanabalagi Ramachandran
// @version      0.1
// @description  renders readme files in markdown
// @include      file:///*.md
// @require      http://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js
// ==/UserScript==

document.head.insertAdjacentHTML( 'beforeend', '<link href="https://unpkg.com/primer/build/build.css" rel="stylesheet">' );

let converter = new showdown.Converter();
converter.setFlavor('github');
let bodyNode = document.getElementsByTagName("body")[0];
let markdownPre = document.getElementsByTagName('pre')[0];

let markdownNode = document.createElement("div");
markdownNode.classList.add('markdown-body');
let html = converter.makeHtml(markdownPre.innerHTML);
markdownNode.innerHTML = html;

bodyNode.appendChild(markdownNode);
bodyNode.removeChild(markdownPre);
