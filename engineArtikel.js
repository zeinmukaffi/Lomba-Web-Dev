const column = document.querySelector(".column");
const sectionsatu = document.querySelector("header");

const sectionsatuoption = {
    rootMargin: "-150px 0px 0px 0px"
};

const sectionsatuobserver = new IntersectionObserver(function (
        entries,
        sectionsatuobserver
    ) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                column.classList.add("appear");
            } else {
                column.classList.remove("appear");
            }
        });
    },
    sectionsatuoption);

sectionsatuobserver.observe(sectionsatu);