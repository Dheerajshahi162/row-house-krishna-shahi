let currentImage = 1;
const totalImages = 27;

function openLightbox(index) {
    currentImage = index;
    document.getElementById("lightbox").style.display = "flex";
    updateLightbox();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentImage += step;
    if (currentImage < 1) currentImage = totalImages;
    if (currentImage > totalImages) currentImage = 1;
    updateLightbox();
}

function updateLightbox() {
    document.getElementById("lightbox-img").src =
        `images/img${currentImage}.jpeg`;
}

function sendWhatsApp() {
    const n = name.value;
    const p = phone.value;
    const msg = `Hello, my name is ${n}. I am interested in Krishna Shahi Row House. Phone: ${p}`;
    window.open(`https://wa.me/917523805594?text=${encodeURIComponent(msg)}`);
}
