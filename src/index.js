import "./style.css";

import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contactus";

document.querySelector('#home-btn').addEventListener('click', home);
document.querySelector('#menu-btn').addEventListener('click', menu);
document.querySelector('#contact-btn').addEventListener('click', contact);



home();