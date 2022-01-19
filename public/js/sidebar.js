/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function toogleNav() {
    const ml = window.getComputedStyle(document.getElementById("main"))['marginLeft'];
    if(ml === '0px')
    {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }else
    {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
  }



