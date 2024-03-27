function ampliarImagen(id) {
    var imagen = document.getElementById(id);
    if (imagen.className.includes("ampliada")) {
        imagen.classList.remove("ampliada");
    } else {
        imagen.classList.add("ampliada");
    }
}