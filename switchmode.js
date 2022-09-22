// Dark light version
const themeCookieName = 'theme'
const themeDark = 'bg-dark'
const themeDarkText = 'text-white'
const themeLight = 'light'
const darkText = 'text-white'

const body = document.getElementById('body');
const btn = document.getElementsByClassName('btn');

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

loadTheme()

function loadTheme() {
    var theme = getCookie(themeCookieName)
    body.classList.add(theme === "" ? themeLight : theme)
}

function switchTheme() {

    if (body.classList.contains(themeLight)) {
        body.classList.remove(themeLight)
        body.classList.add(themeDark)
        body.classList.add(themeDarkText)
        for (let i=0; i<btn.length; i++){
            btn[i].classList.add(darkText)
        }
    setCookie(themeCookieName, themeDark)

    } else {
        body.classList.remove(themeDark)
        body.classList.remove(themeDarkText)
        for (let i=0; i<btn.length; i++){
            btn[i].classList.remove(darkText)
        }
        body.classList.add(themeLight)
    setCookie(themeCookieName, themeLight)
    }
}
