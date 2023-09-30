import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { carrouselComponent } from "./components/carrousel.js";

window.onload = function() {
    const appHeader = document.getElementById("appHeader");
    appHeader.innerHTML = headerComponent();

    const appCarrousel = document.getElementById("appCarrousel");
    appCarrousel.innerHTML = carrouselComponent();
    
    const appFooter = document.getElementById("appFooter");
    appFooter.innerHTML = footerComponent;
};