let menutoggle = document.querySelector('div.content > div.toggle')
let menubar = document.querySelector('div.content > div.menu')
menutoggle.onclick = function (){
  if (menutoggle.classList.contains('active')) {
        menutoggle.classList.remove('active')
        menubar.classList.remove('active')
    } else {
        menutoggle.classList.add('active')
        menubar.classList.add('active')
    }
}

