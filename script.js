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

/*pil bag burgermenu

function flytPilUnderMenu() {
    const pil = document.getElementById('pil');
    const burgermenu = document.getElementById('nav_menu');
  
    if (burgermenu.style.display === 'none') {
        // Vis burgermenuen
        burgermenu.style.display = 'block';
        pil.style.display = 'none'; //pilen fjernes
      } else {
        // Skjul burgermenuen
        burgermenu.style.display = 'none';
        pil.style.display = 'block' // pilen vises
      }
    }*/

/*KNAPPER*/

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.wrapper div, .grid43, .grid44');

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

const knap_gelleruphojskole = document.getElementById("grid14");
const lyd1 = document.getElementById("lyd_gellerup1");

knap_gelleruphojskole.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd1.play();
};

knap_gelleruphojskole.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd1.paused) {
        lyd1.play();
    } else {
        lyd1.pause();
    }
};

const knap_bk = document.getElementById("grid25");
const lyd2 = document.getElementById("lyd_bk1");

knap_bk.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd2.play();
};

knap_bk.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd2.paused) {
        lyd2.play();
    } else {
        lyd2.pause();
    }
};

const knap_gelleruphojskole2 = document.getElementById("grid111");
const lyd3 = document.getElementById("lyd_gellerup2");

knap_gelleruphojskole2.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd3.play();
};

knap_gelleruphojskole2.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd3.paused) {
        lyd3.play();
    } else {
        lyd3.pause();
    }
};

const knap_bke = document.getElementById("grid34");
const lyd4 = document.getElementById("lyd_bk");

knap_bke.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd4.play();
};

knap_bke.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd4.paused) {
        lyd4.play();
    } else {
        lyd4.pause();
    }
};

const knap_grim = document.getElementById("grid38");
const lyd5 = document.getElementById("lyd_grim");

knap_grim.onclick = function(){ //når man klikker på knappen går lyden igang
    lyd5.play();
};

knap_grim.onclick = function () { //at den pauser og starter igen når man klikker
    if (lyd5.paused) {
        lyd5.play();
    } else {
        lyd5.pause();
    }
};


