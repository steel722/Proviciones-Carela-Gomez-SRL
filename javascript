document.addEventListener("DOMContentLoaded", () => {
    const productosBtn = document.getElementById("productos-btn");
    const ofertasBtn = document.getElementById("ofertas-btn");
    const contactoBtn = document.getElementById("contacto-btn");
    const nosotrosBtn = document.getElementById("nosotros-btn");

    const productosSection = document.getElementById("productos");
    const ofertasSection = document.getElementById("ofertas");
    const contactoSection = document.getElementById("contacto");
    const nosotrosSection = document.getElementById("nosotros");


    productosBtn.addEventListener("click", () => {
        productosSection.style.display = "block";
        ofertasSection.style.display = "none";
        contactoSection.style.display = "none";
    });

    ofertasBtn.addEventListener("click", () => {
        productosSection.style.display = "none";
        ofertasSection.style.display = "block";
        contactoSection.style.display = "none";
    });

    contactoBtn.addEventListener("click", () => {
        productosSection.style.display = "none";
        ofertasSection.style.display = "none";
        contactoSection.style.display = "block";
    });

    nosotrosBtn.addEventListener("click", () => {
        productosSection.style.display = "none";
        ofertasSection.style.display = "none";
        contactoSection.style.display = "none";
        nosotrosSection.style.display = "block";
    });
});
