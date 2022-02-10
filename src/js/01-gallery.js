import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const createdGallery = makeGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", createdGallery);

function makeGallery(obj) {
    return obj.map(({ preview, original, description }) => {
        return `
       <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}"
                alt="${description}"
                title ="${description}" />
        </a>`
  
    }).join(" ");
}


let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});
gallery.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }
   
}