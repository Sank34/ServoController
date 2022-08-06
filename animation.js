let menutoggle = document.querySelector('div.content > div.toggle')
menutoggle.onclick = function (){
  if (menutoggle.classList.contains('active')) {
        menutoggle.classList.remove('active')
    } else {
        menutoggle.classList.add('active')
    }
}

        