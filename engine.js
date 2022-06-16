// ================================================= DAFTAR ISI =================================================
// ___JAM
// _
// ___NAV BAR
// _
// ___FADE IN
// _

// ================================================= JAM =================================================
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("jam").innertext = time;
    document.getElementById("jam").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

// ================================================= NAVBAR =================================================
const header = document.querySelector("header");
const sectionsatu = document.querySelector(".cover");

const sectionsatuoption = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionsatuobserver = new IntersectionObserver(function (
        entries,
        sectionsatuobserver
    ) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                header.classList.add("observed");
            } else {
                header.classList.remove("observed");
            }
        });
    },
    sectionsatuoption);

sectionsatuobserver.observe(sectionsatu);

// ================================================= FADE IN =================================================
const faders = document.querySelectorAll(".fade-in");

const appearoptions = {
    rootMargin: "0px 150px 0px 0px"
};

const appearonscroll = new IntersectionObserver(function (
        entries,
        appearonscroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearonscroll.unobserve(entry.target);
            }
        })
    },
    appearoptions);

faders.forEach(fader => {
    appearonscroll.observe(fader);
})

// ================================================= 3M =================================================
// ======================== MASKER =========================
const masker = document.querySelector(".masker");
const picsatu = document.querySelector(".first");

const picsatuoption = {
    rootMargin: "-500px 0px 500px 0px"
};

const picsatuobserver = new IntersectionObserver(function (
        entries,
        picsatuobserver
    ) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                masker.classList.add("color");
            } else {
                masker.classList.remove("color");
            }
        });
    },
    picsatuoption);

picsatuobserver.observe(picsatu);

// ======================== MASKER =========================
const cuci = document.querySelector(".cuci");
const picdua = document.querySelector(".second");

const picduaoption = {
    rootMargin: "-500px 0px 500px 0px"
};

const picduaobserver = new IntersectionObserver(function (
        entries,
        picduaobserver
    ) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                cuci.classList.add("color");
            } else {
                cuci.classList.remove("color");
            }
        });
    },
    picduaoption);

picduaobserver.observe(picdua);

// ======================== MASKER =========================
const jarak = document.querySelector(".jarak");
const pictiga = document.querySelector(".last");

const pictigaoption = {
    rootMargin: "-500px 0px 500px 0px"
};

const pictigaobserver = new IntersectionObserver(function (
        entries,
        pictigaobserver
    ) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                jarak.classList.add("color");
            } else {
                jarak.classList.remove("color");
            }
        });
    },
    pictigaoption);

pictigaobserver.observe(pictiga);
