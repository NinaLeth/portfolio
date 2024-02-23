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

// Lyt efter beforeunload-eventet og fjern 'visited' fra sessionStorage
window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('visited');
});

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

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.wrapper div');

    links.forEach(link => {
        link.addEventListener('click', function() {
            const destination = this.querySelector('a').getAttribute('href');
            window.location.href = destination;
        });
    });
});

/*LYD*/

const knap_gellerup = document.getElementById("grid9");
const lyd = document.getElementById("lyd");

knap_gellerup.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd.play();
};

knap_gellerup.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd.paused) {
        lyd.play();
    } else {
        lyd.pause();
    }
};
