const homeNav = document.getElementById("home-nav");
const aboutNav = document.getElementById("about-nav");
const portNav = document.getElementById("port-nav");
const contactNav = document.getElementById("contact-nav");

const scrollDown = document.getElementById("scroll-down-icon");
const scrollToTop = document.getElementById("scroll-top");

const navLinks = [homeNav, aboutNav, portNav, contactNav];
const aboutLocation = $("#home").height();
const portfolioLocation = aboutLocation + $("#about").height();
const contactLocation = portfolioLocation + $("#portfolio").height();
const sectionPosition = [0, aboutLocation, portfolioLocation, contactLocation];


$(window).on('beforeunload', () => {
    $(window).scrollTop(0);
 });

navLinks.forEach((element, i) => {
    element.addEventListener("click", () => window.scrollTo({
        top: sectionPosition[i - 1],
        behavior: "smooth"
    }));
    i++;
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 0) {
        $(".nav-link").removeClass("active-nav");
        $("#home-nav").addClass("active-nav");
    }
    if(scroll >= aboutLocation - ($(window).height() * 0.25)) {
        $(".nav-link").removeClass("active-nav");
        $("#about-nav").addClass("active-nav");
    }
    if(scroll >= portfolioLocation - ($(window).height() * 0.25)) {
        $(".nav-link").removeClass("active-nav");
        $("#port-nav").addClass("active-nav");
    }
    if(scroll >= contactLocation - ($(window).height() * 0.25)) {
        $(".nav-link").removeClass("active-nav");
        $("#contact-nav").addClass("active-nav");
    }
});

scrollDown.addEventListener("click", () => window.scrollTo({
    top: $(window).height() * 0.95,
    behavior: "smooth"
}));

scrollToTop.addEventListener("click", () => window.scrollTo({
    top: 0,
    behavior: "smooth"
}));
