const container = document.querySelector('#container');

const para1 = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const para2 = document.createElement('p');

para1.textContent = "Hey I'm red!";
para1.style.color = "red";
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
div.style.cssText = "border: 1px solid black; color: pink;";
h1.textContent = "I'm in a div";
para2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);
container.appendChild(h3);
container.appendChild(para1);