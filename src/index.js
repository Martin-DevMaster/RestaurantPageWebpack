import './style.css';
import { checkHome, home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';

const content = document.querySelector('#content');
const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const menuBtn = document.querySelector('.menuBtn');


home();
aboutBtn.addEventListener('click', about);
homeBtn.addEventListener('click', checkHome);
menuBtn.addEventListener('click', menu);

