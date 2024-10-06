function showMenu() {
document.getElementById("drpDwn").classList.toggle("show");
}

const navLinkElements = document.querySelectorAll('.navlink');
const windowPathname = window.location.pathname;

navLinkElements.forEach(navLinkEl => {
  if (navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
});

//function myShoes() {
//document.grtElementById("shoes")
