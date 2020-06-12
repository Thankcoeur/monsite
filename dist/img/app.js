function goto(ligne) {
    document.querySelector(ligne).classList.toggle("hidden");
}
var hmenu = document.getElementById('h-menu')
var listmenu = document.getElementById('menulist')
listmenu.style.display = 'none'
hmenu.addEventListener('touchstart', menu)



function menu() {
    var listmenu = document.getElementById('menulist')
    if (listmenu.style.display === "" || listmenu.style.display === "none") {

        listmenu.style.display = "block"

    } else {


        listmenu.style.display = "none"

    }








}
detectmobile()

function detectmobile() {

    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i))
        return true;
}
if (detectmobile()) {


} else {

    hmenu.addEventListener('click', menu)
}

window.addEventListener('scroll', function(e) {
    window.requestAnimationFrame(function() {
        if (window.scrollY > 400) {
            var logo = document.getElementsByClassName('Navbar__logo')[0]
            var navbar = document.getElementsByTagName('nav')[0]
            navbar.style.position = 'fixed'
            navbar.style.zIndex = "100"
            navbar.style.backgroundColor = "#003049ff"
            logo.style.display = "none"

        } else {
            var logo = document.getElementsByClassName('Navbar__logo')[0]
            logo.style.display = "block"

            var navbar = document.getElementsByTagName('nav')[0]
            navbar.style.position = 'static'
            navbar.style.zIndex = ""
            navbar.style.opacity = ""
            navbar.style.backgroundColor = "#003049"


        }





    })
})



var a = document.getElementsByTagName("a")
for (var item of a) {

    item.addEventListener('click', () => {
        var menu = document.getElementById('menulist')

        menu.style.display = "none"




    })

}