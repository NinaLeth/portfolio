/*PAGE LOADER*/
// Tjek om siden er blevet besøgt i denne session
if (!sessionStorage.getItem('visited')) {
    // Kører kun, hvis det er første gang siden besøges i denne session

    const pageloader = document.getElementById('pageloader');
    const et = document.getElementById('et');
    const to = document.getElementById('to');
    const tre = document.getElementById('tre');
    const logo = document.getElementById('logo_forside');
    const forside = document.getElementById('content');

    setTimeout(function() {
        et.style.display = "block";
    }, 300); 

    setTimeout(function() {
        to.style.display = "block";
    }, 1000); 

    setTimeout(function() {
        tre.style.display = "block";
    }, 1700); 

    setTimeout(function() {
        pageloader.style.display = "none";
    }, 2200); 

    setTimeout(function() {
        logo.style.display = "block";
    }, 2200); 

    setTimeout(function() {
        forside.style.display = "block";
    }, 2200);

    // Marker siden som besøgt i denne session
    sessionStorage.setItem('visited', true);
}

/*BURGERMENU*/

const nav = document.getElementById("nav_menu")
const menu = document.getElementById("menu");
const kryds = document.getElementById("kryds");
const logo = document.getElementById("mobil_logo");

function visMenu() {
    nav.style.display = "block";
    menu.style.display = "none";
    kryds.style.display = "block";
    logo.style.display = "none";
    nav.style.backgroundColor = "#C2C0E5";
  }

menu.onclick= visMenu;

function gemMenu() {
  nav.style.display = "none";
  kryds.style.display = "none";
  menu.style.display = "block";
  logo.style.display = "block";
}

kryds.onclick= gemMenu;

/*KNAPPER*/

document.addEventListener("DOMContentLoaded", function () {
    const nina = document.getElementById('om');
    const cases = document.getElementById('cases');
    const kontakt = document.getElementById('kontakt');
    const kompetencer = document.getElementById('kompetencer');

    nina.addEventListener('click', function() {
        window.location.href= 'ommig.html';
    });

    cases.addEventListener('click', function() {
        window.location.href = 'cases.html';
    });

    kontakt.addEventListener('click', function() {
        window.location.href = 'kontakt.html';
    });

    kompetencer.addEventListener('click', function() {
        window.location.href = 'kompetencer.html';
    });
});